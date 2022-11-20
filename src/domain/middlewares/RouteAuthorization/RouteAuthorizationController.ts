import { NextFunction, Request, Response } from "express";
import { HttpRequest, HttpResponse } from "../../../application/protocols/Http";
import { RouteAuthorizationFactory } from "./RouteAuthorizationFactory";

export class RouteAuthorizationController {

  async execute(request: Request, response: Response, next: NextFunction) {

    const routeAuthorizationFactory = RouteAuthorizationFactory()

    const httpRequest: HttpRequest = {
      body: request.body,
      user: request.user,
      headers: request.headers
    }

    const httpResponse: HttpResponse = await routeAuthorizationFactory.execute(httpRequest);
    
    if (httpResponse.status === 401) {
      return response.status(httpResponse.status).send(httpResponse.body)
    }

    request.user = httpResponse.user;

    next();
  }
}