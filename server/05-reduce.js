const totals = [1,2,3,4];

//Vamos a sumar todos lo elementos entre sí del array con reduce().

//Sin reduce():
let sum = 0;
for (let index = 0; index < totals.length; index++) {
    const element = totals[index];
    
    sum += element;
    
}

console.log('Sin reduce: ',sum);//Sin reduce:  10


//Con reduce():
let sum1 = 0;
sum1 = totals.reduce((sum1, element) => sum1 + element,0);

console.log('Con reduce: ',sum1);//Con reduce:  10
console.log('Array: ',totals);//Array:  [ 1, 2, 3, 4 ]








