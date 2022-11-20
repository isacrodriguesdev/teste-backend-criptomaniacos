import { JwtControllerAdapter } from "../../../helpers/cryptography/jwt/JwtControllerAdapter";
import { RouteAuthorizationUseCase } from "./RouteAuthorizationUseCase";

export function RouteAuthorizationFactory() {
  const jwtControllerAdapter = new JwtControllerAdapter();

  return new RouteAuthorizationUseCase(jwtControllerAdapter)
}