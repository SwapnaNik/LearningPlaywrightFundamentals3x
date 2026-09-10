# Learning Playwright Fundamentals

A basic Playwright test project using TypeScript and `@playwright/test`.

## Prerequisites

- Node.js 18 or newer
- npm

## Install and setup

Clone the repository, open the project directory, and install the dependencies:

```bash
git clone https://github.com/SwapnaNik/LearningPlaywrightFundamentals3x.git
cd LearningPlaywrightFundamentals3x
npm install
npx playwright install
```

`npx playwright install` downloads the browser binaries required by Playwright. The project is configured to run Chromium in headed mode.

## Run tests

```bash
# Run all tests
npm test

# Run tests with the browser visible
npm run test:headed

# Run one test file
npx playwright test tests/tta-check.spec.ts

# Open the latest HTML report
npm run report
```

## Record tests with codegen

Use Playwright codegen to open a browser and record actions as test code:

```bash
npm run codegen
```

The configured command opens:

```text
https://app.thetestingacademy.com/playwright/multiple_element_filter
```

For another page, run:

```bash
npx playwright codegen https://example.com
```

Copy the generated actions into a test file in `tests/`, then run the test with `npx playwright test`.

## Project structure

```text
playwright.config.ts  Playwright configuration
tests/                Test files
playwright-report/    Generated HTML report, ignored by Git
test-results/         Generated test artifacts, ignored by Git
```
