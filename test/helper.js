require('dotenv').config();
const webdriver = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

function getDriver() {
  const capabilities = {
    browserName: "chrome",
    chromeOptions: {
      prefs: {
        'downloads': {
          'prompt_for_download': false
        }
      },
      args: [
        '--window-size=1920,1080',
        '--start-maximized',
        '-headless'
      ]
    }
  };

  return new webdriver.Builder()
  .forBrowser('chrome')
  .setChromeOptions(new chrome.Options().headless())
  .build();
}

module.exports = {
  getDriver
}
