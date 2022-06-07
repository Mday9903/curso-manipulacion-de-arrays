const elements = ["Fire", "Air", "Water"];

//Sin utilizar join():
let rtaFinal = '';
const separator = '--';
const lastElement = elements[elements.length-1];
for (let index = 0; index < elements.length-1; index++) {
        const element = elements[index];
        rtaFinal = rtaFinal + element + separator
}
rtaFinal = rtaFinal + lastElement;/*Esta línea es para evitar que el 
separador salga luego del último elemento.*/

console.log('For',rtaFinal);//For Fire--Air--Water


//Utilizando join():
const rta = elements.join('--');
console.log('Join',rta);//Join Fire--Air--Water

//

const title = 'Curso de manipulación de arrays';

const conSplit = title.split(' ');
console.log(conSplit);
//[ 'Curso', 'de', 'manipulación', 'de', 'arrays' ]


const urlFinal = title.split(' ').join('-').toLowerCase();
console.log(urlFinal);//curso-de-manipulación-de-arrays

