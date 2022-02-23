let first_click = false;
let first_click_tstamp = 0;
let last_click = false;
let last_click_tstamp = 0;

let num2pop = 0;
let curr_pop_cnt = 0;

let audio = new Audio("popSound.mp3");

function setGrid(numColums, numRows, pat, pat_colors) {

    let stat_time = document.getElementById("curr_time_value");
    stat_time.textContent = 0.00

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
                first_click_tstamp = Date.now();
                first_click = true;
            }
            curr_pop_cnt++

            update_status_bar();
            update_status_bar_time();

            console.log("Pop #"+curr_pop_cnt + " of "+num2pop);
            last_click = curr_pop_cnt == num2pop ? true : false;
            if(last_click){
                last_click_tstamp = Date.now();
                let time2complete_in_secs = (last_click_tstamp - first_click_tstamp) / 1000;
                console.log("CONGRATULATIONS!!! You POPPED all the spots for this pattern!")
                console.log("\n*** TIME TO COMPLETE: "+time2complete_in_secs+" seconds ***")
                first_click = false;
                last_click = false;
                curr_pop_cnt = 0;
            }
            
            audio.play();
            
            
        }
    });
    update_status_bar();
}

function setup_game_status() {
    const statusDIV = document.getElementById("game_status");

    let statusBarDIV = document.createElement("div");

    const statusBarHTML = `
    <div class="topnav">
    <a id="curr_pops" class="status_label">Current Pops: </a>
    <a id="curr_pops_val" class="status_value">0</a>
    <a id="num_to_pop" class="status_label"># to Pop: </a>
    <a id="num_to_pop_val" class="status_value">***</a>
    <a id="curr_time" class="status_label">Time (in seconds): </a>
    <a id="curr_time_value" class="status_value">0.00</a>
  </div>
    `

    statusBarDIV.innerHTML = statusBarHTML;

    statusDIV.appendChild(statusBarDIV);

}

function update_status_bar() {
    let stat_cur_pop = document.getElementById("curr_pops_val")
    stat_cur_pop.textContent = curr_pop_cnt;
    let stat_num_to_pop = document.getElementById("num_to_pop_val")
    stat_num_to_pop.textContent = num2pop;
}

function update_status_bar_time() {
    if(first_click && !last_click){
        let stat_time = document.getElementById("curr_time_value")
        stat_time.textContent = ((Date.now() - first_click_tstamp)/1000).toFixed(2);
    }
    console.log("Interval Time = "+Date.now())
}

export {setGrid, setup_game_status, update_status_bar_time, first_click, curr_pop_cnt, num2pop, first_click_tstamp};
