import {pp_patterns_catalog} from "./pop_pal_data.js";
import {game_play} from "./pop_pal_main.js";
//import {award_theme_selection} from "./pop_pal_prizeAPIs.js"

let pp_pattern_sel_name = "diamond";
let pp_pattern_sel_size = "small";
let pp_pattern_sel_cat = "shapes";
let pp_award_sel_theme = "motivation";

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
      <select id="select_your_award_theme" name="select_your_award_theme">
          <option id="motivation">motivation</option>
          <option id="space">space</option>
          <option id="cats">cats</option>
        </select>
  </div>`
  
  let pp_pat_categories = Object.keys(pp_patterns_catalog);
    
  let optionsDIV = document.createElement("div");
  optionsDIV.innerHTML = optionsHTML;
  
  const rootDIV = document.getElementById("game_options")
  rootDIV.appendChild(optionsDIV);

  const awardSEL = document.getElementById("select_your_award_theme");
  
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
    console.log(psOpt.size);
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
  patSEL.addEventListener("click", e => {
    pp_pattern_sel_name = e.target.value;
  })  
  sizeSEL.addEventListener("click", e => {
    pp_pattern_sel_size = e.target.value;
  }) 
  awardSEL.addEventListener("click", e => {
    pp_award_sel_theme = e.target.value;
  })
// APIs  ________________________________________________________________

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

  //let award_theme_selection = {motivation, space, cats};

  const awardsDIV = document.getElementById('game_award');
  console.log(awardsDIV);
  awardsDIV.innerHTML = "";

  if (pp_award_sel_theme === "motivation") {

    fetch("https://type.fit/api/quotes")
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      //console.log(data);
      const api_motivation = Object(data);
      // console.log(Object.values(data[0]));
      // console.log(api_motivation);

      api_motivation.forEach((quote) => {
        console.log(quote.text);
        console.log(quote.author);
        pp_award_sel_theme = api_motivation;  

      //   let tempQuoteHTML = `
      //   <div class="container-fluid" class="border-start rounded-3 border border-2">
      //     <div class="shadow p-3 mb-5 bg-body rounded text-center">Regular shadow
      //       <h2 style="text-align: center">${quote.text}</h2>
      //       <h4 style="text-align: center>${quote.author}</h4>
      //     </div
      //   </div>`

      //   awardsDIV.innerHTML += tempQuoteHTML;
      });
    });

  } else if (pp_award_sel_theme === "space") {
    fetch("https://images-api.nasa.gov/5akgAwJqTYMb0w4loSNz2Swxda8NERKSonOvOWQx/search") // insert space api here
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      console.log(data);
      //const api_space = data.data;
      //console.log(api_space); 
      pp_award_sel_theme = api_space;      
    });

  } 
  else if (pp_award_sel_theme === "cats") {
    fetch("") // insert cat api here
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      console.log(data);
      const api_cats = data.data;
      console.log(api_cats);
      pp_award_sel_theme = api_cats;  
    });
  };
 
};

// Menu Bar ___________________________________________________________
  
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
}
export {set_up_options, set_up_menu_bar, pp_pattern_sel_name, pp_pattern_sel_size, pp_pattern_sel_cat, pp_award_sel_theme}; 