import { Request, Response } from "express";
import { HttpRequest, HttpResponse } from "../../protocols/Http";
import { LoginUserFactory } from "./LoginUserFactory";

export class LoginUserController {

  async execute(request: Request, response: Response) {

    const loginUserFactory = LoginUserFactory()

    const httpRequest: HttpRequest = {
      body: request.body,
    }
    
    const httpResponse: HttpResponse = await loginUserFactory.execute(httpRequest);

    return response.status(httpResponse.status).send(httpResponse.body)
  }
}