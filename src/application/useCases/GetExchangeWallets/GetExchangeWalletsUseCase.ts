import { IExchangeController } from "../../../main/exchanges/IExchangeController";
import { HttpRequest } from "../../protocols/Http";
import { IUserRepository } from "../../repositories/IUserRepository";

export class GetExchangeWalletsUseCase {

  constructor(
    private readonly userRepository: IUserRepository,
    private readonly exchangeController: IExchangeController
  ) { }

  async execute(httpRequest: HttpRequest) {
    try {
      const user = await this.userRepository.findKeypair(httpRequest.user.id);

      const currencies = await this.exchangeController.getCurrencies(user);

      return {
        status: 200,
        body: currencies,
      }

    } catch (error) {
      return { body: { error }, status: 400 }
    }
  }
}