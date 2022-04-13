let num1 = 8
let num2 = 2
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2
let sum = document.getElementById("sum-el")

function add(){
    ans = num1 + num2
    sum.textContent = ans
}
function sub(){
    ans = num1 - num2
    sum.textContent = ans
}
function divide(){
    ans = num1 / num2
    sum.textContent = ans
}
function multiply(){
    ans = num1 * num2
    sum.textContent = ans
}
