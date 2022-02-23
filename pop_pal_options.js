import {pp_patterns_catalog} from "./pop_pal_data.js";
import {game_play} from "./pop_pal_main.js"

let pp_pattern_sel_name = "diamond";
let pp_pattern_sel_size = "small";
let pp_pattern_sel_cat = "shapes";

function set_up_options() {
 
  const optionsHTML = `
  <div type="container-fluid" style="text-align: center"> 
      <p>Select Your Category</p>
        <select id="select_your_category" name="select_your_category"></select>
      <p>Select Your Pattern</p>
        <select id="select_your_pattern" name="select_your_pattern"></select>
      <p>Select Your Size</p>
        <select id="select_your_pp_size" name="select_your_pp_size"></select>
      <p>Select Your Award Theme</p>
        <select id="select_your_award_theme" name="select_your_award_theme"></select>
  </div>`
  
  let pp_pat_categories = Object.keys(pp_patterns_catalog);
    
  let optionsDIV = document.createElement("div");
  optionsDIV.innerHTML = optionsHTML;
  
  const rootDIV = document.getElementById("game_options")
  rootDIV.appendChild(optionsDIV);
  
  // populate the category selection options
  const catSEL = document.getElementById("select_your_category");
  for (let catOpt of pp_pat_categories) {
    let tempOpt = document.createElement("option")
    tempOpt.value = catOpt;
    tempOpt.text = catOpt;
    catSEL.appendChild(tempOpt);
  }

  // now take care of selecting pattern option
  let patOptions = pp_patterns_catalog[catSEL.value];
  let pp_pat_selections = Object.keys(patOptions);

  const patSEL = document.getElementById("select_your_pattern");
  for (let patOpt of pp_pat_selections) {
    let tempOpt = document.createElement("option")
    tempOpt.value = patOpt;
    tempOpt.text = patOpt;
    patSEL.appendChild(tempOpt);
  }
  // now take care of selecting size option
  let patSubOptions = patOptions[patSEL.value];
  let sizeArr = [];
  for ( let psOpt of patSubOptions) {
    // console.log(psOpt.size);
    if (psOpt.size != null) {
      sizeArr.push(psOpt.size);
    }
  }

  const sizeSEL = document.getElementById("select_your_pp_size");
  for (let sizeOpt of sizeArr) {
    let tempOpt = document.createElement("option")
    tempOpt.value = sizeOpt;
    tempOpt.text = sizeOpt;
    sizeSEL.appendChild(tempOpt);
  }

  catSEL.addEventListener("click", e => {
    pp_pattern_sel_cat = e.target.value;
  })  
  patSEL.addEventListener("change", e => {
    pp_pattern_sel_name = e.target.value;
  })  
  sizeSEL.addEventListener("change", e => {
    pp_pattern_sel_size = e.target.value;
  })  

}
//   // select prize theme
  
function set_up_menu_bar() {
  const menuDIV = document.getElementById("menu_options");

  let menuBarDIV = document.createElement("div");

  let prev_e = ""; // Need to track the previous event to de-activate it when a new one is selected.

  const menuBarHTML = `
  <div class="topnav">
  <a id="mb_options" class="menu">Options</a>
  <a id="mb_start" class="menu">Start</a>
  <a id="mb_about" class="menu">About</a>
</div>
  `
  menuBarDIV.innerHTML = menuBarHTML;

  menuBarDIV.addEventListener("click", e => {
    if(e.target.className == "menu") {
      e.target.className = "menu-active";
      if(prev_e != ""){
        prev_e.target.className = "menu";
      }
      prev_e = e;
      switch (e.target.id) {
        case "mb_options":
          document.getElementById('game_field').style.display = "none";
          document.getElementById('game_options').style.display = "";

          break;
      
        case "mb_start":
          document.getElementById('game_field').style.display = "";
          document.getElementById('game_options').style.display = "none";
          game_play();
          break;
        default:
          break;
      }
    }
  })

  menuDIV.appendChild(menuBarDIV);
// __________________________________________________________________
  // fetch('https://type.fit/api/quotes')
  //   //.then(res => res.json())
  //   .then(res => {
  //       if (res.ok) {
  //           console.log('SUCCESS');
  //       } else {
  //           console.log("Not Successful");
  //       }
  //   })
  //   .then(data => console.log(data))
  //   .catch(error => console.log('ERROR'))

  const awardsDIV = document.getElementById('game_award');
  console.log(awardsDIV);
  awardsDIV.innerHTML = awardsDIV;

  fetch("https://type.fit/api/quotes")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    console.log(data);
    console.log(Object.keys(data[0]));
    // console.log(Object.keys.text[0]);
    let api_1 = Object.keys(data[0]); 
    console.log(api_1); 
  });





}
export {set_up_options, set_up_menu_bar, pp_pattern_sel_name, pp_pattern_sel_size, pp_pattern_sel_cat} 