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

    const cardHistory = document.createElement('div');
    cardHistory.setAttribute('class', 'card__history');
    cardHistory.id = id;
    cardHistory.innerHTML = `<h3 class="card__title">
            ${date}
            >
        </h3>
        <ul class="card__list card__list--history">
            <li class="card__item card__item--history">
                Your bill:
                <span
                    class="card__item-dark card__item-dark--history"
                    >${DOMElements.itemBill.textContent}</span
                >
            </li>
            <li class="card__item card__item--history">
                Name of bill:<span
                    class="card__item-dark card__item-dark--history"
                    >${DOMElements.itemNameBill.textContent}</span
                >
            </li>
            <li class="card__item card__item--history">
                Percent Tip:<span
                    class="card__item-dark card__item-dark--history"
                    >${DOMElements.itemPercentTip.textContent}</span
                >
            </li>
            <li class="card__item card__item--history">
                Total Tip:<span
                    class="card__item-dark card__item-dark--history"
                    >${DOMElements.itemTotalTip.textContent}</span
                >
            </li>
            <li class="card__item card__item--history">
                Split:<span
                    class="card__item-dark card__item-dark--history"
                    >${DOMElements.itemSplit.textContent}</span
                >
            </li>
            <li class="card__item card__item--history">
                Bill by person:<span
                    class="card__item-dark card__item-dark--history"
                    >${DOMElements.itemBillPerson.textContent}</span
                >
            </li>
            <li class="card__item card__item--history">
                Tip by person:<span
                    class="card__item-dark card__item-dark--history"
                    >${DOMElements.itemBillTip.textContent}</span
                >
            </li>
            <li class="card__item card__item--history">
                Total cost by person:<span
                    class="card__item-dark card__item-dark--history"
                    >${DOMElements.itemBillCost.textContent}</span
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
