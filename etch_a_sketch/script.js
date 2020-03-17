
var container = document.querySelector("div.grid-container");
function addColorChangeEventListeners(parent, before, after){
    parent.addEventListener("mouseover", function (){
        if (event.target.className != 'grid-container')
        {
            r = Math.round(Math.random()*(255));
            g = Math.round(Math.random()*(255));
            b = Math.round(Math.random()*(255));
            event.target.style['background-color'] = 'rgb('+r+', '+g+', '+b+')';
            //Returns the brightness ratio
            brightness = Number( getComputedStyle(event.target).getPropertyValue("filter").match(/[0-1](.[0-9])*/)[0] )
            event.target.style.filter = "brightness("+String( brightness-0.2 )+")";
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