import { Given, When, Then } from '@cucumber/cucumber';
import { chromium, Page, Browser, BrowserContext } from 'playwright';
import { BasePage } from '../../pages/BasePage';
import { HomePage } from '../../pages/HomePage';
import { ElementsPage } from '../../pages/ElementsPage';
import { TextBoxPage } from '../../pages/TextBoxPage';
import userData from '../../test-data/userData.json';
import { faker } from '@faker-js/faker';

let browser: Browser;
let context: BrowserContext;
let page: Page;
let basePage: BasePage;
let homePage: HomePage;
let elementsPage: ElementsPage;
let textBoxPage: TextBoxPage;

let name: string;
let email: string;
let city: string;
let country: string;

Given('I navigate to demoqa homepage', async () => {
  browser = await chromium.launch({ headless: false });
  context = await browser.newContext();
  page = await context.newPage();

  basePage = new BasePage(page);
  homePage = new HomePage(page);
  elementsPage = new ElementsPage(page);
  textBoxPage = new TextBoxPage(page);

  name = faker.person.fullName();
  email = userData.email;
  city = faker.location.city();
  country = faker.location.country();

  await basePage.navigate(userData.baseURL);
});

When('I click Elements', async () => {
  await homePage.clickElements();
});

When('I click Text Box', async () => {
  await elementsPage.clickTextBox();
});

When('I fill TextBox form', async () => {
  await textBoxPage.fillForm(name, email, city, country);
  await textBoxPage.submitForm();
});

Then('I should see submitted output', async () => {
  await textBoxPage.verifyOutput(name, email, city, country);
  await browser.close();
});
