import { PostgresUserRepository } from "../../repositories/controllers/PostgresUserRepository";
import { GetUserUserCase } from "./GetUserUseCase";

export function GetUserFactory() {
  const postgresUserRepository = new PostgresUserRepository();

  return new GetUserUserCase(postgresUserRepository)
}