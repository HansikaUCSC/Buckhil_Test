# Buckhill Test Automation Project
## Overview

This project contains automated tests for the Buckhill web application using Playwright. The tests cover various functionalities, including user registration, creating orders, and retrieving customer information.

## Project Structure

Buckhill_Test/
├── node_modules/             # Dependencies
├── Pages/                    # Page Object Models
│   ├── cart.ts
│   ├── checkout.ts
│   ├── customers.ts
│   ├── home.ts
│   ├── login.ts
│   ├── logout.ts
│   ├── productDetails.ts
├── playwright-report/        # Playwright test report
│   └── index.html
├── test-results/             # Test results
│   └── .last-run.json
├── tests/                    # Test scripts
│   ├── createOrder.spec.ts
│   ├── getCustomer.spec.ts
│   ├── userRegistration.spec.ts
├── Utils/                    # Utility functions
│   └── dataUtils.ts
├── package.json              # Project dependencies and scripts
├── playwright.config.ts      # Playwright configuration
└── README.md                 # Project documentation

## Getting Started
### Prerequisites
- Node.js (v14.x or higher)
- npm (v6.x or higher)
- playwright 1.45v

### Installation
1. Clone the repository:
```bash
git clone https://github.com/your-repo/buckhill_test.git
cd buckhill_test
```

2. Install the dependencies:
```bash
npm install
npm install dotenv
```

### Running Tests
To run the tests, use the following command:
```bash
npx playwright test
```

### Generating Reports

After running the tests, you can view the Playwright report by opening the playwright-report/index.html file in your browser.

### Directory Details

- Pages: Contains the Page Object Models (POMs) representing different pages of the application.

    - cart.ts: Handles interactions with the cart page.
    - checkout.ts: Handles interactions with the checkout page.
    - customers.ts: Handles interactions with the customers page.
    - home.ts: Handles interactions with the home page.
    - login.ts: Handles interactions with the login page.
    - logout.ts: Handles interactions with the logout functionality.
    - productDetails.ts: Handles interactions with the product details page.

- tests: Contains the test scripts.

    - createOrder.spec.ts: Tests for creating orders.
    - getCustomer.spec.ts: Tests for retrieving customer information.
    - userRegistration.spec.ts: Tests for user registration.

- Utils: Contains utility functions.

    - dataUtils.ts: Utility functions for data handling.
