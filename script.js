const changeMoney = document.getElementById('change');

function getBottles(money, bottlePrice) {
    const bottlesTotal = Math.floor(money / bottlePrice);
    return bottlesTotal;
}

function getChange(money, bottlePrice) {
    const changeAmount = (money % bottlePrice).toFixed(2);
    changeMoney.innerHTML =
        "I got " + getBottles(money, bottlePrice) + " bottles and " + changeAmount + " euro" + (changeAmount > 1 ? "'s" : "") + " back.";
}

getChange(15, 3.65);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//BMI calculator
const bmiResult = document.getElementById('bmiResult');
const bmiBtn = document.getElementById('bmiButton');


bmiBtn.addEventListener('click', () => {
    const userHeight = parseFloat(document.getElementById('bmiHeight').value);
    const userWeight = parseFloat(document.getElementById('bmiWeight').value);
    bmiResult.innerHTML = bmiCalculator(userHeight, userWeight);
});

function bmiCalculator(height, weight) {
    let bmi = Math.round(weight / ((height / 100) * (height / 100)));

    if (bmi < 18) {
        return "Your BMI is " + bmi + ". You're underweight. Eat some, you punk!"
    } else if (bmi >= 18 && bmi <= 25) {
        return "Your BMI is " + bmi + ". You have a healthy weight."
    } else if (bmi > 25 && bmi < 30) {
        return "Your BMI is " + bmi + ". You're overweight. Do something about it now, you fat fuck!"
    } else {
        return "Your BMI is " + bmi + ". You gonna die!"
    }
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Leap year calculator

const lYButton = document.getElementById('leapYearButton');
const lYAnswer = document.getElementById('leapYearAnswer');

lYButton.addEventListener('click', () => {
    const year = parseInt(document.getElementById('year').value);
    lYAnswer.innerHTML = leapYearCalculator(year);
});

function leapYearCalculator(year) {

    if (year % 4 == 0) {
        if (year % 100 != 0) {
            return year + " is a leap year."
        } else if (year % 100 == 0) {
            if (year % 400 == 0) {
                return year + " is a leap year."
            } else {
                return year + " is not a leap year."
            }
        }
    } else if (year % 4 != 0) {
        return year + " is not a leap year."
    }
    else {
        return "Enter a correct year format"
    }
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// WHo's paying random name return

let whosPayingBtn = document.getElementById('whosPayingBtn');
let whosPayingAnswer = document.getElementById('whosPayingAnswer')

whosPayingBtn.addEventListener('click', () => {
    let input = document.getElementById('names').value;
    let names = input.split(" ");
    let person = Math.floor(Math.random() * names.length);
    let personPaying = names[person];

    whosPayingAnswer.innerHTML = "Person paying: " + personPaying;
});

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Pracice WHILE loops

let bottlesBtn = document.getElementById('bottlesBtn');

bottlesBtn.addEventListener('click', () => {
    let bottles = document.getElementById('bottles').value;
    let bottlesLyrics = document.getElementById('bottlesLyrics');
    bottlesLyrics.innerHTML = bottlesSong(bottles);
});

function bottlesSong(bottles) {
    let song = "";

    while (bottles >= 0) {
        if (bottles > 0) {
            song += bottles + ` bottle${bottles > 1 ? "s" : ""}` + " of beer on a wall. " +
                bottles + ` bottle${bottles > 1 ? "s" : ""}` + " of beer. Take one 1 bottle down, " +
                `${(bottles - 1) == 0 ? "No" : (bottles - 1)}` + ` bottle${bottles > 1 ? "s" : ""}` + " left on the wall.<br>"
            bottles--;
        } else {
            song += "No more beer. Go to the store."
            bottles--;
        }
    }

    return song;
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Practice FOR loops - Fibonacci sequence

let fibonacciAnswer = document.getElementById('fibonacciAnswer');
let fibonacciBtn = document.getElementById('fibonacciButton');

fibonacciBtn.addEventListener('click', () => {
    let n = parseInt(document.getElementById('fibonacci').value);
    fibonacciAnswer.innerHTML = fibonacciGenerator(n);
});

function fibonacciGenerator(n) {
    if (n === 1) {
        output = [0];
    }

    else if (n === 2) {
        output = [0, 1];
    }

    else {
        output = [0, 1];
        for (let elementsInArray = 2; elementsInArray < n; elementsInArray++) {
            output.push(output[output.length - 1] + output[output.length - 2]);
        };
    }

    return output;
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Dicee game 

let randomNumber1 = Math.ceil(Math.random() * 6);
let randomNumber2 = Math.ceil(Math.random() * 6);
let image1 = document.querySelector(".img1");
let image2 = document.querySelector(".img2");
let diceGameResult = document.getElementById('diceGameResult');

image1.setAttribute("src", "assets/dice" + randomNumber1 + ".png");
image2.setAttribute("src", "assets/dice" + randomNumber2 + ".png");

diceGameResult.innerHTML = diceGameScore();

function diceGameScore() {
    if (randomNumber1 > randomNumber2) {
        return "Player 1 wins!";
    }
    else if (randomNumber1 < randomNumber2) {
        return "Player 2 wins!";
    }
    else {
        return "It's a draw!";
    }
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// // Higher order functions
// let calculatorAnswer = document.getElementById('calculatorAnswer');
// let resultBtn = document.getElementById('equalSign');
// let operatorSelect = document.getElementById('operator');
// let operatorValue = operatorSelect.value;

// function handleSelectChange(event) {
//     const currentValue = event.target.value;
// }

// resultBtn.addEventListener('click', function () {
//     let num1 = parseInt(document.getElementById('number1').value);
//     let num2 = parseInt(document.getElementById('number2').value);
//     calculatorAnswer.innerHTML = calculator(num1, num2);
// });


// function add(num1, num2) {
//     return num1 + num2;
// }

// function subtract(num1, num2) {
//     return num1 - num2;
// }

// function divide(num1, num2) {
//     return num1 / num2;
// }

// function multiply(num1, num2) {
//     return num1 * num2;
// }

// function calculator(num1, num2) {
//     if (operatorValue == "+") {
//         return num1 + num2;
//     }
//     else if (operatorValue == "-") {
//         return num1 - num2;
//     }
//     else if (operatorValue == "/") {
//         return num1 / num2;
//     }
//     else if (operatorValue == "*") {
//         return num1 * num2;
//     }
//     else {
//         return "Please check that you entered a correct value..."
//     }
// };

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Drumkit

let numberOfDrums = document.querySelectorAll('.drum').length;

for (i = 0; i < numberOfDrums; i++) {
    document.querySelectorAll('.drum')[i].addEventListener('click', function () {        
        let buttonInnerHtml = this.innerHTML;
        makeSound(buttonInnerHtml);
        buttonAnimation(buttonInnerHtml);
    });
}

document.addEventListener('keydown', function(event) {
    makeSound(event.key)
    buttonAnimation(event.key);
});

function makeSound(key) {
    switch (key) {
        case "w":
            let tom1 = new Audio('assets/sounds/tom-1.mp3');
            tom1.play();
            break;

        case "a":
            let tom2 = new Audio('assets/sounds/tom-2.mp3');
            tom2.play();
            break;

        case "s":
            let tom3 = new Audio('assets/sounds/tom-3.mp3');
            tom3.play();
            break;

        case "d":
            let tom4 = new Audio('assets/sounds/tom-4.mp3');
            tom4.play();
            break;

        case "j":
            let kick = new Audio ('assets/sounds/kick-bass.mp3');
            kick.play();
            break;

        case "k":
            let snare = new Audio ('assets/sounds/snare.mp3');
            snare.play();
            break;

        case "l":
            let crash = new Audio ('assets/sounds/crash.mp3');
            crash.play();
            break;

        default: console.log("Press a valid key");
            break;
    }
}

function buttonAnimation(currrentKey) {
    let activeKey = document.querySelector("." + currrentKey);
    activeKey.classList.add("pressed");
    setTimeout(function() {
        activeKey.classList.remove("pressed");
    }, 150);
}

