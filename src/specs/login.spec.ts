import { LoginPage } from "../models/angular";

describe("Should open nx.bimeye.com", () => {

  const nxLoginPage = new LoginPage();

  beforeEach(async () => {
    await nxLoginPage.get();
  });

  it("should get welcome message", () => {

    // @ts-ignore
    expect(nxLoginPage.title.getText()).toBe("Welcome to BIMeye");
  });

});
