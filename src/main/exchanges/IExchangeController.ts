import { UserKeypair } from "../../application/repositories/IUserRepository";
import { User } from "../../domain/entities/User";

export type ICurrency = {
  asset: string
  balance: string
} 

export interface IExchangeController {
  getCurrencies(user: UserKeypair): Promise<ICurrency[]>
}