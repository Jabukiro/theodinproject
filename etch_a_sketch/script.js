
var container = document.querySelector("div.grid-container");
var pass = 0;
function addColorChangeEventListeners(parent, before, after){
    pass = pass > 255 ? 255 : pass;
    parent.addEventListener("mouseover", function (){
        if (event.target.className != 'grid-container')
        {
            r = Math.floor(Math.random()*(255-pass));
            g = Math.floor(Math.random()*(255-pass));
            b = Math.floor(Math.random()*(255-pass));
            event.target.style['background-color'] = 'rgb('+r+', '+g+', '+b+')';
            pass +=2.55;
        }
    })
    parent.addEventListener("mouseout", function (){
        if (event.target.className != 'grid-container')
        {
            event.target.style['background-color'] = after;
        }
    })
}
addColorChangeEventListeners(container, 'red', 'rgba(255, 255, 255, 0.8)');

function makeGrid(col, parent){
    parent.style['grid-template-columns'] = "repeat("+col+", auto)";
    for(i=0; i<(col*col); i++){
        var gridItem =  document.createElement("div");
        gridItem.setAttribute("class", "grid-item");
        parent.appendChild(gridItem);
    }
}
makeGrid(16, container);

function resetGrid(parent = container){
    parent.textContent = '';
    var col = prompt("How many squares per row?");
    gridItems = makeGrid(Number(col), container);
}