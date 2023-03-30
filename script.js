// define an array to hold the objects
let objects = [];

// define a constructor function for objects
function makeObject(name, color, size) {
return {name,color,size}
}

// define a function to render the objects
function renderObjects() {
  let objectsContainer = document.getElementById("objects-container");
  objectsContainer.innerHTML = "";
  objects.forEach(function(object) {
    let objectCard = document.createElement("div");
    objectCard.classList.add("object-card");
    objectCard.innerHTML = `
      <h3>${object.name}</h3>
      <p>Color: ${object.color}</p>
      <p>Size: ${object.size}</p>
    `;
    objectsContainer.appendChild(objectCard);
  });
}

// define a function to handle the form submission
function handleFormSubmit(event) {
  event.preventDefault();
  let nameInput = document.getElementById("name-input");
  let colorInput = document.getElementById("color-input");
  let sizeInput = document.getElementById("size-input");
  let name = nameInput.value;
  let color = colorInput.value;
  let size = sizeInput.value;
  let object = makeObject(name, color, size);
  objects.push(object);
  nameInput.value = "";
  colorInput.value = "";
  sizeInput.value = "";
  renderObjects();
}

// add an event listener to the form submit button
let form = document.getElementById("add-object-form");
form.addEventListener("submit", handleFormSubmit);

// render the initial objects
renderObjects();
