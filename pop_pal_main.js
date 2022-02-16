
import {setGrid} from "./pop_pal_play.js"
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

// let pattern = pop_pal_pattern_small_heart;
// let pattern_colors = pop_pal_colors_small_heart;
// let pattern = pop_pal_pattern_base_heart;
// let pattern_colors = pop_pal_colors_base_heart;
// let pattern = pop_pal_pattern_large_heart;
// let pattern_colors = pop_pal_colors_large_heart;
let pattern = pop_pal_pattern_small_circle;
let pattern_colors = pop_pal_colors_small_circle;
// let pattern = pop_pal_pattern_base_circle;
// let pattern_colors = pop_pal_colors_base_circle;
// let pattern = pop_pal_pattern_large_circle;
// let pattern_colors = pop_pal_colors_large_circle;
// let pattern = pop_pal_pattern_small_square;
// let pattern_colors = pop_pal_colors_small_square;
// let pattern = pop_pal_pattern_base_square;
// let pattern_colors = pop_pal_colors_base_square;
// let pattern = pop_pal_pattern_large_square;
// let pattern_colors = pop_pal_colors_large_square;

main()

function main() {
    game_options()
    game_play(pattern, pattern_colors);
}

function about(){
    // Place JS code here to handle the About screen/view
}

function game_options() {
    const optionsHTML = `
    <br>
    <div class="dropdown">
    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
      Dropdown button
    </button>
    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
      <li><a class="dropdown-item" href="#">Action</a></li>
      <li><a class="dropdown-item" href="#">Another action</a></li>
      <li><a class="dropdown-item" href="#">Something else here</a></li>
    </ul>
    </div>
    `
    
    let optionsDIV = document.createElement("div");
    optionsDIV.innerHTML = optionsHTML;
    
    const rootDIV = document.getElementById("root");
    
    rootDIV.appendChild(optionsDIV);
}

function game_play(pat, pat_colors) {
    let num_rows = pat.length;
    let num_cols = pat[0][0].length;
    setGrid(num_rows, num_cols, pat, pat_colors);
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
