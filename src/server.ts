import express from "express";
import swaggerUi from "swagger-ui-express";
import swaggerDocs from "./swagger.json";

import { CreateUserController } from "./application/useCases/CreateUser/CreateUserController";
import { CreateWalletController } from "./application/useCases/CreateWallet/CreateWalletController";
import { GetUserController } from "./application/useCases/GetUser/GetUserController";
import { GetWalletController } from "./application/useCases/GetWallet/GetWalletController";
import { RouteAuthorizationController } from "./domain/middlewares/RouteAuthorization/RouteAuthorizationController";
import { LoginUserController } from "./application/useCases/LoginUser/LoginUserController";
import { GetExchangeWalletsController } from "./application/useCases/GetExchangeWallets/GetExchangeWalletsController";

const auth = new RouteAuthorizationController();

const loginUserController = new LoginUserController();
const createUserController = new CreateUserController();
const getUserController = new GetUserController();

const createWalletController = new CreateWalletController();
const getWalletController = new GetWalletController();
const getExchangeWalletsController = new GetExchangeWalletsController();

const app = express();
app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs))

app.post("/v1/user/login", loginUserController.execute);

app.post("/v1/user", createUserController.execute);
app.get("/v1/user", auth.execute, getUserController.execute);

app.post("/v1/wallet", auth.execute, createWalletController.execute);
app.get("/v1/wallet", auth.execute, getWalletController.execute);

app.get("/v1/binance/wallet", auth.execute, getExchangeWalletsController.execute);

app.listen(4000);