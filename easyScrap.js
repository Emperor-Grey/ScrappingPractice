const puppeteer = require("puppeteer");
const cheerio = require("cheerio");

const AmazonScrap = async () => {
  const browser = await puppeteer.launch({ headless: "new" });
  const page = await browser.newPage();

  await page.goto("https://www.amazon.in/s?k=macbook", {
    waitUntil: "domcontentloaded",
  });

  const content = await page.content();
  const $ = cheerio.load(content);

  const titles = [];
  $(".s-title-instructions-style > h2 > a span").each((index, element) => {
    titles.push($(element).text().trim());
  });

  const prices = [];
  $("span .a-price-whole").each((index, element) => {
    prices.push($(element).text().trim());
  });

  const images = [];
  $(".s-image").each((i, e) => {
    images.push($(e).attr("srcset"));
  });

  console.log("Titles:", titles);
  console.log("Prices:", prices);
  console.log("Images:", images);

  console.log("Number of titles:", titles.length);
  console.log("Number of prices:", prices.length);
  console.log("Number of images:", images.length);

  await browser.close();
};

AmazonScrap();
