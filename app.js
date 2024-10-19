let boxes= document.querySelectorAll(".box");
let resetbtn= document.querySelector("#reset-btn");
let newgamebtn= document.querySelector("#new-btn");
let msgcontainer= document.querySelector(".msg-container"); 
let msg= document.querySelector("#msg");

let turnO=true; //playerX ,playerO
let count=0; //To Track Draw 
const winpatterns =[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const resetGame =() => {
    turnO = true;
    count=0;
    enableboxes();
    msgcontainer.classList.add("hide");
};

boxes.forEach((box) => {
    box.addEventListener("click",() => {
        //console.log("box clicked");
        if(turnO) { //PLAYER O 
            box.innerText="O";
            turnO = false;
        } else{ //PLAYER X
            box.innerText="X";
            turnO = true;
        }
        box.disabled=true;
        count++;

        let isWinner = checkWinner();
        if(count===9 && !isWinner)
        {
            gameDraw();
        }
    });
});

const gameDraw = () => {
    msg.innerText=`game was a Draw.`;

    msgcontainer.classList.remove("hide");
    disableboxes();
};

const disableboxes =() => {
    for(let box of boxes){
        box.disabled =true;
    }
};

const enableboxes =() => {
    for(let box of boxes){
        box.disabled =false;
        box.innerText="";
    }
};

const showWinner = (winner) => {
    msg.innerText=`congratulations Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disableboxes();
};
const checkWinner = () => {
    for(let pattern of winpatterns){
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if(pos1val !="" && pos2val !="" && pos3val !=""){
            if(pos1val === pos2val && pos2val === pos3val){
                //console.log("WINNER",pos1val);
                showWinner(pos1val);
                return true;
            }
    }
  }
};

newgamebtn.addEventListener("click", resetGame);
resetbtn.addEventListener("click", resetGame);