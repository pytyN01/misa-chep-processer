const puppeteer = require("puppeteer");

const chep = (req, res) => {
  (async () => {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto("https://my.chep.com/login");

    await page.waitForSelector("#idp-discovery-username", { timeout: 10000 });
    await page.type("#idp-discovery-username", process.env.CHEP_USER);
    await page.click("#idp-discovery-submit");

    await page.waitForSelector("#okta-signin-password", { timeout: 10000 });
    await page.type("#okta-signin-password", process.env.CHEP_PASS);
    // await page.click("#okta-signin-submit");

    await page.waitForNavigation();

    const title = await page.evaluate(() => {
      return document.title;
    });

    res.status(200).json({ title });

    await browser.close();
  })();
};

export default chep;
