import { Page, test } from '@playwright/test';
import * as path from 'path';

export class ScreenshotUtil {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // Basic full-page screenshot
  async takeScreenshot(fileName: string, fullPage: boolean = true): Promise<void> {
    const filePath = path.join('screenshots', `${fileName}.png`);
    await this.page.screenshot({ path: filePath, fullPage });
  }

  // Screenshot + attach to report automatically
  async takeAndAttachScreenshot(fileName: string, fullPage: boolean = true): Promise<void> {
    const filePath = path.join('screenshots', `${fileName}.png`);
    await this.page.screenshot({ path: filePath, fullPage });
    await test.info().attach(fileName, {
      path: filePath,
      contentType: 'image/png',
    });
  }

  // Capture specific element screenshot
  async captureElementScreenshot(locator: string, fileName: string): Promise<void> {
    const element = this.page.locator(locator);
    const filePath = path.join('screenshots', `${fileName}.png`);
    await element.screenshot({ path: filePath });
    await test.info().attach(fileName, {
      path: filePath,
      contentType: 'image/png',
    });
  }
}
