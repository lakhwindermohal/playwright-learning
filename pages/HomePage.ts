import { Locator, Page } from "@playwright/test";

export class HomePage {
    readonly page: Page;
    readonly elementsCard: Locator;

    constructor(page: Page) {
        this.page = page;
        this.elementsCard = page.getByText('Elements');
    }

    async clickElements() {
        await this.elementsCard.click();
    }
    
}