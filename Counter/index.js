const decrteaseBtn = document.getElementById("decrteaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");
let count = 0;

increaseBtn.onclick = function () {
    count++;
    countLabel.textContent = count;
}

decrteaseBtn.onclick = function () {
    count--;
    countLabel.textContent = count;
}
resetBtn.onclick = function () {
    count = 0;
    countLabel.textContent = count;
}