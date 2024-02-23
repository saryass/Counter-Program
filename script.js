const decreaseBtn = document.getElementById('decreaseBtn');
const increaseBtn = document.getElementById('increaseBtn');
const resetBtn = document.getElementById('resetBtn');
const counter = document.getElementById('counter');

let x=0;

increaseBtn.onclick =function () {
    x++;     //increment
    counter.textContent = x;
    counter.style.color='blue'
};

decreaseBtn.onclick = function () {
    x--;     //decrement
    counter.textContent = x;
    counter.style.color='red'
};

resetBtn.onclick = function () {
    x=0;
    counter.textContent = x;
    counter.style.color='black'
};