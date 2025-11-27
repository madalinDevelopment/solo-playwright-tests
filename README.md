# Soloist.ai Automation Framework

This project contains automated tests for [main.soloist.ai](https://main.soloist.ai) using Playwright and the Page Object Model (POM) design pattern.

## Prerequisites

- Node.js (v14 or higher)
- npm (Node Package Manager)

## Setup

1. **Clone the repository** (if applicable) or navigate to the project folder.

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Install Playwright browsers**:
   ```bash
   npx playwright install
   ```

## Running Tests

### Run all tests (Headless)
Executes tests in the background without opening a browser window.
```bash
npx playwright test
```

### Run tests in Headed mode
Opens the browser window to see the tests running.
```bash
npx playwright test --headed
```

### Run specific test file
```bash
npx playwright test tests/soloist.spec.js
```

### View Test Report
Generates and opens the HTML test report.
```bash
npx playwright show-report
```

## Project Structure

- **`pages/`**: Contains Page Object classes (e.g., `MainPage.js`) which encapsulate the page structure and interactions.
- **`tests/`**: Contains test specifications (e.g., `soloist.spec.js`) that use the Page Objects to run tests.
- **`playwright.config.js`**: Configuration file for Playwright (browsers, timeouts, reporting, etc.).
