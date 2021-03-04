import './sass/build.scss';
import DOMElements from './helpers/DOMElements';
import constant from './helpers/constants';
import moment from 'moment';
import getFormatCost from './helpers/getFormatCost';
import getCountTotalTip from './helpers/getCountTotalTip';
import getCountBillByPerson from './helpers/getCountBillByPerson';
import getCountTip from './helpers/getCountTip';
import getCountTotalBillCost from './helpers/getCountTotalBillCost';
import getCurrencyValue from './helpers/getCurrencyValue';

const history = [];
let date = moment().format('llll');

const currencyDollar = document.querySelector('.currency__dollar');
const currencyEuro = document.querySelector('.currency__euro');
const currencyPound = document.querySelector('.currency__pound');

getCurrencyValue(constant.apiUrl.USD).then(
    currencyInfo => (currencyDollar.textContent = getFormatCost(currencyInfo)),
);

getCurrencyValue(constant.apiUrl.EURO).then(
    currencyInfo => (currencyEuro.textContent = getFormatCost(currencyInfo)),
);

getCurrencyValue(constant.apiUrl.GBP).then(
    currencyInfo => (currencyPound.textContent = getFormatCost(currencyInfo)),
);

const updateCalculation = () => {
    const billPriceValue = getFormatCost(
        DOMElements.costBill.value * currencyEuro.textContent,
    );
    const billCurrencyValue = DOMElements.selectCurrency.value;
    const billNameValue = DOMElements.nameBill.value;
    const billPercentTipValue = +DOMElements.percentageTipRange.value;
    const billSplitTipValue = +DOMElements.splitTipRange.value;
    const currency = `${
        billCurrencyValue === `${constant.dollar}`
            ? '$'
            : billCurrencyValue === `${constant.euro}`
            ? '€'
            : billCurrencyValue === `${constant.pound}`
            ? '£'
            : 'zł'
    } `;

    if (isNaN(billPriceValue) || billPriceValue <= 0) return;

    DOMElements.costBillText.textContent = `${billPriceValue}${currency}`;
    DOMElements.nameBillText.textContent = billNameValue;
    DOMElements.percentTipText.textContent = `${billPercentTipValue}%`;
    DOMElements.splitText.textContent = billSplitTipValue;
    DOMElements.totalTipText.textContent = `${getFormatCost(
        getCountTotalTip(billPriceValue, billPercentTipValue),
    )}${currency}`;
    DOMElements.billByPersonText.textContent = `${getFormatCost(
        getCountBillByPerson(billPriceValue, billSplitTipValue),
    )}${currency}`;
    DOMElements.billTipText.textContent = `${getFormatCost(
        getCountTip(billPriceValue, billPercentTipValue, billSplitTipValue),
    )}${currency}`;
    DOMElements.totalBillCostText.textContent = `${getFormatCost(
        getCountTotalBillCost(
            billPriceValue,
            billPercentTipValue,
            billSplitTipValue,
        ),
    )}${currency}`;

    DOMElements.costBill.value = '';
    DOMElements.nameBill.value = '';

    const cardHistory = document.createElement('div');
    cardHistory.setAttribute('class', 'card__history');
    cardHistory.innerHTML = `<h3 class="card__title">
            ${date}
            >
        </h3>
        <ul class="card__list card__list--history">
            <li class="card__item card__item--history">
                Your bill:
                <span
                    class="card__item-dark card__item-dark--history"
                    >${DOMElements.costBillText.textContent}</span
                >
            </li>
            <li class="card__item card__item--history">
                Name of bill:<span
                    class="card__item-dark card__item-dark--history"
                    >${DOMElements.nameBillText.textContent}</span
                >
            </li>
            <li class="card__item card__item--history">
                Percent Tip:<span
                    class="card__item-dark card__item-dark--history"
                    >${DOMElements.percentTipText.textContent}</span
                >
            </li>
            <li class="card__item card__item--history">
                Total Tip:<span
                    class="card__item-dark card__item-dark--history"
                    >${DOMElements.totalTipText.textContent}</span
                >
            </li>
            <li class="card__item card__item--history">
                Split:<span
                    class="card__item-dark card__item-dark--history"
                    >${DOMElements.splitText.textContent}</span
                >
            </li>
            <li class="card__item card__item--history">
                Bill by person:<span
                    class="card__item-dark card__item-dark--history"
                    >${DOMElements.billByPersonText.textContent}</span
                >
            </li>
            <li class="card__item card__item--history">
                Tip by person:<span
                    class="card__item-dark card__item-dark--history"
                    >${DOMElements.billTipText.textContent}</span
                >
            </li>
            <li class="card__item card__item--history">
                Total cost by person:<span
                    class="card__item-dark card__item-dark--history"
                    >${DOMElements.totalBillCostText.textContent}</span
                >
            </li>
        </ul>`;
    history.push(cardHistory);
    updateHistoryBill();

    const deleteCard = cardHistory.querySelector('.card__title');
    deleteCard.addEventListener('click', removeHistoryBill);
};

const removeHistoryBill = e => {
    const index = e.target.parentNode.dataset.id;
    history.splice(index, 1);
    updateHistoryBill();
};

const updateHistoryBill = () => {
    DOMElements.card.textContent = '';
    history.forEach((historyItem, key) => {
        historyItem.dataset.id = key;
        DOMElements.card.appendChild(historyItem);
    });
};

DOMElements.btnCalculate.addEventListener(
    `${constant.click}`,
    updateCalculation,
);

const openApp = () => {
    DOMElements.calculator.style.display = 'flex';
};

DOMElements.btnOpenApp.addEventListener(`${constant.click}`, openApp);

const closeApp = () => {
    DOMElements.calculator.style.display = 'none';
};

DOMElements.btnCloseApp.addEventListener(`${constant.click}`, closeApp);

const calculatePercentTip = e => {
    DOMElements.percentageTipEnd.textContent = `${e.target.value}%`;
};

DOMElements.percentageTipRange.addEventListener(
    `${constant.input}`,
    calculatePercentTip,
);

const calculateSplitTip = e => {
    DOMElements.splitTipEnd.textContent = e.target.value;
};

DOMElements.splitTipRange.addEventListener(
    `${constant.input}`,
    calculateSplitTip,
);
