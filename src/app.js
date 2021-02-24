import './sass/build.scss';
import DOMElements from './helpers/DOMElements';
import IDGenerator from './helpers/IDGenerator';
import FormatCost from './helpers/FormatCost';

const allBills = [];
let walletAmount = 2000;
let walletSpending = 0;

const addBill = () => {
    let id = IDGenerator();
    let billValue = FormatCost(DOMElements.billInput.value);

    if (billValue <= 0) return;

    allBills.push({
        billValue,
        id,
    });

    DOMElements.billInput.value = '';

    const labelContainer = document.createElement('div');
    labelContainer.setAttribute('class', 'label');

    const labelContent = `
        <span class="label__price">$${billValue}</span> 
        <img
            src="./src/assets/icons/clear.svg" 
            class="label__delete" 
        /> 
    `;
    labelContainer.innerHTML = labelContent;
    DOMElements.cardLabels.appendChild(labelContainer);

    for (let bill of allBills) {
        walletSpending += bill.billValue;
        walletAmount -= bill.billValue;

        DOMElements.walletSpending.textContent = `$${FormatCost(
            walletSpending,
        )}`;

        DOMElements.totalCost.textContent = `$${FormatCost(walletSpending)}`;
    }

    DOMElements.walletAmount.textContent = `$${FormatCost(walletAmount)}`;

    DOMElements.percentageRange.addEventListener('input', e => {
        DOMElements.percentageTip.textContent = `${e.target.value}%`;
        DOMElements.totalTip.textContent = `$${FormatCost(
            (e.target.value * walletSpending) / 100,
        )}`;
    });

    DOMElements.splitRange.addEventListener('input', e => {
        DOMElements.splitTip.textContent = e.target.value;
        DOMElements.totalSplitCost.textContent = `$${FormatCost(
            walletSpending / e.target.value,
        )}`;
    });
};

DOMElements.btnAddBill.addEventListener('click', addBill);
