import { BCryptController } from "../../../helpers/cryptography/bcrypt/BCryptController";
import { JwtController } from "../../../helpers/cryptography/jwt/JwtController";
import { PostgresUserRepository } from "../../repositories/controllers/PostgresUserRepository";
import { CreateUserUseCase } from "./CreateUserUseCase";

export function CreateUserFactory() {
  const postgresUserRepository = new PostgresUserRepository();
  const bCryptController = new BCryptController();
  const jwtController = new JwtController();

  return new CreateUserUseCase(postgresUserRepository, bCryptController, jwtController)
}