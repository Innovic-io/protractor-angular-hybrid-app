import { browser, By, element } from "protractor";

export class LoginPage {

  public title = element(By.xpath('//*[@id="NG2_UPGRADE_0_0"]/be-home/be-login/div/div/div[1]/div/small'));

  public async get() {

    await browser.waitForAngularEnabled(false);
    browser.get("/");
  }
}
