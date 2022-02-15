let first_click = false;
let last_click = false;
let num2pop = 0;
let curr_pop_cnt = 0;

function setGrid(numColums, numRows, pat, pat_colors) {
    const rootDIV = document.getElementById('root');

    const myDIV = document.createElement('div');

    let gridHTML = '<div class="game">';

    gridHTML += '<table class = "pop-it" >'

    curr_pop_cnt = 0;

    for (let col = 0; col < numColums; col++) {
        gridHTML += '<tr>';
        for (let row = 0; row < numRows; row++) {
            if(pat[col][0][row] == "-"){
                gridHTML += '<td> <input id = "button" class = "button_disabled" type = "button" /> </td>';
            } else {
                gridHTML += '<td> <input id = "button" class = "button" type = "button" /> </td>';
                num2pop++;
            }
        }
        gridHTML += '</tr>';
    } 

    gridHTML += '</table>';

    gridHTML += '</div>';
    myDIV.innerHTML = gridHTML;

    rootDIV.appendChild(myDIV);

    myDIV.addEventListener("click", (e) => {
        if (e.target.className == "button") {
            e.target.className = "button_active";
            first_click = first_click ? first_click : true;
            curr_pop_cnt++
            console.log("Pop #"+curr_pop_cnt + " of "+num2pop);
            last_click = curr_pop_cnt == num2pop ? true : false;
            if(last_click){
                console.log("CONGRATULATIONS!!! You POPPED all the spots for this pattern!")
            }
        }
    });
}

export {setGrid, first_click, curr_pop_cnt, num2pop};
