import Binance, { Binance as IBinance } from "binance-api-node"
import { User } from "../../../domain/entities/User";
import { ICurrency, IExchangeController } from "../IExchangeController";

export class BinanceController implements IExchangeController {

  private getClient(user: User) {
    return Binance({
      apiKey: user.apiKey,
      apiSecret: user.apiSecret
    })
  }

  async getCurrencies(user: User): Promise<ICurrency[]> {
    const account = await this.getClient(user).accountInfo()
    return account.balances
      .filter(({ free }) => parseFloat(free))
      .map((coin) => ({
        asset: coin.asset,
        balance: coin.free
      }))
  }
}