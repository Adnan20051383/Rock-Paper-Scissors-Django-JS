const result = document.getElementById("result");
let numOfEfforts = Number(document.getElementById("numOfEfforts").textContent.split(" ")[5]);
let numOfWins = Number(document.getElementById("numOfWins").textContent.split(" ")[5]);
const botChoice = document.getElementById("bot-choice");
const yourChoice = document.getElementById("your-choice");
const tempResult = document.getElementById("temp-result");
const WIN = "You Win!";
const LOSE = "You Lose!";
const TEMPWIN = "GO On Like That!";
const TEMPLOSE = "Well Shit...!";
const DRAW = "Draw!";
function makeBotsDecision() {
    return Math.floor(Math.random() * 3) + 1;
}

function changeResult(msg) {
    if (msg === WIN) {
        result.classList.remove("textRed");
        result.classList.add("textGreen");
    }
    else {
        result.classList.remove("textGreen");
        result.classList.add("textRed");
    }
    result.textContent = msg;
}

function makeDecision(num) {
    if (!(numOfWins === 0 || numOfEfforts === 0 || numOfWins > numOfEfforts)) {
        const botResult = makeBotsDecision();
        botChoice.textContent = "Bot Choice:  ";
        botChoice.innerHTML += (botResult === 1) ? (`<img src="/static/img/1.png" alt="asd">`) : ((botResult === 2) ? (`<img src="/static/img/2.png" alt="asd">`) : (`<img src="/static/img/3.png" alt="asd">`));
        yourChoice.textContent = "Your Choice:  ";
        yourChoice.innerHTML += (num === 1) ? (`<img src="/static/img/1.png" alt="asd">`) : ((num === 2) ? (`<img src="/static/img/2.png" alt="asd">`) : (`<img src="/static/img/3.png" alt="asd">`));
        if (botResult === num) {
             tempResult.textContent = DRAW;
             tempResult.style.color = "#000000";
        }

        else if ((botResult === 1 && num === 2) || (botResult === 2 && num === 3) || (botResult === 3 && num === 1)) {
            numOfWins--;
            numOfEfforts--;
            tempResult.textContent = TEMPWIN;
            tempResult.style.color = "#4CAF50";
        }
        else {
            numOfEfforts--;
            tempResult.textContent = TEMPLOSE;
            tempResult.style.color = "#ef3030";
        }
    }
    updateWinsEfforts();
}

function updateWinsEfforts() {
    document.getElementById("numOfWins").textContent = "Number Of Wins Needed : " +  numOfWins;
    document.getElementById("numOfEfforts").textContent = "Number Of Efforts Left : " + numOfEfforts;
    if ((numOfEfforts === 0 && numOfWins > 0) || numOfWins > numOfEfforts)
        changeResult(LOSE);
    else if(numOfWins === 0)
        changeResult(WIN);
}