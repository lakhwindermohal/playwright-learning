# Playwright Automation Framework (TypeScript + POM + Faker + Reporting)

This is a fully functional Playwright test automation framework using:

- ✅ Playwright (TypeScript)
- ✅ Page Object Model (POM)
- ✅ Faker.js for dynamic data generation
- ✅ JSON test data files
- ✅ Screenshots, Videos, and Traces on failure
- ✅ Playwright built-in HTML reporting

---

## 📂 Project Structure

project-root/
│
├── tests/ # All test files
│ └── example.spec.ts
│
├── pages/ # Page Object Model classes
│ └── BasePage.ts
│ └── HomePage.ts
│ └── ElementsPage.ts
│ └── TextBoxPage.ts
│
├── utils/ # Utility classes
│ └── ScreenshotUtil.ts
│
├── test-data/ # Test data files
│ └── testData.json
│
├── playwright.config.ts # Playwright global configuration
├── tsconfig.json # TypeScript configuration
└── package.json # NPM dependencies and scripts

---

## 🚀 How to Setup

### 1️⃣ Install dependencies
```bash
npm install

2️⃣ Install Playwright Browsers
npx playwright install

🚀 Running Tests

Run full test suite:
npx playwright test

Run specific test file:
npx playwright test tests/example.spec.ts

Run tests in headed mode (to see browser):
npx playwright test --headed

🚀 Reporting
Show Playwright HTML Report:
npx playwright show-report

Includes:
Screenshots on failure
Videos on failure
Traces on failure

📸 Screenshots & Videos
Automatic screenshots and videos captured for failed tests.

See playwright.config.ts to customize.

📊 Test Data
Test data is maintained in JSON files under:
test-data/testData.json

Example:
{
  "baseURL": "https://demoqa.com/",
  "email": "automation@testing.com"
}

Faker.js is used for generating dynamic test data (names, cities, etc.)

🔧 Utilities
Screenshot Utility (utils/ScreenshotUtil.ts)
Take full page screenshots

Attach screenshots into reports

Capture element-specific screenshots

📦 Dependencies
Playwright

TypeScript

Faker.js (@faker-js/faker)

🔧 Custom Configuration
You can configure browser settings, test retries, reporter settings etc inside playwright.config.ts

🔥 Author
Built by Lakhwinder’s Custom Playwright Framework 😄

Happy Testing 🚀
