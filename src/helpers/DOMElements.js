const costBill = document.querySelector('.card__input--number--js');
const nameBill = document.querySelector('.card__input--text--js');
const selectCurrency = document.querySelector('.card__select--js');
const percentageTip = document.querySelector('.card__percentage-tip--js');
const percentageTipRange = document.querySelector(
    '.card__percentage-range--js',
);
const percentageTipEnd = document.querySelector(
    '.card__percentage-tip-end--js',
);
const splitTip = document.querySelector('.card__split-tip--js');
const splitTipRange = document.querySelector('.card__split-range--js');
const splitTipEnd = document.querySelector('.card__split-tip-end--js');
const btnCalculate = document.querySelector('.btn--js');
const btnOpenApp = document.querySelector('.btn--open--js');
const btnCloseApp = document.querySelector('.btn--close--js');
const costBillText = document.querySelector('.card__item-bill--js');
const nameBillText = document.querySelector('.card__item-name-bill--js');
const percentTipText = document.querySelector('.card__item-percent-tip--js');
const totalTipText = document.querySelector('.card__item-total-tip--js');
const splitText = document.querySelector('.card__item-split--js');
const billByPersonText = document.querySelector('.card__item-bill-person--js');
const billTipText = document.querySelector('.card__item-bill-tip--js');
const totalBillCostText = document.querySelector('.card__item-bill-cost--js');
const calculator = document.querySelector('.calculator--js');
const card = document.querySelector('.card--js');
const cards = document.querySelectorAll('.card');
const cardItems = document.querySelectorAll('.card__item');
const cardItemsDark = document.querySelectorAll('.card__item-dark');
const cardHistory = document.querySelector('.card__history--js');
const currencyDollar = document.querySelector('.currency__dollar--js');
const currencyEuro = document.querySelector('.currency__euro--js');
const currencyPound = document.querySelector('.currency__pound--js');
const historyOfBillsColumn = document.querySelector(
    '.calculator .col--js:last-of-type',
);
const customCheckbox = document.querySelector('.col__input--js');
const modeIconSun = document.querySelector('.col__mode-icon-sun--js');
const modeIconMoon = document.querySelector('.col__mode-icon-moon--js');

const DOMElements = {
    costBill,
    nameBill,
    selectCurrency,
    percentageTip,
    percentageTipRange,
    percentageTipEnd,
    splitTip,
    splitTipEnd,
    btnCalculate,
    btnOpenApp,
    btnCloseApp,
    splitTipRange,
    costBillText,
    nameBillText,
    percentTipText,
    totalTipText,
    splitText,
    billByPersonText,
    billTipText,
    totalBillCostText,
    calculator,
    card,
    cardHistory,
    currencyDollar,
    currencyEuro,
    currencyPound,
    historyOfBillsColumn,
    customCheckbox,
    cards,
    cardItems,
    cardItemsDark,
    modeIconSun,
    modeIconMoon,
};

export default DOMElements;
