// Issue 21, options script and testing

const award_theme = "";
const pattern_selection = "";
const sound_effects = "";
const sound_sequence = "";
const vibrate = "";

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

const rootDIV = document.getElementById("root")