import { HttpRequest, HttpResponse } from "../../../application/protocols/Http"
import { IAuthorizationController } from "../../../helpers/cryptography/IAuthorizationController"

export class RouteAuthorizationUseCase {

  constructor(private readonly authorizationController: IAuthorizationController) { }

  async execute(httpRequest: HttpRequest): Promise<HttpResponse> {
    if (!httpRequest.headers.authorization) {
      return { body: { error: "token not provided" }, status: 401 }
    }

    const [schema, token] = httpRequest.headers.authorization.split(" ")

    if(schema !== "Bearer") {
      return { body: { error: "badly formatted token" }, status: 401 }
    }

    try {
      const decoded = await this.authorizationController.verifyToken(token)
      return { body: {}, status: 201, user: decoded }

    } catch (error) {
      return { body: { error: "not authenticated" }, status: 401 }
    }
  }
}
