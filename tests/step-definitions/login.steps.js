const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const { LoginPage } = require('../../src/pages/LoginPage');

Given('I am on the SauceDemo login page', async function () {
  this.loginPage = new LoginPage(this.page);
  await this.loginPage.navigate('/');
});

When('I login with username {string} and password {string}', async function (username, password) {
  await this.loginPage.login(username, password);
});

Then('I should be redirected to the inventory dashboard', async function () {
  await expect(this.page).toHaveURL(/inventory\.html/);
});

Then('I should see an error message containing {string}', async function (expectedText) {
  await expect(this.loginPage.errorMessage).toBeVisible();
  await expect(this.loginPage.errorMessage).toContainText(expectedText);
});
