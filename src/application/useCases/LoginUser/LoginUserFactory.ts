import { BCryptController } from "../../../helpers/cryptography/bcrypt/BCryptController";
import { JwtController } from "../../../helpers/cryptography/jwt/JwtController";
import { PostgresUserRepository } from "../../repositories/controllers/PostgresUserRepository";
import { LoginUserUseCase } from "./LoginUserUseCase";

export function LoginUserFactory() {
  const postgresUserRepository = new PostgresUserRepository();
  const bCryptController = new BCryptController();
  const jwtController = new JwtController();

  return new LoginUserUseCase(postgresUserRepository, bCryptController, jwtController)
}