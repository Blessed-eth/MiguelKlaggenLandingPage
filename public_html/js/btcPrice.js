function initBTCPrice() {
    async function fetchBTCPrice() {
      try {
        const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=clp');
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
  
        const data = await response.json();
        const btcPrice = data.bitcoin.clp;
  
        const priceElement = document.getElementById('btc-price-value');
        priceElement.textContent = new Intl.NumberFormat('es-CL', {
          style: 'currency',
          currency: 'CLP'
        }).format(btcPrice);
  
        priceElement.classList.add('fade-in');
        setTimeout(() => priceElement.classList.remove('fade-in'), 500);
      } catch (error) {
        console.error('Error fetching BTC price:', error);
      }
    }
  
    fetchBTCPrice();
    setInterval(fetchBTCPrice, 15000); // Fetch every 15 seconds
  }