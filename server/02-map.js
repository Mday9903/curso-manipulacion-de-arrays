//Ejecutaremos una transformación usando el método map().

const letters = ['a','b','c'];

// Le agregaremos "++" a cada elemento:
//Sin usar map():

const newArray = [];
for (let index = 0; index < letters.length; index++) {
    const element = letters[index];
    newArray.push(element + '++');
};



// Con el método map():
const newArray = letters.map(item => item + '++');