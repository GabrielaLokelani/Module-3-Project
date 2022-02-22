
import {setGrid} from "./pop_pal_play.js"
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


let pattern = pop_pal_pattern_small_heart;
let pattern_colors = pop_pal_colors_small_heart;
// let pattern = pop_pal_pattern_base_heart;
// let pattern_colors = pop_pal_colors_base_heart;
// let pattern = pop_pal_pattern_large_heart;
// let pattern_colors = pop_pal_colors_large_heart;
// let pattern = pop_pal_pattern_small_circle;
// let pattern_colors = pop_pal_colors_small_circle;
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
// let pattern = pop_pal_pattern_small_diamond;
// let pattern_colors = pop_pal_colors_small_diamond;
// let pattern = pop_pal_pattern_base_diamond;
// let pattern_colors = pop_pal_colors_base_diamond;
// let pattern = pop_pal_pattern_large_diamond;
// let pattern_colors = pop_pal_colors_large_diamond;

main()

function main() {
    set_up_menu_bar()
    game_options()
    game_play(pattern, pattern_colors);

    document.getElementById('game_field').style.display = "none";

}

function about(){
    // Place JS code here to handle the About screen/view
}

function game_options() {
    set_up_options()
}

function game_play() {
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

export { game_play }