let userScore = 0;
let comScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

let userScorePara = document.querySelector("#user-score");
let compScorePara = document.querySelector("#comp-score");

const getCompChoice = ()=>{
    const options = ["scissors", "paper", "rock"];
    const randomIdx = Math.floor(Math.random() * 3);
    return options[randomIdx];
}

const drawGame = ()=>{
     //console.log("it's draw");
     msg.innerText = "Game was draw. Play again";
     msg.style.background = "rgba(255, 193, 7, 0.3)";
     msg.style.color = "#fff9c4";
     msg.style.borderColor = "rgba(255, 193, 7, 0.6)";
}

const getWinner = (userWin, userChoice, compChoice)=>{
    if (userWin){
        //console.log("You won");
        userScore++
        userScorePara.innerText = userScore;
        msg.innerText = `You won! Your ${userChoice} beats ${compChoice}`;
        msg.style.background = "rgba(76, 175, 80, 0.3)";
        msg.style.color = "#c8e6c9";
        msg.style.borderColor = "rgba(76, 175, 80, 0.6)";
    }else{
        //console.log("You lose");
        comScore++
        compScorePara.innerText = comScore;
        msg.innerText = `You lose. ${compChoice} beats your ${userChoice}`;
        msg.style.background = "rgba(244, 67, 54, 0.3)";
        msg.style.color = "#ffcdd2";
        msg.style.borderColor = "rgba(244, 67, 54, 0.6)";
    }
}

const playGame = (userChoice)=>{
    //console.log("user choice =", userChoice);
    const compChoice = getCompChoice();
    //console.log("comp choice =", compChoice);

    if(userChoice === compChoice){
        drawGame();
    }else{
        let userWin = true;
        if(userChoice === "scissors"){
            //rock paper
            userWin = compChoice === "rock" ? false : true;
        }else if(userChoice === "paper"){
            //rock scissors
            userWin = compChoice === "scissors" ? false : true;
        }else {
            userWin = compChoice === "paper" ? false : true;
        }
        getWinner(userWin, userChoice, compChoice);
    }
}

choices.forEach((choice)=>{
    //console.log(choice);
    let userChoice = choice.getAttribute("id");
    choice.addEventListener("click", ()=>{
    //console.log("choice was clicked", userChoice);
    playGame(userChoice);
    })
})