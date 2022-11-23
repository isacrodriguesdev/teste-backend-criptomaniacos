import { PostgresWalletRepository } from "../../repositories/controllers/PostgresWalletRepository";
import { CreateWalletUseCase } from "./CreateWalletUseCase";

export function CreateWalletFactory() {
  const postgresWalletRepository = new PostgresWalletRepository();

  return new CreateWalletUseCase(postgresWalletRepository)
}