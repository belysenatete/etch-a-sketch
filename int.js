const color = document.getElementById('color');
const eraserBtn = document.getElementById('eraserBtn');
let draw = false;

function createBoard(size){
    const board = document.querySelector('.board');
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  board.style.gridTemplateRows = `repeat(${size}, 1fr)`;
  let numDivs= size * size;
  for(let i=0; i<numDivs; i++ ){
   const div = document.createElement('div')
   div.classList.add('board-cells');
      
  // Mouse down event to start drawing
  div.addEventListener("mousedown", function() {
    draw = true; // Allow drawing
    const selectedColor = color.value;
    div.style.backgroundColor = selectedColor; // Color the cell when you first click it
});
 // Mouse over event to draw when moving
 div.addEventListener("mouseover", function() {
  if(draw) { // Check if drawing is allowed
      const selectedColor = color.value;
      div.style.backgroundColor = selectedColor;
  }
}); 
div.addEventListener("mouseup", function() {
  draw = false;
});    

   board.insertAdjacentElement("beforeend", div);

  }
  
}
createBoard(16);

//window prompt
function newResolution(){
  const input = prompt("please select a resolution from 1 to 100");
  const message = document.getElementById('message');
  if (input == "") {
    message.innerHTML = "provide a resolution";
  } else if (input < 0 || input > 100) {
    message.innerHTML = "select a resolution from 1 to 100";
  } else {
    message.innerHTML = "play";
    return input;
  }

}
const resolution = document.getElementById('resolutionBtn');
resolution.addEventListener("click", function(){
  const size = newResolution();
  createBoard(size);
})

//reseting the board

function clearBoard(){
  const divs = document.querySelectorAll('.board-cells');
  divs.forEach((div) => div.style.backgroundColor = 'white')
}

// deleting the unwanted

function erase(){
  color.value = '#ffffff'
}







