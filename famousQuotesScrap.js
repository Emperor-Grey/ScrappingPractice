const puppeteer = require("puppeteer");

const getQuotes = async () => {
  const browser = await puppeteer.launch({
    headless: "new",
    defaultViewport: null,
  });

  const page = await browser.newPage();

  await page.goto("http://quotes.toscrape.com/", {
    waitUntil: "domcontentloaded",
  });

  // Define a function to extract quotes from the page
  const extractQuotes = () => {
    const quotes = [];
    const quoteElements = document.querySelectorAll(".quote");

    quoteElements.forEach((quoteElement) => {
      const text = quoteElement.querySelector(".text").textContent;
      const author = quoteElement.querySelector(".author").textContent;
      quotes.push({ text, author });
    });

    return quotes;
  };

  // Execute the extractQuotes function in the context of the page
  const scrapedQuotes = await page.evaluate(extractQuotes);

  // Print the scraped quotes
  scrapedQuotes.forEach((quote, index) => {
    console.log(`Quote ${index + 1}:`);
    console.log(`Text: ${quote.text}`);
    console.log(`Author: ${quote.author}`);
    console.log("------------");
  });

  await browser.close();
};

getQuotes();
