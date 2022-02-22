let first_click = false;
let first_click_tstamp = 0;
let last_click = false;
let last_click_tstamp = 0;

let num2pop = 0;
let curr_pop_cnt = 0;

function setGrid(numColums, numRows, pat, pat_colors) {
    const rootDIV = document.getElementById('game_field');

    // const myDIV = document.createElement('div');

    let gridHTML = '<div class="game">';

    gridHTML += '<table class = "pop-it" >'

    curr_pop_cnt = 0;
    num2pop = 0;

    for (let col = 0; col < numColums; col++) {
        gridHTML += '<tr>';
        for (let row = 0; row < numRows; row++) {
            let pat_char = pat[col][0][row];
            if (pat_char == "-") {
                gridHTML += '<td> <input id = "button" class = "button_disabled" type = "button" /> </td>';
            } else {
                let pop_color = pat_colors[pat_char];
                gridHTML += `<td> <input id = "button" class = "button" type = "button" style="background-color:${pop_color};" /> </td>`;
                num2pop++;
            }
        }
        gridHTML += '</tr>';
    } 

    gridHTML += '</table>';

    gridHTML += '</div>';
    // myDIV.innerHTML = gridHTML;

    rootDIV.innerHTML = gridHTML;


    rootDIV.addEventListener("click", (e) => {
        if (e.target.className == "button") {
            // insert sound effect here but before line 60 
            e.target.className = "button_active";
            if(!first_click){
                first_click_tstamp = e.timeStamp;
                first_click = true;
            }
            curr_pop_cnt++
            console.log("Pop #"+curr_pop_cnt + " of "+num2pop);
            last_click = curr_pop_cnt == num2pop ? true : false;
            if(last_click){
                last_click_tstamp = e.timeStamp;
                let time2complete_in_secs = (last_click_tstamp - first_click_tstamp) / 1000;
                console.log("CONGRATULATIONS!!! You POPPED all the spots for this pattern!")
                console.log("\n*** TIME TO COMPLETE: "+time2complete_in_secs+" seconds ***")
            }
            
            let audio = new Audio("popSound.mp3");
            audio.play();
            
        }
    });
}

export {setGrid, first_click, curr_pop_cnt, num2pop};
