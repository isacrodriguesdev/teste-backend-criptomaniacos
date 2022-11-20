import { v4 as uuidv4 } from "uuid"
export class Wallet {

  public readonly id?: number
  public uuid?: string
  public userId: number
  public asset: string
  public balance: number
  public createdAt: Date
  public updatedAt?: Date

  public constructor(wallet: Omit<Wallet, "id">) {

    this.userId = wallet.userId;
    this.asset = wallet.asset;
    this.balance = wallet.balance;
    this.createdAt = new Date();

    if(!wallet.uuid) {
      this.uuid = uuidv4()
    }
  }
}