const { Builder, By, until, Key } = require('selenium-webdriver');

SeleniumServer = require('selenium-webdriver/remote').SeleniumServer;
//var cbtHub = `http://${process.env.HUB_HOST}:4444/wd/hub`

var cbtHub = `http://selenium-hub:4444/wd/hub`

var caps = {
    name: 'Chrome Test',
    setPageLoadStrategy: 'eager',
    browserName: 'chrome',
    browserVersion: '89.0.4389.82'
};



var Page = function() {

    this.driver = new Builder()
    //.setChromeOptions(options)
    .withCapabilities(caps)
    .usingServer(cbtHub)
    //.forBrowser('chrome')
    .build();


    // visit a webpage
    this.visit = async function(theUrl) {
        return await this.driver.get(theUrl);
    };


    // quit current session
    this.quit = async function() {
        return await this.driver.quit();
    };


 // wait and find a specific element with it's id
 this.findById = async function(id) {
    await this.driver.wait(until.elementLocated(By.id(id)), 15000, 'Looking for element');
    return await this.driver.findElement(By.id(id));
};

 // wait and find a specific element with it's name
 this.findByName = async function(name) {
    await this.driver.wait(until.elementLocated(By.name(name)), 15000, 'Looking for element');
    return await this.driver.findElement(By.name(name));
};


 // fill input web elements
this.write = async function(el, txt) {
    return await el.sendKeys(txt);
};




};

module.exports = Page;

