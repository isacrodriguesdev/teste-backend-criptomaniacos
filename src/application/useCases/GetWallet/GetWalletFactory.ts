import { PostgresWalletRepository } from "../../repositories/implementations/PostgresWalletRepository";
import { GetWalletUseCase } from "./GetWalletUseCase";

export function GetWalletFactory() {
  const postgresWalletRepository = new PostgresWalletRepository();

  return new GetWalletUseCase(postgresWalletRepository)
}