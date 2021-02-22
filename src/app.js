import './sass/build.scss';
import DOMElements from './helpers/DOMElements';
import IDGenerator from './helpers/IDGenerator';

const allBills = [];

const addBill = () => {
    let id = IDGenerator();
    let billValue = Number(
        Math.round(DOMElements.billInput.value + 'e+2') + 'e-2',
    );

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
};

DOMElements.btnAddBill.addEventListener('click', addBill);
