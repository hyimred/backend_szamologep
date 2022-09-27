import stringMath from 'string-math';

let number = "";

function zero() {
    number += "0";
    document.getElementById("output").textContent = number
}

function one() {
    number += "1";
    document.getElementById("output").textContent = number
}

function two() {
    number += "2";
    document.getElementById("output").textContent = number
}

function three() {
    number += "3";
    document.getElementById("output").textContent = number
}

function four() {
    number += "4";
    document.getElementById("output").textContent = number
}

function five() {
    number += "5";
    document.getElementById("output").textContent = number
}

function six() {
    number += "6";
    document.getElementById("output").textContent = number
}

function seven() {
    number += "7";
    document.getElementById("output").textContent = number
}

function eight() {
    number += "8";
    document.getElementById("output").textContent = number
}

function nine() {
    number += "9";
    document.getElementById("output").textContent = number
}

function clear() {
    number = "";
    document.getElementById("output").textContent = number
}

function back() {
    number = number.slice(0, -1);
    document.getElementById("output").textContent = number
}

function div() {
    number += "/";
    document.getElementById("output").textContent = number
}

function szor() {
    number += "*";
    document.getElementById("output").textContent = number
}

function plus() {
    number += "+";
    document.getElementById("output").textContent = number
}

function min() {
    number += "-";
    document.getElementById("output").textContent = number
}

function eq() {
    number = stringMath(number)
    document.getElementById("output").textContent = number
}

function fl() {
    number += ".";
    document.getElementById("output").textContent = number
}

document.getElementById("0").addEventListener("click",zero)
document.getElementById("1").addEventListener("click",one)
document.getElementById("2").addEventListener("click",two)
document.getElementById("3").addEventListener("click",three)
document.getElementById("4").addEventListener("click",four)
document.getElementById("5").addEventListener("click",five)
document.getElementById("6").addEventListener("click",six)
document.getElementById("7").addEventListener("click",seven)
document.getElementById("8").addEventListener("click",eight)
document.getElementById("9").addEventListener("click",nine)

document.getElementById("ac").addEventListener("click",clear)
document.getElementById("back").addEventListener("click",back)
document.getElementById("div").addEventListener("click",div)
document.getElementById("szor").addEventListener("click",szor)
document.getElementById("plus").addEventListener("click",plus)
document.getElementById("min").addEventListener("click",min)
document.getElementById("fl").addEventListener("click",fl)
document.getElementById("eq").addEventListener("click",eq)
