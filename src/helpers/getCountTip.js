const getCountTip = (priceValue, percentTipValue, splitTipValue) => {
    return (priceValue * percentTipValue * 0.01) / splitTipValue;
};

export default getCountTip;
