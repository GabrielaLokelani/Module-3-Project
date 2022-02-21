import {pp_patterns_catalog, pp_pattern_sel_name, pp_pattern_sel_size, pp_pattern_sel_cat} from "./pop_pal_data.js";


function set_up_options() {
  console.log(pp_patterns_catalog)
  console.log("# of categories " + Object.keys(pp_patterns_catalog).length);
 
  const optionsHTML = `
  <div> 
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
  
  const rootDIV = document.getElementById("root")
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
    console.log(patSEL[0]);
  }

  // // now take care of selecting size option
  // let sizeOptions = pp_patterns_catalog[catSEL.value[0].Object.keys[0]];
  // let pp_size_selections = Object.keys(Object.keys(sizeOptions));

  // console.log(sizeOptions);

  // const sizeSEL = document.getElementById("select_your_pp_size");
  // for (let sizeOpt of pp_size_selections) {
  //   let tempOpt = document.createElement("option")
  //   tempOpt.value = sizeOpt;
  //   tempOpt.text = sizeOpt;
  //   sizeSEL.appendChild(tempOpt);
  // }  
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