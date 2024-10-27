console.log("btcPrice.js loaded");

async function fetchBTCPrice() {
  try {
    console.log("Starting fetch for BTC price...");

    // Fetch the BTC price from the API
    const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=clp');
    
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    
    console.log("Response received from API.");

    // Parse the JSON data
    const data = await response.json();
    console.log("Data parsed from API response:", data);

    // Extract and format BTC price
    const btcPrice = data.bitcoin.clp;
    const priceElement = document.getElementById('btc-price-value');

    if (priceElement) {
      priceElement.textContent = new Intl.NumberFormat('es-CL', {
        style: 'currency',
        currency: 'CLP'
      }).format(btcPrice);
      
      console.log("BTC price updated:", btcPrice);
      priceElement.classList.add('fade-in');

      // Remove fade-in effect after 500ms
      setTimeout(() => priceElement.classList.remove('fade-in'), 500);
    } else {
      console.error("BTC price element not found in the DOM.");
    }
  } catch (error) {
    console.error("Error fetching BTC price:", error);

    // Optional: Display fallback message in case of error
    const priceElement = document.getElementById('btc-price-value');
    if (priceElement) {
      priceElement.textContent = "CLP / BTC ";
    }
  }
}

// Initialize and fetch every 15 seconds
fetchBTCPrice();
setInterval(fetchBTCPrice, 15000);