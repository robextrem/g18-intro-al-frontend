const informacionCelular = (year, model) => {
  return `El año del cel es ${year} y el modelo es ${model}`;
};

console.log(informacionCelular(2022, "iphone"));

console.log(informacionCelular(undefined, "Samsung"));
