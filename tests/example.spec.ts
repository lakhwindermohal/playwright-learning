import { test } from '@playwright/test';
import { BasePage } from '../pages/BasePage';
import { HomePage } from '../pages/HomePage';
import { TextBoxPage } from '../pages/TextBoxPage';
import { ElementsPage } from '../pages/ElementsPage';
import userData from '../test-data/userData.json';
import { faker } from '@faker-js/faker';
import { ScreenshotUtil } from '../utils/ScreenshotUtil';

test('DemoQA - Text Box Form Submission', async ({ page }) => {

  const basePage = new BasePage(page);
  const homePage = new HomePage(page);
  const textBoxPage = new TextBoxPage(page);
  const elementsPage = new ElementsPage(page);
  const screenshotUtil = new ScreenshotUtil(page);
  
  const baseURL = userData.baseURL;
  const name = faker.person.fullName();
  const email = userData.email;
  const city = faker.location.city();
  const country = faker.location.country();

  await basePage.navigate(baseURL);
  await screenshotUtil.takeAndAttachScreenshot('base-page');
  await homePage.clickElements();
  await elementsPage.clickTextBox();
  await textBoxPage.verifyPageHeading();
  await screenshotUtil.takeAndAttachScreenshot('textbox-page');
  await textBoxPage.fillForm(name, email, city, country);
  await textBoxPage.submitForm();
  await textBoxPage.verifyOutput(name, email, city, country);
  await screenshotUtil.takeAndAttachScreenshot('last-page');

});
