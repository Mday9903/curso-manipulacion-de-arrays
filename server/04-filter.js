const words = ['spray', 'limit', 'elite', 'exuberant'];


//Sin usar métodos específicos:
const newArray = [];
for (let index = 0; index < words.length; index++) {
    const item = words[index];
    if (item.length >= 6){
        newArray.push(item);
    }
}
console.log("newArray", newArray);//newArray [ 'exuberant' ]
console.log("original", words);
//original [ 'spray', 'limit', 'elite', 'exuberant' ]



//Usando filter():

const rta = words.filter(item =>item.length >= 6);

console.log("rta", rta);//rta [ 'exuberant' ]
console.log("original", words);
//original [ 'spray', 'limit', 'elite', 'exuberant' ]




//



const orders = [
    {
      customerName: "Nicolas",
      total: 60,
      delivered: true,
    },
    {
      customerName: "Zulema",
      total: 120,
      delivered: false,
    },
    {
      customerName: "Santiago",
      total: 180,
      delivered: true,
    },
    {
      customerName: "Valentina",
      total: 240,
      delivered: true,
    },
    {
      customerName: "Nicolas",
      total: 2214,
      delivered: false,
    },
  ];

//

  const rta3 = orders.filter(item => item.delivered && item.total >= 100);

  console.log("rta3",rta3);



//


const search = (query) => {
    return orders.filter(item => {
        return item.customerName.includes(query);
    });
};

console.log(search('nico'));






arrayDesafio = ['amor', 'sol', 'piedra', 'día'];


const solucion = arrayDesafio.filter(item => item.length >= 4);

console.log('Solución:',solucion)