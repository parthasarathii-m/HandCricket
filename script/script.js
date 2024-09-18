let runs = 0;
let target = 0;
let batter = "player";
let innings = 1;
function showGame() {
    document.getElementById("game").style.display = "block";
    document.getElementById("button").style.display = "none";
}

function getComputerChoise() {
    let x = Math.floor((Math.random() * 6) + 1);
    return x;
}

function addRuns(run) {
    let computerChoise = 0;
    computerChoise = getComputerChoise();
    document.getElementById("computer-choise").innerHTML = computerChoise;
    if (computerChoise == run) {
        if (batter == "player") {
            console.log("you are out")
            innings = 2;
            batter = "computer";
            target = runs;
            runs = 0;
            document.getElementById("target").innerHTML = "Target : " + target;
            document.getElementById("player-score").innerHTML = "Runs : 0";
        }
        else {
            console.log("computer is out");
            reset();
        }
    }
    else {
        if (innings == 1) {
            runs += run;
        }
        else if (innings == 2) {
            runs += computerChoise
        }
        document.getElementById("player-score").innerHTML = "Runs : " + runs;
    }
    if (runs >= target && innings == 2) {
        console.log("Computer won")
        reset();
    }
}

function reset() {
    runs = 0;
    target = 0;
    batter = "player";
    innings = 1;
    document.getElementById("target").innerHTML = "Target : " + target;
    document.getElementById("player-score").innerHTML = "Runs : 0";
    document.getElementById("computer-choise").innerHTML = 0;
}