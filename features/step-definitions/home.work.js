const { Given, When, Then } = require('@wdio/cucumber-framework');
const homeWork = require('../pageobjects/home.work');

const HomeWork = require ('../pageobjects/home.work')

Given("I opened the data tables page", async () => {
    await homeWork.open();
});

When("I click on element DUE", async () => {
    await homeWork.clickElementDue();
});

Then("I should see text check", async () => {
    await homeWork.checkElementAppeared();
});