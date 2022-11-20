import jwt from "jsonwebtoken"
import { User } from "../../../domain/entities/User"
import { IAuthorizationController } from "../IAuthorizationController"

export class JwtControllerAdapter implements IAuthorizationController {

  private secretKey: string = "6ar^gi7fw^7r3h4cBwJAoiyd9d9CeU#%Je9yaRo2$bDPawLrXGBUXEE%2xbD^";

  createToken(data: User): string {
    return jwt.sign({
      id: data.id,
      uuid: data.uuid,
      username: data.username,
      email: data.email,
      createdAt: data.createdAt
    } as User, this.secretKey, { expiresIn: "30d" })
  }

  verifyToken(token: string): Promise<any> {
    return new Promise((resolve, reject) => {
      jwt.verify(token, this.secretKey, (error, decoded) => {
        if (error) {
          return reject(error)
        }
        resolve(decoded)
      })
    })
  }
}