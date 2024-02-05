let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");

let msg = document.querySelector("#msg");

let userScorePara = document.querySelector("#user-score");
let compScorePara = document.querySelector("#comp-score");


const genCompChoice = ()=>{
    const options = ["Rock","Paper","Scissors"];
   const ranIndx =  Math.floor(Math.random()*3);
   return options[ranIndx];
}

const gameDraw = ()=>{
    console.log("Game Draw");
    msg.innerText = "Game was Draw. Play again.";
    msg.style.backgroundColor = "#081b31";
}

const showWinner = (userWin,userChoice,compChoice)=>{
    if(userWin){
        console.log("You win!")
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText = `You win! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }else{
        console.log("You lose.")
        compScore++;
        compScorePara.innerText=compScore;
        msg.innerText = `You lose. ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice)=>{
    console.log("User Choice = ",userChoice);
    const compChoice = genCompChoice();
    console.log("Computer Choice =",compChoice);
    if(userChoice === compChoice){
       //draw
    gameDraw();
    }else{

        let userWin = true;
        if(userChoice === "Rock"){
            //paper,scissors
            userWin = compChoice === "Paper"?false:true;

        }else if(userChoice === "Paper"){
            //rock,scissors
            userWin = compChoice==="Scissors"?false:true;
        }else{
            //rock,paper
            userWin = compChoice==="Rock"?false:true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
  

}




choices.forEach((choice) => {
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })

})




