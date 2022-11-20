import { PostgresWalletRepository } from "../../repositories/implementations/PostgresWalletRepository";
import { CreateWalletUseCase } from "./CreateWalletUseCase";

export function CreateWalletFactory() {
  const postgresWalletRepository = new PostgresWalletRepository();

  return new CreateWalletUseCase(postgresWalletRepository)
}