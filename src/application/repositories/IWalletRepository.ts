import { Wallet } from "../../domain/entities/Wallet";

export interface IWalletRepository {
  create(user: Wallet): Promise<{ id: number }>
  find(): Promise<Wallet[]>
  findById(id: number): Promise<Wallet | null>
  findByUser(userId: number): Promise<Wallet[]>
}