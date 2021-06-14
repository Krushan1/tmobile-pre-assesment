let timerEl = document.getElementById('running-timer');
console.log(timerEl)
let timerVal = 0;
setInterval(() => {
    timerVal++;
    timerEl.innerHTML = timerVal; 
}, 1000)

let counterBtn = document.getElementById('counter-btn');
let counter = 0;
counterBtn.addEventListener("click", () => {
    counter++;
    document.getElementById("counter-num").innerHTML = counter;
  });