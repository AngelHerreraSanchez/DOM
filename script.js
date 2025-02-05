const counterElement  = document.getElementById("counter");
let count = +counterElement.innerText;

const increment = () => {
    count++
    counterElement.innerText = count;
};

const incrementButton = document.getElementById("increment");
incrementButton.addEventListener("click", increment);



const decrement = () => {
    count--
    counterElement.innerText = count;
};

const decrementButton = document.getElementById("decrement");
decrementButton.addEventListener("click", decrement);
