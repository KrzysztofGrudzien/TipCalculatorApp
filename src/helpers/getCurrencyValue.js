const getCurrencyValue = apiUrl =>
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => data.rates.PLN);

export default getCurrencyValue;
