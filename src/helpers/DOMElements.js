// const totalTip = document.querySelector('.card__total-tip--js');
// const totalCost = document.querySelector('.card__total-cost--js');
// const percentageTip = document.querySelector('.card__percentage-tip--js');
// const percentageRange = document.querySelector('.card__percentage-range--js');
// const splitTip = document.querySelector('.card__split-tip--js');
// const splitRange = document.querySelector('.card__split-range--js');
// const totalSplitCost = document.querySelector('.card__total-split-cost--js');
// const billInput = document.querySelector('.add-bill__input--js');
// const btnAddBill = document.querySelector('.add-bill__btn--js');
// const cardLabels = document.querySelector('.card__labels--js');
//
// const DOMElements = {
// totalTip,
// totalCost,
// percentageTip,
// percentageRange,
// splitTip,
// splitRange,
// totalSplitCost,
// billInput,
// btnAddBill,
// cardLabels,
// };

const inputNumber = document.querySelector('.card__input--number--js');
const inputText = document.querySelector('.card__input--text--js');
const selectCurrency = document.querySelector('.card__select--js');
const percentageTip = document.querySelector('.card__percentage-tip--js');
const percentageRange = document.querySelector('.card__percentage-range--js');
const percentageTipEnd = document.querySelector(
    '.card__percentage-tip-end--js',
);
const splitTip = document.querySelector('.card__split-tip--js');
const splitRange = document.querySelector('.card__split-range--js');
const splitTipEnd = document.querySelector('.card__split-tip-end--js');
const btnCalculate = document.querySelector('.btn--js');
const btnOpenApp = document.querySelector('.btn--open--js');
const itemBill = document.querySelector('.card__item-bill--js');
const itemNameBill = document.querySelector('.card__item-name-bill--js');
const itemPercentTip = document.querySelector('.card__item-percent-tip--js');
const itemTotalTip = document.querySelector('.card__item-total-tip--js');
const itemSplit = document.querySelector('.card__item-split--js');
const itemBillPerson = document.querySelector('.card__item-bill-person--js');
const itemBillTip = document.querySelector('.card__item-bill-tip--js');
const itemBillCost = document.querySelector('.card__item-bill-cost--js');
const calculator = document.querySelector('.calculator--js');

const DOMElements = {
    inputNumber,
    inputText,
    selectCurrency,
    percentageTip,
    percentageRange,
    percentageTipEnd,
    splitTip,
    splitTipEnd,
    btnCalculate,
    btnOpenApp,
    splitRange,
    itemBill,
    itemNameBill,
    itemPercentTip,
    itemTotalTip,
    itemSplit,
    itemBillPerson,
    itemBillTip,
    itemBillCost,
    calculator,
};

export default DOMElements;
