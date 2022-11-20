declare namespace  Express {
  export interface Request {
    user: {
      id: number,
      uuid: string,
      email: string
      apiKey: string
      apiSecret: string
    }
  }
}