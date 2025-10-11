let boxes = document.querySelectorAll(".box");
let msgCont = document.querySelector(".msg-container");
let newBtn = document.querySelector("#new_game");
let msg = document.querySelector("#msg");
let resetBtn = document.querySelector("#reset_btn");

let turnO = true;

let winPatterns = [
    [0,1,2], 
    [3,4,5], 
    [6,7,8], 
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
]

const reset = ()=>{
    turnO = true;
    enableBox();
    msgCont.classList.add("hide");
}

let count = 0;

boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        //console.log("button was clicked")
        if(turnO){
            box.innerText = "O";
            turnO = false;
        }
        else{
            box.innerText="X";
            box.style.color = "red";
            turnO = true;
        }
        count++
        box.disabled = true;
        
       let isWinner =  checkWinner();

        if(count === 9 && !isWinner){
           drawchec();
        }
    });
});

let disableBox = ()=>{
    for(let box of boxes){
    box.disabled=true;
    }
}

let enableBox = ()=>{
    for(let box of boxes){
    box.disabled = false;
    box.innerText = "";
    }
}

const drawchec = ()=>{
         msg.innerText = "It's a draw";
         msgCont.classList.remove("hide");
         disableBox();
    }

// winner is attribute in case you forgot
const showwinner = (winner)=>{               
    msg.innerText = `Congratulation for winning ${winner}`;
    msgCont.classList.remove("hide");
    disableBox();
}

const checkWinner = ()=> {
    for(let pattern of winPatterns){
    // console.log(pattern[0],pattern[1],pattern[2]);
    // console.log(boxes[pattern[0]].innerText,
    //      boxes[pattern[1]].innerText, 
    //      boxes[pattern[2]].innerText
    //     );
    
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;
    
    if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
        if(pos1Val === pos2Val && pos2Val === pos3Val){
             //console.log("Winner", pos1Val);

             showwinner(pos1Val);
            }
         }
     }
}

newBtn.addEventListener("click", reset);
resetBtn.addEventListener("click", reset);
