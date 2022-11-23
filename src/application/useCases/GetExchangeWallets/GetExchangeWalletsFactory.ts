import { BinanceController } from "../../../main/exchanges/binance/BinanceController";
import { PostgresUserRepository } from "../../repositories/controllers/PostgresUserRepository";
import { GetExchangeWalletsUseCase } from "./GetExchangeWalletsUseCase";

export function GetExchangeWalletsFactory() {
  const postgresUserRepository = new PostgresUserRepository();
  const binanceController = new BinanceController();

  return new GetExchangeWalletsUseCase(postgresUserRepository, binanceController)
}