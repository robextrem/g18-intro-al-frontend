const informacionCelular = (year, model) => {
  return `El año del cel es ${year} y el modelo es ${model}`;
};

console.log(informacionCelular(2022, "iphone"));
console.log(informacionCelular(undefined, "Samsung"));

const arrayExample = ["variableSeteadora", 26, false, { age: 12 }];

// destructuring array

const [valor1, valor2] = arrayExample;

console.log("valor en indice 0", valor1);
console.log("valor en indice 1", valor2);
