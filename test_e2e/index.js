const puppeteer = require('puppeteer');


(async () => {
    const browser = await puppeteer.launch({headless:false,defaultViewport:{width:1366,height:768}});
    const page = await browser.newPage();
    await page.goto('http://localhost:3000');
    await page.waitForSelector('Input');
    const input_area = await page.$('#input')
    await page.waitFor(3000);
    await input_area.type("b");
    await page.waitFor(2000);
    await input_area.type("n");
    await page.waitFor(3000);
    await input_area.type("b");
    await page.waitFor(5000);
    await browser.close();
})();
