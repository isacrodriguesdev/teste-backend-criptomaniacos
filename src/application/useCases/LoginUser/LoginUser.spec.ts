import { LoginUserFactory } from "./LoginUserFactory";
import { HttpRequest } from "../../protocols/Http";

describe("User", () => {
  it('should authetication user', async () => {

    const createUserFactory = LoginUserFactory();
  
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
    expect(httpResponse.body.user.id).not.toBeUndefined()
    expect(httpResponse.body.token).not.toBeUndefined()
  });
})