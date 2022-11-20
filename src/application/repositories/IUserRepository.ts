import { User } from "../../domain/entities/User";

export type UserKeypair = {
  apiKey: string
  apiSecret: string
}

export interface IUserRepository {
  findByEmail(email: string): Promise<User | null>
  findById(id: number): Promise<User>
  findKeypair(id: number): Promise<UserKeypair>
  find(): Promise<User[]>
  create(user: User): Promise<{ id: number }>
}