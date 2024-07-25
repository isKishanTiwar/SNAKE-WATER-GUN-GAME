let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll("#choice");
const msg = document.querySelector("#msg");
// select the value of user-score and comp-score
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");
//computer random select values from option variable
const genCompChoice = () => {
    const option = ["snake", "water", "gun"];
    const randIdx = Math.floor(Math.random() * 3);
    return option[randIdx];
};
//user select one from the given option
const drawGame =(userChoice) => {
    console.log("game was draw.")
    msg.innerText = `Game Draw!`;
    msg.style.backgroundColor = "#081b31";
}

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else{
        compScore++;
        userScorePara.innerText = compScore;
        msg.innerText = `You Lose! ${compChoice} beats your ${userChoice}`;
        msg.style,backgroundColor = "red";
    }
}

const playGame = (userChoice) => {
    console.log("user choice = ", userChoice);
    //Generate Computer choice -> modular way
    const compChoice = genCompChoice();
    console.log("comp choice=", compChoice);

    if(userChoice === compChoice){
        //Draw Game
        drawGame();
    }
    else {
    let userWin = true;
    if(userChoice === "water"){
        // snake, gun
        userWin = compChoice === "gun" ? false : true;
    }
    else if(userChoice === "gun") {
        //water, snake
        userWin = compChoice === "snake" ? false : true;
    }

    else {
        //water, gun
        compChoice === "water" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice)
}
};

choices.forEach((choice)=> {
    choice.addEventListener("click", () =>{
        const userChoice = choice.getAttribute("class");
        playGame(userChoice);
    });
});

const restartBtn = document.querySelector("#restart");

// Add an event listener to the button
restartBtn.addEventListener("click", () => {
    // Reset the scores
    userScore = 0;
    compScore = 0;

    // Update the score display
    userScorePara.innerText = userScore;
    compScorePara.innerText = compScore;

    // Clear the message
    msg.innerText = "";
    msg.style.backgroundColor = "#081b31";
});