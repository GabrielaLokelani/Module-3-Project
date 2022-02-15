function setGrid(numColums, numRows) {

const rootDIV = document.getElementById('root');

const myDIV = document.createElement('div');

let gridHTML = '<div class="game">';

gridHTML += '<table class = "pop-it" >'

for (let col = 0; col < numColums; col++) {
    gridHTML += '<tr>';
    for (let row = 0; row < numRows; row++) {
        gridHTML += '<td> <input id = "button" class = "button" type = "button" /> </td>'
    }
    gridHTML += '</tr>';
} 

gridHTML += '</table>';

gridHTML += '</div>';
myDIV.innerHTML = gridHTML;

rootDIV.appendChild(myDIV);

myDIV.addEventListener("click", (e) => {
    if (e.target.className == "button") {
        if (e.target.className == "button") {
            e.target.className = "buttonactive";
        } else {
            e.target.className = "button";
        }
    } 
 });
}

export {setGrid};
