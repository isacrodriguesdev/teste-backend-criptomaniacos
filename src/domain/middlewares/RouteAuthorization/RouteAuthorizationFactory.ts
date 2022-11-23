import { JwtController } from "../../../helpers/cryptography/jwt/JwtController";
import { RouteAuthorizationUseCase } from "./RouteAuthorizationUseCase";

export function RouteAuthorizationFactory() {
  const jwtController = new JwtController();

  return new RouteAuthorizationUseCase(jwtController)
}