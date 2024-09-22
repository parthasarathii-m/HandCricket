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
    document.getElementById("computer-out").style.display="none";
    document.getElementById("you-out").style.display="none";
    document.getElementById("computer-won").style.display="none";
    document.getElementById("you-won").style.display="none";
    let computerChoise = 0;
    computerChoise = getComputerChoise();
    document.getElementById("computer-choise").innerHTML = computerChoise;
    if (computerChoise == run) {
        if (batter == "player") {
            document.getElementById("you-out").style.display="block";
            innings = 2;
            batter = "computer";
            target = runs;
            runs = 0;
            document.getElementById("target").innerHTML = "Target : " + target;
            document.getElementById("player-score").innerHTML = "Runs : 0";
        }
        else {
            document.getElementById("computer-out").style.display="block";
            document.getElementById("you-won").style.display="block";
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
        document.getElementById("computer-won").style.display="block";
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