const fs = require('fs');
const webdriver = require('selenium-webdriver');
// const chromedriver = require('chromedriver');

// const chromeCapabilities = webdriver.Capabilities.chrome();
// chromeCapabilities.set('chromeOptions', {args: ['--headless']});

// const driver = new webdriver.Builder()
//   .forBrowser('chrome')
//   .withCapabilities(chromeCapabilities)
//   .build();
const screen = {
    width: 1920,
    height: 1080
  };

  const driver =  new webdriver.Builder()
  .forBrowser('chrome')
  .setChromeOptions(new chrome.Options().headless().windowSize(screen))
  .build();

// Navigate to google.com, enter a search.
driver.get('https://www.google.com/');
driver.findElement({name: 'q'}).sendKeys('webdriver');
driver.findElement({name: 'btnG'}).click();
driver.wait(webdriver.until.titleIs('webdriver - Google Search'), 1000);

// Take screenshot of results page. Save to disk.
driver.takeScreenshot().then(base64png => {
  fs.writeFileSync('screenshot.png', new Buffer(base64png, 'base64'));
});

driver.quit();