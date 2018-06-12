const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  //await page.goto('https://www.betfair.it/exchange/plus/tennis/market/1.144581742');
  //https://www.betfair.it/exchange/plus/inplay/all
  
  //await page.goto('https://www.betfair.it/');
  
  //await page.goto('https://www.betfair.it/exchange/plus/tennis/market/1.144581288');
  
  await page.goto('https://www.betfair.it/exchange/plus/tennis/market/1.144581742');
  await page.waitForSelector('.runner-name', { timeout: 30000 });
  
  const firstPar = await page.$eval('.runner-name', el => el.innerText);

  console.log("Team = ", firstPar);
  
  await page.screenshot({path: 'example_2.png'});

  await browser.close();
})();