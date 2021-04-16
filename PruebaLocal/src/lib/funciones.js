let Page = require('./driver');

const fake = require('../utils/fakeData');
const fakeUserNameKeyword = fake.usernameKeyword;
const fakePasswordKeyword = fake.passwordKeyWord;

let searchInputUsuario,searchInputContra, searchButton, resultStat;

Page.prototype.findInputAndButton = async function() {
    searchInputUsuario = await this.findByName("correo");
    searchInputContra = await this.findByName("contra");
    searchButton = await this.findByName("logueo");

    const result = await this.driver.wait(async function() {
        const searchInputEnableU = await searchInputUsuario.isEnabled();
        const searchInputEnableC = await searchInputContra.isEnabled();
        const searchButtonText = await searchButton.getAttribute('value');
        return {
            inputEnabledU: searchInputEnableU,
            inputEnabledC: searchInputEnableC,
            buttonText: searchButtonText
        }
    }, 5000);
    return result;
};


Page.prototype.submitKeywordAndGetResult = async function() {
    await this.findInputAndButton();
    await this.write(searchInputUsuario, fakeUserNameKeyword);
    await this.write(searchInputContra, fakePasswordKeyword);
    await this.SendClick("logueo");
    //await this.searchButton.click();

    page = new Page();
    driver1 = page.driver;
            
    resultStat = await this.findById("result-stats");
    return await this.driver.wait(async function() {
       return await page.visit('http://localhost:4200/login');
    },5000);
};


Page.prototype.submitKeywordAndGetResultError = async function() {
    await this.findInputAndButton();
    await this.write(searchInputUsuario, fakeUserNameKeyword);
    await this.write(searchInputContra, fakePasswordKeyword);
    await this.SendClick("logueo");
    //await this.searchButton.click();

    page = new Page();
    driver1 = page.driver;
            
    resultado = await this.findById("resultado");
    return await this.driver.wait(async function() {
        return await resultado.getText();
    },5000);
};

module.exports = Page;