import { Request, Response } from "express";
import { HttpRequest, HttpResponse } from "../../protocols/Http";
import { GetWalletFactory } from "./GetWalletFactory";

export class GetWalletController {

  async execute(request: Request, response: Response) {
    
    const getWalletFactory = GetWalletFactory()

    const httpRequest: HttpRequest = {
      body: request.body,
      user: request.user
    }
    
    const httpResponse: HttpResponse = await getWalletFactory.execute(httpRequest);

    return response.status(httpResponse.status).send(httpResponse.body)
  }
}