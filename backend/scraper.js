const puppeteer = require('puppeteer-extra');
const StealthPlugin = require('puppeteer-extra-plugin-stealth');
puppeteer.use(StealthPlugin());

app.get('/api/apartments', async (req, res) => {
  try {
    const browser = await puppeteer.launch({
      headless: true,  // Make sure it's headless
      args: [
        '--no-sandbox',
        '--disable-setuid-sandbox',
      ]
    });
    const page = await browser.newPage();
    await page.goto('https://www.apartments.com/blacksburg-va/?bb=i27qqyik8Hrl9toM', {
      waitUntil: 'networkidle2',  // Ensures page fully loads
    });

    // Wait for apartments list to load
    await page.waitForSelector('.placard');

    // Scrape the data
    const apartments = await page.evaluate(() => {
      let listings = [];
      document.querySelectorAll('.placard').forEach(placard => {
        const title = placard.querySelector('.property-title').innerText.trim();
        const location = placard.querySelector('.property-address').innerText.trim();
        const price = placard.querySelector('.property-pricing').innerText.trim();
        listings.push({ title, location, price });
      });
      return listings;
    });

    await browser.close();

    // Return the apartment data as JSON
    res.json(apartments);

  } catch (error) {
    console.error('Error scraping apartment data:', error);
    res.status(500).send('Error scraping apartment data');
  }
});
