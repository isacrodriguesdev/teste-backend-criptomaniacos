import { Request, Response } from "express";
import { HttpRequest, HttpResponse } from "../../protocols/Http";
import { CreateWalletFactory } from "./CreateUserFactory";

export class CreateWalletController {

  async execute(request: Request, response: Response) {

    const createWalletFactory = CreateWalletFactory()

    const httpRequest: HttpRequest = {
      body: request.body,
      user: request.user
    }
    
    const httpResponse: HttpResponse = await createWalletFactory.execute(httpRequest);

    return response.status(httpResponse.status).send(httpResponse.body)
  }
}