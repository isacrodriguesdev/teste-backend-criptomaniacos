import { HttpRequest } from "../../protocols/Http";
import { CreateWalletFactory } from "./CreateWalletFactory";

describe("Wallet", () => {
  it('should create a new wallet', async () => {

    const createWalletFactory = CreateWalletFactory();
  
    const httpRequest: HttpRequest = {
      body: {
        asset: "USD",
        balance: 298.21,
      },
      user: {
        id: 1
      }
    }
  
    const httpResponse = await createWalletFactory.execute(httpRequest);
  
    expect(httpResponse.status).toBe(200)
  
    expect(httpResponse.body).toEqual(
      expect.objectContaining({
        id: expect.any(Number),
        uuid: expect.any(String),
        userId: expect.any(Number),
        asset: expect.any(String),
        balance: expect.any(Number),
        createdAt: expect.any(Date)
      })
    )
  });
})