import { PostgresUserRepository } from "../../repositories/implementations/PostgresUserRepository";
import { GetUserUserCase } from "./GetUserUseCase";

export function GetUserFactory() {
  const postgresUserRepository = new PostgresUserRepository();

  return new GetUserUserCase(postgresUserRepository)
}