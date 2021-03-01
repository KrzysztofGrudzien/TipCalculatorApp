import './sass/build.scss';
import DOMElements from './helpers/DOMElements';
import IDGenerator from './helpers/IDGenerator';
import FormatCost from './helpers/FormatCost';
import moment from 'moment';

const history = [];
let date = moment().format('llll');

const calculateBill = () => {
    let id = IDGenerator();
    let billPriceValue = FormatCost(DOMElements.inputNumber.value);
    let billCurrencyValue = DOMElements.selectCurrency.value;
    let billNameValue = DOMElements.inputText.value;
    let billPercentTipValue = +DOMElements.percentageRange.value;
    let billSplitTipValue = +DOMElements.splitRange.value;
    let currency = `${
        billCurrencyValue === 'dollar'
            ? '$'
            : billCurrencyValue === 'euro'
            ? '€'
            : billCurrencyValue === 'pound'
            ? '£'
            : 'zł'
    } `;

    history.push({
        id,
        billPriceValue,
        billCurrencyValue,
        billNameValue,
        billPercentTipValue,
        billSplitTipValue,
        date,
    });

    DOMElements.itemBill.textContent = `${billPriceValue}${currency}`;
    DOMElements.itemNameBill.textContent = billNameValue;
    DOMElements.itemPercentTip.textContent = `${billPercentTipValue}%`;
    DOMElements.itemSplit.textContent = billSplitTipValue;
    DOMElements.itemTotalTip.textContent = `${FormatCost(
        billPriceValue * billPercentTipValue * 0.01,
    )}${currency}`;
    DOMElements.itemBillPerson.textContent = `${FormatCost(
        billPriceValue / billSplitTipValue,
    )}${currency}`;
    DOMElements.itemBillTip.textContent = `${FormatCost(
        (billPriceValue * billPercentTipValue * 0.01) / billSplitTipValue,
    )}${currency}`;
    DOMElements.itemBillCost.textContent = `${FormatCost(
        (billPriceValue * billPercentTipValue * 0.01) / billSplitTipValue +
            billPriceValue / billSplitTipValue,
    )}${currency}`;

    DOMElements.inputNumber.value = '';
    DOMElements.inputText.value = '';

    console.log(history);
};

DOMElements.btnCalculate.addEventListener('click', calculateBill);

const showApp = () => {
    DOMElements.calculator.style.display = 'flex';
};

DOMElements.btnOpenApp.addEventListener('click', showApp);

const closeApp = () => {
    DOMElements.calculator.style.display = 'none';
};

DOMElements.btnCloseApp.addEventListener('click', closeApp);

const calculatePercentTip = e => {
    DOMElements.percentageTipEnd.textContent = `${e.target.value}%`;
};

DOMElements.percentageRange.addEventListener('input', calculatePercentTip);

const calculateSplitTip = e => {
    DOMElements.splitTipEnd.textContent = e.target.value;
};

DOMElements.splitRange.addEventListener('input', calculateSplitTip);

// const allBills = [];
//
// const calculateBill = () => {
// let id = IDGenerator();
// let billValue = FormatCost(DOMElements.billInput.value);
//
// if (billValue > 0) {
// allBills.push({
// billValue,
// id,
// });
//
// DOMElements.billInput.value = '';
//
// const labelContainer = document.createElement('div');
// labelContainer.classList = 'label';
// const labelContent = `
// <span class="label__price">$${billValue}</span>
// <img
// src="./src/assets/icons/clear.svg"
// class="label__delete"
// />
// `;
// labelContainer.setAttribute('data-id', `${id}`);
// labelContainer.innerHTML = labelContent;
// DOMElements.cardLabels.appendChild(labelContainer);
//
// walletSpending += billValue;
// walletAmount -= billValue;
//
// DOMElements.walletSpending.textContent = `$${FormatCost(
// walletSpending,
// )}`;
// DOMElements.totalCost.textContent = `$${FormatCost(walletSpending)}`;
// DOMElements.walletAmount.textContent = `$${FormatCost(walletAmount)}`;
// } else {
// return;
// }
//
// DOMElements.totalSplitCost.textContent = `$${FormatCost(walletSpending)}`;
// DOMElements.totalTip.textContent = `$${FormatCost(
// (walletSpending / 100) * 2,
// )}`;
// };
//
// DOMElements.btnAddBill.addEventListener('click', calculateBill);
//
// const percentTip = e => {
// DOMElements.percentageTip.textContent = `${e.target.value}%`;
// DOMElements.totalTip.textContent = `$${FormatCost(
// (e.target.value * walletSpending) / 100,
// )}`;
// };
//
// DOMElements.percentageRange.addEventListener('input', percentTip);
//
// const splitTip = e => {
// DOMElements.splitTip.textContent = e.target.value;
// DOMElements.totalSplitCost.textContent = `$${FormatCost(
// walletSpending / e.target.value,
// )}`;
// };
//
// DOMElements.splitRange.addEventListener('input', splitTip)
