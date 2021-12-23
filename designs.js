//Variables by selecting the DOM elements that the user will interact with
const table = document.body.querySelector('#pixelCanvas');
const myCanvas = document.body.querySelector('#sizePicker');

/*
  Set an event for creates a grid when the button submit is click
*/
myCanvas.addEventListener('submit',function(event)
    {
    event.preventDefault();//To prevent reloading the page, when click submit
    makeGrid();
});
/*
  * function create a grid of squares
  * currentWidth- access to the number of squares representing the width of the grid
  *  currentHeight- access to the number of squares representing the height of the grid
*/
function makeGrid() {
    table.innerHTML = ''; //Sets the HTML content inside table;
    var currentHeight= document.body.querySelector('#inputHeight').value;
    var currentWidth = document.body.querySelector('#inputWidth').value;
    for(row = 0;row < currentHeight; row++){
        var newRow = table.insertRow();
        for(column = 0; column < currentWidth; column++)//Nested loop
        newRow.insertCell();
    }


}
/*
*You can color the pixels in the grid
*Event listeners are properly added to the grid squares
*/
table.addEventListener('click',function(event){
    const currentColor = document.body.querySelector('#colorPicker').value;
    event.target.style.backgroundColor = currentColor;
});
