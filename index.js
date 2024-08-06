const increaseButtonEl = document.querySelector(".counter__button--increase");
const decreaseButtonEl = document.querySelector(".counter__button--decrease");
const resetButtonEl = document.querySelector(".counter__reset-button");
const counterValueEl = document.querySelector(".counter__value");
const counterEl = document.querySelector(".counter");
const counterTitleEl = document.querySelector(".counter__title");

function incrementCounter() {
    let currentValue = counterValueEl.textContent;
    let currentValueAsNumber = Number(currentValue);

    if(currentValueAsNumber<5) {
        currentValueAsNumber++;
        counterValueEl.textContent = currentValueAsNumber;
       
    }
    else {
        counterEl.classList.add("counter--limit");
        counterTitleEl.innerHTML = `
            Limi! Buy <b>Pro</b> for >5
        `;
        increaseButtonEl.disabled = true;
        decreaseButtonEl.disabled = true;

    }
}

increaseButtonEl.addEventListener("click", incrementCounter);


decreaseButtonEl.addEventListener("click", e => {

    let currentValue = counterValueEl.textContent;
    let currentValueAsNumber = Number(currentValue);

    if(currentValueAsNumber>0) {

        currentValueAsNumber--;
        counterValueEl.textContent = currentValueAsNumber;
    }

});

resetButtonEl.addEventListener("click", e => {

    counterValueEl.textContent = 0;
    counterEl.classList.remove("counter--limit");
    counterTitleEl.textContent = "Fancy Counter";
    increaseButtonEl.disabled = false;
    decreaseButtonEl.disabled = false;

});

document.addEventListener("keydown", e => {

    if(e.key === "w") {
        incrementCounter();
    }

});