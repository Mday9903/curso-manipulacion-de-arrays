const numbers = [1,30,39,29,10,13];

//Verificamos si todos los elementos son menores o iguales a 40.
//Sin utilizar every():
let rta = true;
for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    if (element >= 40) {
        rta = false
    }
}
console.log('for', rta);

//Utilizando every():
const rta2 = numbers.every(item => item <= 40)
console.log('rta2', rta2);


//RETO

const team = [
  {
    name: "Nicolas",
    age: 12,
  },
  {
    name: "Andrea",
    age: 8,
  },
  {
    name: "Zulema",
    age: 2,
  },
  {
    name: "Santiago",
    age: 18,
  },
];

const evaluation = (team) => {
    if (team.every(item => item.age < 15)){
        return "Todos son menores a 15 años"
    } else {
        return "Algunos son mayores de 15 años"
    }
}

console.log(evaluation(team));
