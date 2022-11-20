import { HttpRequest } from "../../protocols/Http";
import { GetWalletFactory } from "./GetWalletFactory";

describe("Wallet", () => {
  it('should get user wallets', async () => {

    const getWalletFactory = GetWalletFactory();

    const httpRequest: HttpRequest = {
      body: {},
      user: {
        id: 1
      }
    }

    const httpResponse = await getWalletFactory.execute(httpRequest);

    expect(httpResponse.status).toBe(200)
    expect(httpResponse.body.balance).not.toBeUndefined()
    expect(!isNaN(httpResponse.body.balance)).toBe(true)

    expect(httpResponse.body.wallets).toEqual(
      expect.arrayContaining(
        [
          expect.objectContaining({
            id: expect.any(Number),
            uuid: expect.any(String),
            userId: expect.any(Number),
            asset: expect.any(String),
            balance: expect.any(Number),
            createdAt: expect.any(Date)
          })
        ]
      )
    )
  });
})