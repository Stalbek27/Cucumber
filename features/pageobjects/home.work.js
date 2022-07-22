class HomeWork {
    async open () {
        await browser.url('/tables#delete')
    }

    async clickElementDue() {
        await browser.$('#table1 > thead > tr > th:nth-child(4) > span').click();
    }

    async checkElementAppeared() {
        const checkElement = await browser.$('#table1 > tbody > tr:nth-child(1) > td:nth-child(4)');
        expect (checkElement).toBeDisplayed();
    }
}

module.exports = new HomeWork();