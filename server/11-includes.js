const pets = ['cat', 'dog', 'bat'];

let includeInArray = false;
for (let index = 0; index < pets.length; index++) {
    const element = pets[index];
    if(element === 'dog'){
        includeInArray = true;
    break;
    }
}

console.log('For',includeInArray);//For true

/*El método includes() no acepta una arrow function como parámetro,
sino que directamente le enviamos el elemento que estamos buscando */

const rta = pets.includes('dog');

console.log('Includes',rta);//Includes true




