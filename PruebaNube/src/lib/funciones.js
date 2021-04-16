let Page = require('./driver');

const fake = require('../utils/fakeData');
const fakeNameKeyword = fake.nameKeyword;

let searchInput, searchButton, resultStat;

Page.prototype.findInputAndButton = async function() {
    searchInput = await this.findByName("q");
    searchButton = await this.findByName("btnK");

    const result = await this.driver.wait(async function() {
        const searchInputEnableFlag = await searchInput.isEnabled();
        const searchButtonText = await searchButton.getAttribute('value');
        return {
            inputEnabled: searchInputEnableFlag,
            buttonText: searchButtonText
        }
    }, 5000);
    return result;
};


Page.prototype.submitKeywordAndGetResult = async function() {
    await this.findInputAndButton();
    await this.write(searchInput, fakeNameKeyword);
    await searchInput.sendKeys("\n");

    resultStat = await this.findById("result-stats");
    return await this.driver.wait(async function() {
        return await resultStat.getText();
    },5000);
};

module.exports = Page;
