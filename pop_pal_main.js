
import {setGrid, setup_game_status, update_status_bar_time} from "./pop_pal_play.js"
import {pp_patterns_catalog} from "./pop_pal_data.js";
import {set_up_menu_bar, set_up_options, pp_pattern_sel_name, pp_pattern_sel_size, pp_pattern_sel_cat} from "./pop_pal_options.js"
import {pop_pal_pattern_small_heart, pop_pal_colors_small_heart} from "./pop_pal_patterns_shapes.js"
import {pop_pal_pattern_base_heart, pop_pal_colors_base_heart} from "./pop_pal_patterns_shapes.js"
import {pop_pal_pattern_large_heart, pop_pal_colors_large_heart} from "./pop_pal_patterns_shapes.js"
import {pop_pal_pattern_small_diamond, pop_pal_colors_small_diamond} from "./pop_pal_patterns_shapes.js"
import {pop_pal_pattern_base_diamond, pop_pal_colors_base_diamond} from "./pop_pal_patterns_shapes.js"
import {pop_pal_pattern_large_diamond, pop_pal_colors_large_diamond} from "./pop_pal_patterns_shapes.js"
import {pop_pal_pattern_small_square, pop_pal_colors_small_square} from "./pop_pal_patterns_shapes.js"
import {pop_pal_pattern_base_square, pop_pal_colors_base_square} from "./pop_pal_patterns_shapes.js"
import {pop_pal_pattern_large_square, pop_pal_colors_large_square} from "./pop_pal_patterns_shapes.js"
import {pop_pal_pattern_small_circle, pop_pal_colors_small_circle} from "./pop_pal_patterns_shapes.js"
import {pop_pal_pattern_base_circle, pop_pal_colors_base_circle} from "./pop_pal_patterns_shapes.js"
import {pop_pal_pattern_large_circle, pop_pal_colors_large_circle} from "./pop_pal_patterns_shapes.js"


let pattern = [];
let pattern_colors = [];

main()

function main() {
    set_up_menu_bar();
    game_options();
    setup_game_status();
    game_play();
    game_about();

    document.getElementById('game_options').style.display = "";
    document.getElementById('game_status').style.display = "none";
    document.getElementById('game_field').style.display = "none";
    document.getElementById('game_about').style.display = "none";

}

function about(){
    // Place JS code here to handle the About screen/view
}

function game_options() {
    set_up_options()
}

function game_play() {
    // eval(`import {pop_pal_pattern_${pp_pattern_sel_size}_${pp_pattern_sel_name}, pop_pal_colors_${pp_pattern_sel_size}_${pp_pattern_sel_name}} from "./pop_pal_patterns_${pp_pattern_sel_cat}.js`)
    window.setInterval(update_status_bar_time(), 100);
    eval(`pattern = pop_pal_pattern_${pp_pattern_sel_size}_${pp_pattern_sel_name}`);
    eval(`pattern_colors = pop_pal_colors_${pp_pattern_sel_size}_${pp_pattern_sel_name}`);
    let num_rows = pattern.length;
    let num_cols = pattern[0][0].length;
    setGrid(num_rows, num_cols, pattern, pattern_colors);
}

function game_start() {
    // Place code here to handle when the game starts up, i.e. at time equal to zero
}

function game_stop(){
    // Place code here to handle when the end of the game is detected.
}

function game_pause(){
    // Place code here to handle how the game handles needing to be paused.
}


function enable_sound(){
    // You know the deal
}

function disable_sound(){
    // Yeah...yeah...
}

function game_about() {
    const aboutDIV = document.getElementById('game_about');

    let aboutHTML = `<h1> ABOUT POP PAL </h1>
                     <p>POP PAL is a virtual version of the now popular "Pop-It" silicon figiting toys...popular among adults as well as kids. While it was our team member Nathan that brought the "Pop-It" toy to our attention, via his sister's kids, the real inspiration for creating the POP PAL was due to this <a href="https://www.youtube.com/watch?v=icO3YuuE1m0">video</a>. Our hope is this virtual version of the "Pop-It" toy will solve some of the problems outlined in the video and keep everyone in the family equally happy! ;-)</p>
                     
                     <h2><u>KU-FS-2021Q4-COHORT "MODULE 3" PROJECT TEAM:</u> <b>MaGaNaJe</b></h2>
                     <br>
                     <h3><b>MANUEL "MANNY" MURO</b> - PROJECT LEAD, ARCHITECT, DATA STRUCTURES & INTEGRATION</h3>
                     <h3><b>GABRIELA KADZIELAWA</b> - TEAM ROCK-STAR, CODE DEV & BLING-BLING LEAD</h3>
                     <h3><b>NATE WILKUS</b> - GAME CONCEPT, CODE DEV & DEV SUPPORT</h3>
                     <h3><b>JELKIN FERRAND</b> - GAME TESTING, CODE DEV & DEV SUPPORT</h3>
                     `

    aboutDIV.innerHTML = aboutHTML
}
export { game_play }