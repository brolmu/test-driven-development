// Considera una lista/array de ovejas. Cada oveja tiene un nombre y un color.

// Haz una función que devuelva una lista con todas las ovejas que sean de color rojo
// y que además su nombre contenga tanto las letras n Y a, sin importar el orden, las mayúsculas o espacios.

export const noaSheeps = [
  { name: "Noa", color: "azul" },
  { name: "Noa", color: "rojo" },
  { name: "Noa", color: "rojo" },
  { name: "Noa", color: "rojo" },
  { name: "Noa", color: "rojo" },
  { name: "Noa", color: "verde" },
];

export const noSheeps = [
  { name: "Noa", color: "azul" },
  { name: "Noa", color: "rojo" },
  { name: "Euge", color: "rojo" },
  { name: "Noa", color: "rojo" },
  { name: "Noa", color: "rojo" },
  { name: "Noa", color: "verde" },
];

export const sheeps = [
  { name: "Noa", color: "azul" },
  { name: "Euge", color: "rojo" },
  { name: "Navidad", color: "rojo" },
  { name: "Ki Na Ma", color: "rojo" },
  { name: "AAAAAaaaaa", color: "rojo" },
  { name: "Nnnnnnnn", color: "rojo" },
];

export default function countSheeps(sheeps) {
  if (!Array.isArray(sheeps) || sheeps.length <= 0) throw new Error();

  let resultSheeps = new Array();

  sheeps.forEach((sheep) => {
    if (typeof sheep !== "object") throw new Error();
    if (sheep.color !== "rojo") return;
    if (!sheep.name.toLowerCase().includes("n")) return;
    if (!sheep.name.toLowerCase().includes("a")) return;
    resultSheeps.push(sheep);
  });

  return resultSheeps;
}
