document.getElementById('cryptoForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get input values
    const totalSupply = parseFloat(document.getElementById('totalSupply').value);
    const marketCap = parseFloat(document.getElementById('marketCap').value);

    // Calculate price per coin
    let pricePerCoin;
    if (totalSupply && marketCap && totalSupply !== 0) {
        pricePerCoin = marketCap / totalSupply;
        document.getElementById('pricePerCoin').textContent = pricePerCoin.toFixed(6); // Display result
    } else {
        document.getElementById('pricePerCoin').textContent = "Invalid Input"; // Handle error
    }
});
