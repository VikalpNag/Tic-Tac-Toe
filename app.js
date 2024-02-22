let box = document.querySelectorAll(".box"); //getting element.
let boxes = document.querySelector(".boxes"); //get boxes container.
let msg = document.querySelector(".msg"); //will use for showing winner msg.
let newGame = document.querySelector(".new-btn"); 
let resetGame = document.querySelector(".reset-btn");

//array indices pairs for winning conditions.
let winningConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

//forEach method used to click all the boxes.
let clickBox = true; //first clicking for O is taken true,then for Clicking for X taken false below.
box.forEach((box) => {
  box.addEventListener("click", () => {
    if (clickBox) {
      box.innerText = "O";
      box.style = "color:midnightblue";
      clickBox = false;
    } else {
      box.innerText = "X";
      clickBox = true;
    }
    box.disabled = true;
    checkWinner();
  });
});

//fuction to enable buttons after clicking new game.
const enableBtns = () => {
  for (let btn of box) {
    btn.disabled = false;
  }
};

//fuction to disable buttons after any one player wins the game.
const disableBtns = () => {
  for (let btn of box) {
    btn.disabled = true;
  }
};

//function to check  who wins.
const checkWinner = () => {
  for (let pattern of winningConditions) {
    let pos1Val = box[pattern[0]].innerText; //a  bit confusion in this will get more clarity later with practice.
    let pos2Val = box[pattern[1]].innerText;
    let pos3Val = box[pattern[2]].innerText;

    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        msg.innerText = `Winner ${pos1Val}`;
        disableBtns();
      }
    }
  }
};

//To start a new game.
const startNewGame=()=>{
  clickBox=true;
  for(let newB of box){
    newB.innerText="";
    newB.style=false;
  }
  enableBtns();
  msg.innerText="";
}


//click for new game.
newGame.addEventListener("click",()=>{
      startNewGame();
})

//reset game button finctionality.
resetGame.addEventListener("click",()=>{
  startNewGame();
})