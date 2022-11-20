import { CreateUserFactory } from "./CreateUserFactory";
import { HttpRequest } from "../../protocols/Http";
import { BCryptControllerAdpter } from "../../../helpers/cryptography/bcrypt/BCryptControllerAdapter";
import { PostgresUserRepository } from "../../repositories/implementations/PostgresUserRepository";

describe("User", () => {
  it('should create a new user', async () => {

    const createUserFactory = CreateUserFactory();
    const encryptionController = new BCryptControllerAdpter();
    const userRepository = new PostgresUserRepository();

    const httpRequest: HttpRequest = {
      body: {
        username: "username",
        email: "test@email.com",
        password: "password",
      }
    }

    const httpResponse = await createUserFactory.execute(httpRequest);

    expect(httpResponse.status).toBe(200)
    expect(httpResponse.body.user).not.toBeUndefined()
    expect(httpResponse.body.token).not.toBeUndefined()
    expect(httpResponse.body.user.password).toBeUndefined()
    expect(httpResponse.body.user.apiKey).toBeUndefined()
    expect(httpResponse.body.user.apiSecret).toBeUndefined()

    const tokenArray: string[] = httpResponse.body.token.split(".")
    expect(tokenArray.length).toBe(3)
    
    const user = await userRepository.findById(httpResponse.body.user.id);
    expect(user).not.toBeUndefined()
    
    const correctPassword = await encryptionController.comparePassword(httpRequest.body.password, user.password);
    
    expect(correctPassword).toBe(true)
  });
})