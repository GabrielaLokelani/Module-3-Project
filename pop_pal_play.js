import {game_sound, game_vibrate} from "./pop_pal_options.js"

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

    let gridHTML = '<div class="game">';

    gridHTML += '<table class = "pop-it" >'

    curr_pop_cnt = 0;
    num2pop = 0;
    first_click = false;
    last_click = false;
    document.getElementById('mb_sound').style.display = "";
    document.getElementById('mb_vibrate').style.display = "";



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

    rootDIV.innerHTML = gridHTML;

    rootDIV.addEventListener("click", (e) => {
        if (e.target.className == "button") {
            e.target.className = "button_active";
            if(!first_click){
                first_click_tstamp = Date.now();
                first_click = true;
            }
            curr_pop_cnt++

            update_status_bar();
            update_status_bar_time();

            last_click = curr_pop_cnt == num2pop ? true : false;
            if(last_click){
                last_click_tstamp = Date.now();
                let time2complete_in_secs = (last_click_tstamp - first_click_tstamp) / 1000;
                let final_time = document.getElementById("curr_time_value")
                final_time.textContent = time2complete_in_secs.toFixed(2);
        
                first_click = false;
                last_click = false;
                curr_pop_cnt = 0;
                // Present the AWARD!!!!
                document.getElementById('game_options').style.display = "none";
                document.getElementById('game_status').style.display = "";
                document.getElementById('game_field').style.display = "none";
                document.getElementById('game_award').style.display = "";
                document.getElementById('game_about').style.display = "none";
                document.getElementById('mb_sound').style.display = "none";
                document.getElementById('mb_vibrate').style.display = "none";
                console.log("First: "+first_click_tstamp)
                console.log(" Last: "+last_click_tstamp)
      
            }
            if(game_sound) audio.play();
            if(game_vibrate) navigator.vibrate(100);
        }
    });

    update_status_bar();
}

function setup_game_status() {
    const statusDIV = document.getElementById("game_status");

    let statusBarDIV = document.createElement("div");

    const statusBarHTML = `
    <div class="status-nav">
    <a id="curr_pops" class="status_label">Current Pops: </a>
    <a id="curr_pops_val" class="status_value">0</a>
    <a id="num_to_pop" class="status_label"># to Pop: </a>
    <a id="num_to_pop_val" class="status_value">***</a>
    <a id="curr_time" class="status_label">Time (in seconds): </a>
    <a id="curr_time_value" class="status_value">0.00</a>
    <a id="sound_stat" class="status_label">Sound is: </a>
    <a id="sound_stat_value" class="status_value">ON</a>
    <a id="vibrate_stat" class="status_label">Vibrate is: </a>
    <a id="vibrate_stat_value" class="status_value">ON</a>
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
    let stat_sound = document.getElementById("sound_stat_value")
    stat_sound.textContent = game_sound ? "ON" : "OFF";
    let stat_vibrate = document.getElementById("vibrate_stat_value")
    stat_vibrate.textContent = game_vibrate ? "ON" : "OFF";


}

function update_status_bar_time() {
    let curr_tstamp = Date.now();
    if(first_click && !last_click){
        let stat_time = document.getElementById("curr_time_value")
        stat_time.textContent = ((Date.now() - first_click_tstamp)/1000).toFixed(2);
    }
}

export {setGrid, setup_game_status, update_status_bar, update_status_bar_time, first_click, curr_pop_cnt, num2pop, first_click_tstamp, last_click_tstamp};
