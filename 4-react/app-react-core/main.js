// MANIPULACION DEL DOM

const root = document.getElementById("div-root");
// const newElement = document.createElement("div");

// newElement.textContent = "Hello world DOM ";
// newElement.className = "container";

// root.appendChild(newElement);

/** MANIPULACION CON REACT */

const elementReact = React.createElement("span", {}, "Hello world con REACT");

// React.createElement( type = HTML, { AGREGANDO NODO HIJO}, 'text' || null  )
const secondElementReact = React.createElement("div", {
  children: React.createElement(
    "h5",
    {
      children: React.createElement(
        "span",
        {
          children: React.createElement(),
          className: "style-span",
        },
        "este es el span"
      ),
      className: "h5-span",
    },
    "Este es un <H5> dentro de un div"
  ),
});

ReactDOM.render(secondElementReact, root);

// NO TIENE JSX
