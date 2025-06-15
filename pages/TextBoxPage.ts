import { Locator, Page, expect } from "@playwright/test";

export class TextBoxPage {
    readonly page: Page;
    readonly pageHeading: Locator;
    readonly userNameInput: Locator;
    readonly userEmailInput: Locator;
    readonly currentAddressInput: Locator;
    readonly permanentAddressInput: Locator;
    readonly submitButton: Locator;
    readonly outputDiv: Locator;

    constructor(page: Page) {
        this.page = page;
        this.pageHeading = page.getByRole('heading', {name: 'Text Box'});
        this.userNameInput = page.locator('#userName');
        this.userEmailInput = page.locator('#userEmail');
        this.currentAddressInput = page.locator('#currentAddress');
        this.permanentAddressInput = page.locator('#permanentAddress');
        this.submitButton = page.locator('#submit');
        this.outputDiv = page.locator('#output');
    }

    async verifyPageHeading() {
        await expect(this.pageHeading).toBeVisible();
    }

    async fillForm(name: string, email: string, current: string, permanent: string) {
    await this.userNameInput.fill(name);
    await this.userEmailInput.fill(email);
    await this.currentAddressInput.fill(current);
    await this.permanentAddressInput.fill(permanent);
  }

  async submitForm() {
    await this.submitButton.click();
  }

  async verifyOutput(name: string, email: string, current: string, permanent: string) {
    await expect(this.outputDiv).toContainText(name);
    await expect(this.outputDiv).toContainText(email);
    await expect(this.outputDiv).toContainText(current);
    await expect(this.outputDiv).toContainText(permanent);
  }
  
}