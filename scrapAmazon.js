const puppeteer = require("puppeteer");

const AmazonScrap = async () => {
  const browser = await puppeteer.launch({
    headless: "new",
    defaultViewport: null,
  });

  const page = await browser.newPage();
  try {
    await page.goto("https://www.amazon.in/s?k=iphone", {
      waitUntil: "domcontentloaded",
    });

    const titles = await page.evaluate(() => {
      const titleNodes = document.querySelectorAll(
        ".s-title-instructions-style > h2 > a span"
      );
      return Array.from(titleNodes)
        .filter((title) => title.textContent.trim() !== "") // Filter out empty titles
        .map((title) => title.textContent);
    });

    const prices = await page.evaluate(() => {
      const priceNodes = document.querySelectorAll("span .a-price-whole");
      return Array.from(priceNodes)
        .filter((price) => price.textContent.trim() !== "") // Filter out empty prices
        .map((item) => item.textContent);
    });

    // Printing the gotten shit
    console.log("Titles:", titles);
    console.log("Prices:", prices);

    console.log("Number of titles:", titles.length);
    console.log("Number of prices:", prices.length);
  } catch (e) {
    console.log(e);
  } finally {
    await browser.close();
  }
};

AmazonScrap();
