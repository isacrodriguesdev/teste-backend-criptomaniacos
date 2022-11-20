import { HttpRequest, HttpResponse } from "../../protocols/Http";
import { IWalletRepository } from "../../repositories/IWalletRepository";

export class GetWalletUseCase {

  constructor(
    private readonly walletRepository: IWalletRepository,
  ) {
  }

  public async execute(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const wallets = await this.walletRepository.findByUser(httpRequest.user.id)
      const balance = wallets.reduce((previousValue, { balance }) => previousValue + balance, 0)

      return {
        status: 200,
        body: {
          balance: parseFloat(balance.toFixed(2)),
          wallets
        }
      }
    } catch (error) {
      return { body: { error }, status: 500 }
    }
  }
}