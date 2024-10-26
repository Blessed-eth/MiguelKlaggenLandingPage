function initBTCPrice() {
  const fallbackPrice = 25000000; // Set a default/fallback BTC price in CLP

  async function fetchBTCPrice() {
    const priceElement = document.getElementById('btc-price-value');

    try {
      const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=clp');
      if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

      const data = await response.json();
      const btcPrice = data.bitcoin.clp;

      displayPrice(btcPrice);
    } catch (error) {
      console.error('Error fetching BTC price, using fallback:', error);
      displayPrice(fallbackPrice); // Use the fallback price if the API request fails
    }
  }

  function displayPrice(price) {
    const priceElement = document.getElementById('btc-price-value');
    priceElement.textContent = new Intl.NumberFormat('es-CL', {
      style: 'currency',
      currency: 'CLP'
    }).format(price);

    priceElement.classList.add('fade-in');
    setTimeout(() => priceElement.classList.remove('fade-in'), 500);
  }

  fetchBTCPrice();
  setInterval(fetchBTCPrice, 60000); // Fetch every 60 seconds
}