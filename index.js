const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
  },

  {
    id: 3,
    nombre: "pizza Napolitana",
    precio: 1350,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas"],
  },

  {
    id: 4,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
  },

  {
    id: 5,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas", "Cebolla"],
  },

  {
    id: 6,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
  },
];

console.log("Ejercicio A: Estas son las Pizzas con ID Impar:")
let i=1;
pizzas.forEach ((elemento) =>{
if (elemento.id % 2!==0)
console.log (`${i++}. ${elemento.nombre} (ID: ${elemento.id})`);
})


console.log("");
console.log("Ejercicio B: Hay alguna pizza que salga menos de $600?")
i=1;
pizzas.forEach ((elemento) => {
if (elemento.precio < 600)
{
  if (i===1) console.log("Si, las siguentes:")
  console.log (`${i++}. La ${elemento.nombre} sale $${elemento.precio}`)
}
})
if (i===1)
console.log("No hay ninguna pizza que salga menos de 600")


console.log("");
console.log("Ejercicio C: Enumerar todas la pizzas con el precio")
pizzas.forEach ((elemento, index) => console.log (`${index+1}. La ${elemento.nombre} sale $${elemento.precio}`))


console.log("");
console.log("Ejercicio D: Enumerar todos los ingredientes de cada pizza")
pizzas.forEach ((elemento,index) => {
console.log (`${index+1}. La ${elemento.nombre} tiene los siguientes ingredientes:`)
elemento.ingredientes.forEach((el, ind) =>console.log (`\t${ind+1}. ${el}`))
})



 



