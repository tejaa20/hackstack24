let boxes=document.querySelectorAll(".btn");
let resetbtn=document.querySelector(".reset");
let msg=document.querySelector(".msg-Container");
let con = document.querySelector(".msg");
let newbtn=document.querySelector(".new");



let turn0=true;
let count=0;
const winningpatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
const resetgame=()=>{
    turn0=true;
    count=0;
    enableBoxes();
    msg.classList.add("hide");
}
boxes.forEach ((box)=>{
    box.addEventListener("click",() =>{
        if(turn0)
            {
                box.innerText="O";
                turn0=false;

        }
        else{
            box.innerText="X";
            turn0=true;
        }
        box.disabled=true;
     count++;
     let isWinner=checkWinner();
     if(count===9 && !isWinner){
        gamedraw();
     }

    });
});
const disableBoxes =()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enableBoxes =()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
const gamedraw=()=>{
    con.innerText='Game was a draw';
    msg.classList.remove("hide");
    disableBoxes();
}
const showWinner=(me)=>{
    con.innerText=`Congratulations,Winner is ${me}`;
    msg.classList.remove("hide");
    disableBoxes();
    

};


const checkWinner=()=>{
    for(let pattern of winningpatterns){
        let pos1Val=boxes[pattern[0]].innerText;
        let pos2Val=boxes[pattern[1]].innerText;
        let pos3Val=boxes[pattern[2]].innerText;
if(pos1Val!="" && pos2Val!="" && pos3Val!=""){
    if(pos1Val===pos2Val && pos2Val===pos3Val){
        
        showWinner(pos1Val);
        return true;
    }
}
    }
};

newbtn.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame);