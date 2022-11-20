import { BCryptControllerAdpter } from "../../../helpers/cryptography/bcrypt/BCryptControllerAdapter";
import { JwtControllerAdapter } from "../../../helpers/cryptography/jwt/JwtControllerAdapter";
import { PostgresUserRepository } from "../../repositories/implementations/PostgresUserRepository";
import { CreateUserUseCase } from "./CreateUserUseCase";

export function CreateUserFactory() {
  const postgresUserRepository = new PostgresUserRepository();
  const bCryptControllerAdpter = new BCryptControllerAdpter();
  const jwtControllerAdapter = new JwtControllerAdapter();

  return new CreateUserUseCase(postgresUserRepository, bCryptControllerAdpter, jwtControllerAdapter)
}