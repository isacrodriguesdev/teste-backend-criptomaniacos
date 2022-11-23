import { PostgresWalletRepository } from "../../repositories/controllers/PostgresWalletRepository";
import { GetWalletUseCase } from "./GetWalletUseCase";

export function GetWalletFactory() {
  const postgresWalletRepository = new PostgresWalletRepository();

  return new GetWalletUseCase(postgresWalletRepository)
}