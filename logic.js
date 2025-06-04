let uS=0;
let cS=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector(".msg")

const uSPara=document.querySelector("#user");
const cSPara=document.querySelector("#computer");

const computerChoice=()=>
{
    const options=["rock","paper","scissors"];
    const idx=Math.floor(Math.random()*3);
    return options[idx];
}

const drawGame=()=>{
  msg.innerText="Draw! Play Again."
}

const showWinner=(userWin,uC,compChoice)=>{
    if(userWin){
        uS++;
        uSPara.innerText=uS;
        msg.innerText=`You Win ! ${uC} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }
    else{
        cS++;
        cSPara.innerText=cS;
      msg.innerText=`You Lose ! ${compChoice} beats ${uC}\nTry Again`;
            msg.style.backgroundColor="red";
    }
}
const playGame=(uC)=>
{
    const compChoice=computerChoice();
    

    if(uC===compChoice){drawGame();} //Draw Condition
    else{
        let userWin=true;
        if(uC==="rock"){
            userWin = compChoice === "scissors" ? true : false;
        }
        else if(uC==="scissors")
        {
              userWin = compChoice === "paper" ? true : false;
        }
        else{
              userWin = compChoice === "rock" ? true : false;
        }
        showWinner(userWin,uC,compChoice);    
    }
};

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
       const uC=choice.getAttribute("id");
       playGame(uC);
    })
})
