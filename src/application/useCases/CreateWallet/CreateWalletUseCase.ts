import { Wallet } from "../../../domain/entities/Wallet";
import { HttpRequest, HttpResponse } from "../../protocols/Http";
import { IWalletRepository } from "../../repositories/IWalletRepository";

export class CreateWalletUseCase {

  constructor(
    private readonly walletRepository: IWalletRepository
  ) {
  }

  public async execute(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const wallet = new Wallet({
        ...httpRequest.body,
        userId: httpRequest.user.id
      })

      const { id } = await this.walletRepository.create(wallet);

      return {
        status: 200,
        body: {
          id, 
          ...wallet
        },
      }
    } catch (error) {
      return { body: { error }, status: 400 }
    }
  }
}