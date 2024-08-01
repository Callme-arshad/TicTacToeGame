let boxes = document.querySelectorAll(".box");
let resetButton = document.querySelector("#reset");
let newGameBtn = document.querySelector(".newgame");
let msgContainer = document.querySelector(".winner");
let msg = document.querySelector("#msg");


let turnx = true;
// let arr2 = [["x","0"],["x","0"],["x","0"]];

//2D Array
const winpatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];


boxes.forEach((box) => {
    box.addEventListener("click", () => {
        // console.log("box was click");
        if (turnx) {
            box.innerText = 'x';
            turnx = false;
        }
        else {
            box.innerText = "o"
            turnx = true;
        }
        box.disabled = true;

        checkWinner();
    });
});
const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
const showWinner=(winner)=>{
    msg.innerText=`Congratulation winner is ${winner}`
    msgContainer.classList.remove("hide");
}
const checkWinner = () => {
    for (let pattern of winpatterns) {
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if (pos1val != "" && pos2val != "" && pos3val != "") {
            if (pos1val === pos2val && pos2val === pos3val) {
                // console.log(`${pos1val} is the winner`)
                showWinner(pos1val);
                disableBoxes();
            };
        };
    };
};

const resetGame =()=>{
    turnx=true;
    enableBoxes();
    msgContainer.classList.add("hide");
}

newGameBtn.addEventListener("click",resetGame);
resetButton.addEventListener("click",resetGame);
