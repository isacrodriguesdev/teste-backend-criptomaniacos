import { Wallet } from "../../../domain/entities/Wallet";
import { IWalletRepository } from "../IWalletRepository";
import database from "./connections/PostgresConnection";

export class PostgresWalletRepository implements IWalletRepository {

  async create(user: Wallet): Promise<{ id: number; }> {
    const [{ id }] = await database("wallets").insert(user).returning('id')
    return { id }
  }

  findById(id: number): Promise<Wallet | null> {
    return database("wallets")
      .where("id", id)
      .first()
  }

  findByUser(userId: number): Promise<Wallet[]> {
    return database("users")
      .select("wallets.*")
      .join("wallets", { "users.id": "wallets.user_id" })
      .where("user_id", userId)
  }

  find(): Promise<Wallet[]> {
    return database("wallets").select("*")
  }
}