
// Timer functionality
let timerEl = document.getElementById('running-timer');
console.log(timerEl)
let timerVal = 0;
setInterval(() => {
    timerVal++;
    timerEl.innerHTML = timerVal; 
}, 1000)

//Counter functionality
let counterBtn = document.getElementById('counter-btn');
let counter = 0;
counterBtn.addEventListener("click", () => {
    counter++;
    document.getElementById("counter-num").innerHTML = counter;
  });

//Add numbers functionality
let submitBtn = document.getElementById('calculate-num-btn');
submitBtn.addEventListener('click', () => {
    let numberOne = Number(document.getElementById('number-one').value);
let numberTwo = Number(document.getElementById('number-two').value);

    document.getElementById('total-text').innerHTML = numberOne + numberTwo
})

