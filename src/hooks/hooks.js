//@ts-check
const { Before, After, AfterAll, BeforeAll, Status } = require('@cucumber/cucumber');
const { chromium } = require('playwright');

let browser;

BeforeAll(async function () {
    browser = await chromium.launch({ headless: false });
});

Before(async function () {
    this.context = await browser.newContext({
        baseURL: 'https://saucedemo.com'
    });
    this.page = await this.context.newPage();
});

After(async function ({ pickle, result }) {
    if (result?.status === Status.FAILED && this.page) {
        const img = await this.page.screenshot({
            path: `./reports/${pickle.name.replace(/\s+/g, '_')}.png`,
            type: 'png'
        });
        this.attach(img, 'image/png');
    }
    await this.page?.close();
    await this.context?.close();
});

AfterAll(async function () {
    await browser?.close();
});