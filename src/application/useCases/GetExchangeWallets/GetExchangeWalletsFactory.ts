
import { BinanceControllerAdapter } from "../../../main/exchanges/Binance/BinanceControllerAdapter";
import { PostgresUserRepository } from "../../repositories/implementations/PostgresUserRepository";
import { GetExchangeWalletsUseCase } from "./GetExchangeWalletsUseCase";

export function GetExchangeWalletsFactory() {
  const postgresUserRepository = new PostgresUserRepository();
  const binanceControllerAdapter = new BinanceControllerAdapter();

  return new GetExchangeWalletsUseCase(postgresUserRepository, binanceControllerAdapter)
}