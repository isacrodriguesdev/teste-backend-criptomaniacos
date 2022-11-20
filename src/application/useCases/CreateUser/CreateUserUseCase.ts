import { User } from "../../../domain/entities/User";
import { IAuthorizationController } from "../../../helpers/cryptography/IAuthorizationController";
import { IEncryptionController } from "../../../helpers/cryptography/IEncryptionController";
import { HttpRequest, HttpResponse } from "../../protocols/Http";
import { IUserRepository } from "../../repositories/IUserRepository";

export class CreateUserUseCase {

  constructor(
    private readonly userRepository: IUserRepository,
    private readonly encryptionController: IEncryptionController,
    private readonly authorizationController: IAuthorizationController
  ) { }

  public async execute(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const userAlreadyExists = await this.userRepository.findByEmail(httpRequest.body.email)

      if (userAlreadyExists) {
        return { body: { error: "User already exists" }, status: 400 }
      }

      const user = new User(httpRequest.body);
      user.password = await this.encryptionController.genPassword(httpRequest.body.password);

      const { id } = await this.userRepository.create(user);

      const token = this.authorizationController.createToken({ id, ...user });
      
      const { password, apiKey, apiSecret, ...restUser } = user

      return {
        status: 200,
        body: {
          user: {
            id,
            ...restUser
          },
          token
        },
      }
    } catch (error) {
      return {
        status: 500,
        body: { error }
      }
    }
  }
}