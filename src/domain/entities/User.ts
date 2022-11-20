import { v4 as uuidv4 } from "uuid"

export class User {

  public readonly id?: number
  public readonly uuid?: string
  public username: string
  public email: string
  public password: string
  public apiKey: string
  public apiSecret: string
  public createdAt: Date
  public updatedAt?: Date

  public constructor(user: Omit<User, "id">) {
    
    this.username = user.username;
    this.email = user.email;
    this.password = user.password;
    this.apiKey = user.apiKey;
    this.apiSecret = user.apiSecret;
    this.createdAt = new Date();

    if(!user.uuid) {
      this.uuid = uuidv4()
    } 
  }
}