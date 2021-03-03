const getFormatCost = priceValue => {
    return Number(Math.round(priceValue + 'e+2') + 'e-2');
};

export default getFormatCost;
