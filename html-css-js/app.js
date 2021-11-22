const btnZero = document.querySelector(".zero");
const btnOne = document.querySelector(".one");
const btnTwo = document.querySelector(".two");
const btnThree = document.querySelector(".three");
const btnFour = document.querySelector(".four");
const btnFive = document.querySelector(".five");
const btnSix= document.querySelector(".six");
const btnSeven= document.querySelector(".seven");
const btnEight = document.querySelector(".eight");
const btnNine = document.querySelector(".nine");
const btnPoint = document.querySelector('.point')

const btnClear = document.querySelector(".clear");
const btnBackSpace = document.querySelector(".backspace");

const btnPlus = document.querySelector('.plus');
const btnMinus = document.querySelector('.minus');
const btnMultiply = document.querySelector('.multiply');
const btnDivision = document.querySelector('.division');
const btnEqual = document.querySelector('.equal');

const screen = document.querySelector(".screen");



btnPlus.addEventListener('click', (e) => {
    screen.innerText += " + "  ;
})

btnMinus.addEventListener('click', (e) => {
    screen.innerText += " - "  ;
})

btnMultiply.addEventListener('click', (e) => {
    screen.innerText += " * "  ;
})

btnDivision.addEventListener('click', (e) => {
    screen.innerText += " / "  ;
})

btnEqual.addEventListener('click', (e) => {
    try {
        screen.innerText = eval(screen.innerText)  ;
    } catch (error) {
        
    }
    
})


//Clear functions
btnClear.addEventListener('click', (e) => {
    screen.innerText = ""
})

btnBackSpace.addEventListener('click', (e) => {
    if (screen.innerText) {
        screen.innerText = screen.innerText.slice(0,screen.innerText.length -1)
    }
})

//Add selected number to string
btnZero.addEventListener('click', (e) => {
    screen.innerText += 0 ;
})

btnOne.addEventListener('click', (e) => {
    screen.innerText += 1 ;
})

btnTwo.addEventListener('click', (e) => {
    screen.innerText += 2 ;
})

btnThree.addEventListener('click', (e) => {
    screen.innerText += 3 ;
})

btnFour.addEventListener('click', (e) => {
    screen.innerText += 4 ;
})

btnFive.addEventListener('click', (e) => {
    screen.innerText += 5 ;
})

btnSix.addEventListener('click', (e) => {
    screen.innerText += 6 ;
})

btnSeven.addEventListener('click', (e) => {
    screen.innerText += 7 ;
})

btnEight.addEventListener('click', (e) => {
    screen.innerText += 8 ;
})

btnNine.addEventListener('click', (e) => {
    screen.innerText += 9 ;
})

btnPoint.addEventListener('click', (e) => {
    screen.innerText += '.' ;
})

