import { Request, Response } from "express";
import { HttpRequest, HttpResponse } from "../../protocols/Http";
import { CreateUserFactory } from "./CreateUserFactory";

export class CreateUserController {

  async execute(request: Request, response: Response) {

    const createUserFactory = CreateUserFactory()

    const httpRequest: HttpRequest = {
      body: request.body,
    }
    
    const httpResponse: HttpResponse = await createUserFactory.execute(httpRequest);

    return response.status(httpResponse.status).send(httpResponse.body)
  }
}