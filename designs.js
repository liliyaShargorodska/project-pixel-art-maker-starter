//Variables by selecting the DOM elements that the user will interact with
const table = document.body.querySelector('#pixelCanvas');
const myCanvas = document.body.querySelector('#sizePicker');

myCanvas.addEventListener('submit',function(event){
  event.preventDefault();//To prevent reloading the page, when click submit
  makeGrid();
});

function makeGrid() {
    table.innerHTML = ''; //Sets the HTML content inside table;
    var currentHeight= document.body.querySelector('#inputHeight').value;
    var currentWidth = document.body.querySelector('#inputWidth').value;
    for(row = 0;row < currentHeight; row++){
        var newRow = table.insertRow()
        for(column = 0; column < currentWidth; column++)//Nested loop
        newRow.insertCell();
    }


};
//You can color the pixels in the grid
table.addEventListener('click',function(event){
    const currentColor = document.body.querySelector('#colorPicker').value;
    event.target.style.backgroundColor = currentColor;
});
