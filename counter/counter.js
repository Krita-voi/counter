const decreaseBtn = document.getElementById("decreaseBtn");
const increaseBtn = document.getElementById("increaseBtn");
const resetBtn = document.getElementById("resetBtn");
const num = document.getElementById("myH1");

let count = 0

increaseBtn.onclick = function (){
    count++;
    num.textContent = count;
}


decreaseBtn.onclick = function (){
    count--;
    num.textContent = count;
}


resetBtn.onclick = function (){
    count = 0;
    num.textContent = count;
}