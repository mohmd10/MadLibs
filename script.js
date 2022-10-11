/* Given the 'id' attribute of a form element, 
  this will return the value entered by the user 
  into that form element. */

function formValue(id) {
  // A collection of every element in a form is returned by the elements collection.
  let formElement = document.getElementById(id);
  
  // If the value is "null," it means that no value has been intentionally added, so if it is null then print 'NOT FOUND'
  if (formElement === null) {
    return `[${id} NOT FOUND]`;
  }

  let value = formElement.value;

	// Trim() creates a new string without changing the original string by removing whitespace from both ends of a string.
  if (formElement.value.trim() === "") {
    return `[${formElement.placeholder}]`;
  }

  return document.getElementById(id).value;
}

/* Given the 'id' of an HTML element and a 
   'className', this will add that class to
   the HTML element. */
function addClassToElement(id, className) {
  let element = document.getElementById(id);
  element.classList.add(className);
}

/* The code here will be executed each time
   that the form button is clicked. */
function generate() {
  let relative = formValue("relative");
  let adjective1 = formValue("adjective-1");
  let adjective2 = formValue("adjective-2");
  let adjective3 = formValue("adjective-3");
  let famousPerson = formValue("famous-person");
  let noun = formValue("noun");
  let dessert = formValue("dessert");
  let petName = formValue("pet-name");
  

  let madLib = `
  Dear ${relative},
  <br><br>
  I have been having a really ${adjective1} time 
  at camp. The counselour is ${adjective2} and 
  the food is ${adjective3}. I met ${famousPerson} 
  and we quickly became ${noun}. Talk soon!
  <br><br>
  Your ${dessert},
  <br>
  ${petName}
`;


 document.getElementById("output").innerHTML = madLib;
 addClassToElement("container", "generated");

  

  
}