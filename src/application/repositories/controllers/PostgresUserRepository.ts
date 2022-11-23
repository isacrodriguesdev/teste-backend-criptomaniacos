import { User } from "../../../domain/entities/User";
import { IUserRepository, UserKeypair } from "../IUserRepository";
import database from "./connections/PostgresConnection";

export class PostgresUserRepository implements IUserRepository {

  async create(user: User): Promise<{ id: number; }> {
    const [{ id }] = await database("users").insert(user).returning('id')
    return { id }
  }

  findByEmail(email: string): Promise<User | null> {
    return database("users")
    .where("email", email)
    .first()
  }

  findById(id: number): Promise<User> {
    return database("users")
    .where("id", id)
    .first()
  }

  find(): Promise<User[]> {
    return database("users")
      .select("id", "uuid", "username", "email", "created_at", "updated_at")
  }

  findKeypair(id: number): Promise<UserKeypair> {
    return database("users")
    .where("id", id)
    .select("api_key", "api_secret")
    .first()
  }
}