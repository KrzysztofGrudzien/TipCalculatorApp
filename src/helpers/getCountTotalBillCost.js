const getCountTotalBillCost = (priceValue, percentTipValue, splitTipValue) => {
    return (
        (priceValue * percentTipValue * 0.01) / splitTipValue +
        priceValue / splitTipValue
    );
};

export default getCountTotalBillCost;
