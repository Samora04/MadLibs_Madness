/* Given the 'id' attribute of a form element, this will return the value entered by the user into that form element. */
function formValue(id) {
  // this initializes "formElement" and sets it get the element(with the id)
  let formElement = document.getElementById(id);

  //if the element is null then it will return that the id wasn't found
  // if element isn't null, it initializes value(container) to the value of the form element
  if (formElement === null) {
    return `[${id} NOT FOUND]`;
  }

  let value = formElement.value;

  //the form element value trims all leading and trailing whitespace and checks if the value is an empty string(=== is a comparison operator)
  // if the previous statement is true, itll return that elements placeholder
  //if the condition fails, it'll use the element's id to return its value
  if (formElement.value.trim() === "") {
    return `[${formElement.placeholder}]`;
  }

  return document.getElementById(id).value;
}

/* Given the 'id' of an HTML element and a 'className', this will add that class name to the HTML element with the specified id. */
function addClassToElement(id, className) {
  let element = document.getElementById(id);
  element.classList.add(className);
}

/* The code here will be executed each time the Generate button is clicked. */
function generate() {
  //Retrieve form values
  let relative = formValue("relative");
  let adjective1 = formValue("adjective-1");
  let adjective2 = formValue("adjective-2");
  let adjective3 = formValue("adjective-3");
  let famousPerson = formValue("famous-person");
  let noun = formValue("noun");
  let dessert = formValue("dessert");
  let petName = formValue("pet-name");

  // Insert form values into madlib
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
  // Output madlib to player
  document.getElementById("output").innerHTML = madLib;
  addClassToElement("container", "generated");
}
