import {data} from "./data.js";

// console.log(data)


// Add contact form

const formHTML = `

<br>
<div>
   <form id = "addForm">
      <input 
         type="text" 
         name="fName"
         placeholder="Please enter your first name..."
         />
      <input 
         type="text"
         name="lName"
         placeholder="Please enter your last name..."
         />
      <input 
         type="text"
         name="email"
         placeholder="Email"
         />
      <input 
         type="text"
         name="avatar"
         placeholder="Photo URL"
         />
      <button type="submit">Add Contact</button>
   </form>
</div>

`;

let formDIV = document.createElement("div");
formDIV.innerHTML = formHTML;
// let formBreak = document.createElement("br");
// let formElem = document.createElement("form");
// formElem.id = "addForm";
// let fNameInput = document.createElement("input");
// fNameInput.type = "text";
// fNameInput.name = "fName";
// fNameInput.placeholder = "Please enter your first name...";
// let lNameInput = document.createElement("input");
// lNameInput.type = "text";
// lNameInput.name = "lName";
// lNameInput.placeholder = "Please enter your last name...";
// let emailInput = document.createElement("input");
// emailInput.type = "text";
// emailInput.name = "email";
// emailInput.placeholder = "Email";
// let avatarInput = document.createElement("input");
// avatarInput.type = "text";
// avatarInput.name = "avatar";
// avatarInput.placeholder = "Photo URL";
// let formButton = document.createElement("button");
// formButton.type = "submit";
// formButton.textContent = "Add Contact";
// // Stack up the form now
// // formElem.appendChild(formBreak);
// formElem.appendChild(fNameInput);
// formElem.appendChild(lNameInput);
// formElem.appendChild(emailInput);
// formElem.appendChild(avatarInput);
// formElem.appendChild(formButton);

// formDIV.appendChild(formBreak);
// formDIV.appendChild(formElem);
// formDIV.appendChild(formBreak);

const rootDIV = document.getElementById('root');

// Create and H1
const h1Tag = document.createElement("h1");
h1Tag.textContent = "Contacts Page | DOM Practice";
rootDIV.appendChild(h1Tag); // adds the tag to the root div 

// Create Header with paragraph underneath the H1
const headerTag = document.createElement("header");
const pTag = document.createElement("p");

pTag.textContent = "Puppy kitty ipsum dolor sit good dog foot stick canary. Teeth Mittens grooming vaccine walk swimming nest good boy furry tongue heel furry treats fish. Cage run fast kitten dinnertime ball run foot park fleas throw house train licks stick dinnertime window. Yawn litter fish yawn toy pet gate throw Buddy kitty wag tail ball groom crate ferret heel wet nose Rover toys pet supplies."

// Put the header in the root div
headerTag.appendChild(pTag);
rootDIV.appendChild(headerTag);

// Create our Grid container, controls presentation of CSS
let contactsDIV = document.createElement("div");
contactsDIV.className = "grid-container";
contactsDIV.id = "contactsContainer";

// Loop over array of Data
for (const person of data) {
   // console.log(person.first_name);
   const tempDiv = `<div class="person"> 
   <img src="${person.avatar}" >
   <p>Name: ${person.first_name} ${person.last_name}</p>
   <p>Email: ${person.email}</p>
   <button>Delete</button>
   </div>`;
   contactsDIV.innerHTML += tempDiv;
}

// rootDIV.innerHTML += formHTML;


// rootDIV.appendChild(formDIV);
rootDIV.appendChild(contactsDIV);
rootDIV.appendChild(formDIV);

// rootDIV.innerHTML += contactsDIV;
// console.log(rootDIV.innerHTML)


// rootDIV.innerHTML += formHTML;
// rootDIV.innerHTML += contactsDIV;

//add Grid to the DOM
// rootDIV.appendChild(contactsDIV);
let mo_event = ""
// Hover on mouse over
// let contactsDIV = document.getElementById("contactsContainer")
contactsDIV.addEventListener("mouseover", (event) => {
   if (event.target.tagName == "DIV" &&
       event.target.className == "person" ||
       event.target.parentNode.tagName == "DIV" &&
       event.target.parentNode.className == "person"

       ) {
          if(mo_event != "" && event.target.parentNode.className != "person"){
            mo_event.target.style.backgroundColor = "";
         }
         if(event.target.parentNode.className == "person") {
            event.target.parentNode.style.backgroundColor = "coral";
         }
         if(event.target.className == "person"){
             event.target.style.backgroundColor = "coral";
             mo_event = event;
          }
      } 
   // console.log("M_OVER: ",event.target.tagName, event.target.className, " <= ", event.target.parentNode.tagName, event.target.parentNode.className)
});
contactsDIV.addEventListener("mouseout", (event) => {
   if (
      event.target.tagName == "DIV" &&
      event.target.className == "person" 
      ) {
      mo_event.target.style.backgroundColor = "";
   }
   // console.log("M_OUT: ",event.target.tagName, event.target.className, " <= ", event.target.parentNode.tagName, event.target.parentNode.className)

});

// Delete single contact using button
contactsDIV.addEventListener("click", (e) => {
   if (e.target.tagName == "BUTTON") {
      console.log("Delete button was clicked!", e.target);
      e.target.parentNode.remove(); // remove @ the parent element
   } 
});

// adds the form to the webpage
// rootDIV.innerHTML += formHTML;

//add mouse Events to the DOM
// rootDIV.appendChild(contactsDIV);

// adds the form to the webpage
// rootDIV.innerHTML += formHTML;
// rootDIV.appendChild(formDIV);

//add mouse Events to the DOM
// rootDIV.appendChild(contactsDIV);

// console.log(document.textContent)

// console.log(rootDIV)

let formListener = document.getElementById("addForm");

formListener.addEventListener("submit", (e) => {
   e.preventDefault();
   let fName = e.target.elements["fName"].value;
   let lName = e.target.elements["lName"].value;
   let email = e.target.elements["email"].value;
   let avatar = e.target.elements["avatar"].value;

   // let contactsElement = document.getElementById("contactsContainer");
   // console.log(contactsElement)

   const tempDiv = `<div class="person"> 
                     <img src="${avatar}" >
                     <p>Name: ${fName} ${lName}</p>
                     <p>Email: ${email}</p>
                     <button>Delete</button>
                  </div>`;

                  contactsDIV.innerHTML += tempDiv;
                  console.log(tempDiv, contactsDIV.innerHTML) }
);

rootDIV.appendChild(formDIV);
console.log(rootDIV.innerHTML)
