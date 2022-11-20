import { User } from "../../../domain/entities/User";
import { IAuthorizationController } from "../../../helpers/cryptography/IAuthorizationController";
import { IEncryptionController } from "../../../helpers/cryptography/IEncryptionController";
import { HttpRequest } from "../../protocols/Http";
import { IUserRepository } from "../../repositories/IUserRepository";

export class LoginUserUseCase {

  constructor(
    private readonly userRepository: IUserRepository,
    private readonly encryptionController: IEncryptionController,
    private readonly authorizationController: IAuthorizationController
  ) { }

  async execute(httpRequest: HttpRequest) {
    try {
      const user = await this.userRepository.findByEmail(httpRequest.body.email)

      if (!user) {
        return { body: { error: "User not found" }, status: 400 }
      }

      const correctPassword = await this.encryptionController.comparePassword(
        httpRequest.body.password,
        user.password
      );

      if (correctPassword) {
        const token = this.authorizationController.createToken(user);
        
        const { password, apiKey, apiSecret, ...restUser } = user

        return {
          status: 200,
          body: {
            user: restUser,
            token
          },
        }
      }

      return {
        status: 403,
        body: { error: "Incorrect password" }
      }

    } catch (error) {
      return {
        status: 500,
        body: { error }
      }
    }
  }
}