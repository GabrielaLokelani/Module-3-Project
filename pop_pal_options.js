// // Issue 21, options script and testing
import {pp_patterns_catalog, pp_pattern_sel_name, pp_pattern_sel_size, pp_pattern_sel_cat} from "./pop_pal_data.js";

// const award_theme = "";
// const pattern_selection = "";
// const sound_effects = "";
// const sound_sequence = "";
// const vibrate = "";

//________________________________________________
function set_up_options() {

console.log("# of categories " +  pp_patterns_catalog.length);

const optionsHTML = `
<div> 
    <select id="select_your_pattern" name="select_your_pattern">
      <option value="">pattern</option>
    </select>
    <p>Select Your Pop Pal Size</p>
    <select id="select_your_pp_size" name="select_your_pp_size">
      <option value="">size</option>
    </select>
    <p>Select Your Award Theme</p>
    <select id="select_your_award_theme" name="select_your_award_theme">
      <option value="">prize</option>
    </select>
</div>
`


//____________________________________________________________________
// const optionsHTML = `
// <br>
// <div class="dropdown">
// <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
//   Gameplay Options
// </button>   
// <select id="select_your_pattern" name="select_your_pattern">Select Your Pattern
//   <option value=""></option>
// </select>
// <select id="select_your_pp_size" name="select_your_pp_size">Select Your Pop Pal Size
//   <option value=""></option>
// </select>
// <select id="select_your_award_theme" name="select_your_award_theme">Select Your Award Theme
//   <option value=""></option>
// </select>
// </div>
// `

// const optionsHTML = `
// <br>
// <div class="dropdown">
// <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
//   Gameplay Options
// </button>   
// <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
//   <li><a class="dropdown-item" href="#">Select Your Pattern</a></li>
//   <li><a class="dropdown-item" href="#">Select Your Pop Pal Size</a></li>
//   <li><a class="dropdown-item" href="#">Select Your Award Theme</a></li>
// </ul>
// </div>
// `

let optionsDIV = document.createElement("div");
optionsDIV.innerHTML = optionsHTML;

const rootDIV = document.getElementById("root")
rootDIV.appendChild(optionsDIV);
}

// //__________________________________________________
// select pattern shape and size with reaction

// if (pp_patterns.name === heart) {
//     if (pp_patterns.size === small) {
      
//     } else if (pp_patterns.size === base) {
  
//     } else {}
//   }
//   if (pp_patterns.name === diamond) {
//     if (pp_patterns.size === small) {
      
//     } else if (pp_patterns.size === base) {
  
//     } else {}
//   }
  
//   //_____________________________________________
//   // select prize theme
  
//   const prize_theme = "";
  
//   fetch('http://example.com/movies.json')
//     .then(response => response.json())
//     .then(data => console.log(data));

export {set_up_options} 