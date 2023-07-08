function createBoard(size){
    const board = document.querySelector('.board');
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  board.style.gridTemplateRows = `repeat(${size}, 1fr)`;
  let numDivs= size * size;
  for(let i=0; i<numDivs; i++ ){
   const div = document.createElement('div')
   div.classList.add('board-cells');
   div.addEventListener('mouseover', function(){
   div.style.backgroundColor = 'black'
   })
   board.insertAdjacentElement("beforeend", div);

  }
  const clear = document.getElementById('clear');
  clear.addEventListener('click', function(){
  
  })
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
const resolution = document.getElementById('resolution');
resolution.addEventListener("click", function(){
  const size = newResolution();
  createBoard(size);
})
//reseting 
function clearBoard(){
  const divs = document.querySelectorAll('.board-cells');
  divs.forEach((div) => div.style.backgroundColor = '#0B6623')
}






