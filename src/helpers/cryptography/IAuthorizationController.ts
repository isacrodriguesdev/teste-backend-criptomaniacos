import { User } from "../../domain/entities/User"

export interface IAuthorizationController {
  createToken(data: Omit<User, "updated_at" | "password">): string
  verifyToken(token: string): Promise<any>
}