//Escribir un programa que muestre en pantalla los números del 1 al 100,
//sustituyendo los múltiplos de 3 por la palabra “fizz”,
//los múltiplos de 5 por “buzz” y los múltiplos de ambos, es decir,
//los múltiplos de 3 y 5 (o de 15), por la palabra “fizzbuzz”.

export default function fizzbuzz(number) {
  if (typeof number !== "number" || Number.isNaN(number))
    throw new Error("parameter provider must be a number");

  const multiplies = { 3: "fizz", 5: "buzz" };

  let output = "";

  Object.entries(multiplies).forEach(([multiplier, word]) => {
    if (number % multiplier === 0) output += word;
  });

  return output === "" ? number : output;
}

// function main() {
//     Array.from({length: 100},(_,i) =>{
//         const a = i+1
//         console.log(fizzbuzz(a));
//     })
// }

// main();
