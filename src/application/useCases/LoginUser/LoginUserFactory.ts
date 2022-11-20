import { BCryptControllerAdpter } from "../../../helpers/cryptography/bcrypt/BCryptControllerAdapter";
import { JwtControllerAdapter } from "../../../helpers/cryptography/jwt/JwtControllerAdapter";
import { PostgresUserRepository } from "../../repositories/implementations/PostgresUserRepository";
import { LoginUserUseCase } from "./LoginUserUseCase";

export function LoginUserFactory() {
  const postgresUserRepository = new PostgresUserRepository();
  const bCryptControllerAdpter = new BCryptControllerAdpter();
  const jwtControllerAdapter = new JwtControllerAdapter();

  return new LoginUserUseCase(postgresUserRepository, bCryptControllerAdpter, jwtControllerAdapter)
}