import { Request, Response } from "express";
import { HttpRequest, HttpResponse } from "../../protocols/Http";
import { GetUserFactory } from "./GetUserFactory";

export class GetUserController {

  async execute(request: Request, response: Response) {

    const getUserFactory = GetUserFactory()

    const httpRequest: HttpRequest = {
      body: request.body,
      user: request.user
    }
    
    const httpResponse: HttpResponse = await getUserFactory.execute(httpRequest);

    return response.status(httpResponse.status).send(httpResponse.body)
  }
}