import { Locator, Page } from "@playwright/test";

export class ElementsPage {
    readonly page: Page;
    readonly textBoxCard: Locator;
    readonly checkBoxCard: Locator;
    readonly radioButtonCard: Locator;

    constructor(page: Page) {
        this.page = page;
        this.textBoxCard = page.getByText('Text Box');
        this.checkBoxCard = page.getByText('Check Box');
        this.radioButtonCard = page.getByText('Radio Button');
    }

    async clickTextBox() {
        this.textBoxCard.click();
    }

    async clickCheckBox() {
        this.checkBoxCard.click();
    }
    
}