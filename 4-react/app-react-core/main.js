// MANIPULACION DEL DOM

const root = document.getElementById("div-root");
const newElement = document.createElement("div");

newElement.textContent = "Hello world DOM ";
newElement.className = "container";

root.appendChild(newElement);
