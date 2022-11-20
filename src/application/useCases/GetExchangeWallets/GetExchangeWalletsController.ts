import { Request, Response } from "express";
import { HttpRequest, HttpResponse } from "../../protocols/Http";
import { GetExchangeWalletsFactory } from "./GetExchangeWalletsFactory";

export class GetExchangeWalletsController {

  async execute(request: Request, response: Response) {

    const getExchangeWalletsFactory = GetExchangeWalletsFactory()

    const httpRequest: HttpRequest = {
      body: request.body,
      user: request.user
    }
    
    const httpResponse: HttpResponse = await getExchangeWalletsFactory.execute(httpRequest);

    return response.status(httpResponse.status).send(httpResponse.body)
  }
}