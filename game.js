let boxs = document.querySelectorAll(".box");
let resetbtn = document.querySelector(".reset");
let newbtn = document.querySelector(".new-game")
let msgContainer = document.querySelector(".msg-container")
let msg = document.querySelector(".msg")

let turnO = true;


let winptn =[
    [0,1,2],
    [0,4,8],
    [0,3,6],
    [1,4,7],
    [2,4,6],
    [2,5,8],
    [3,4,5],
    [6,7,8],
]

const resetGame =()=>{
    turnO = true;
    enablebox()
    msgContainer.classList.add("hide")
}

boxs.forEach((box) => {
    box.addEventListener("click",()=>{
        if(turnO===true){
            box.innerText ="O"
            turnO = false;
        }else{
            box.innerText ="X"
            turnO = true;
        }
        box.disabled = true;
        checkwinner();
    })   
});



const disabledbox =()=>{
    for(let box of boxs){
        box.disabled = true;
    }
}

const enablebox =()=>{
    for(let box of boxs){
        box.disabled = false;
        box.innerText=""
    }
}

const showWin =(winner)=>{
    msg.innerText=`Congratulation,Winner is ${winner}`;
    msgContainer.classList.remove("hide")
    disabledbox()
}

const checkwinner = ()=>{
    for(let ptn of winptn){
        let pos1 = boxs[ptn[0]].innerText;
        let pos2 = boxs[ptn[1]].innerText;
        let pos3 = boxs[ptn[2]].innerText;
        if(pos1!="" && pos2 !="" && pos3!=""){
            if (pos1===pos2 && pos2===pos3){
               showWin(pos1) 
            }
        }
    }
    
}

resetbtn.addEventListener("click",resetGame);
newbtn.addEventListener("click",resetGame);