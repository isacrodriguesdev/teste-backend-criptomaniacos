import { HttpRequest, HttpResponse } from "../../protocols/Http";
import { IUserRepository } from "../../repositories/IUserRepository";

export class GetUserUserCase {

  constructor(
    private readonly userRepository: IUserRepository
  ) {
  }

  public async execute(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const user = await this.userRepository.findById(httpRequest.user.id)

      const { password, apiKey, apiSecret, ...rest } = user;

      return {
        status: 200,
        body: rest
      }
    } catch (error) {
      return { body: { error }, status: 400 }
    }
  }
}