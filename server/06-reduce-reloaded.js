const items = [1, 3, 2, 3];

const rta = items.reduce((obj, item) => {
    if (!obj[item]) {
        obj[item] = 1;
    } else {
        obj[item] = obj[item] + 1;
    }
    return obj;
}, {});

console.log(rta); //{ '1': 1, '2': 1, '3': 2 }

const data = [
  {
    name: "Nicolas",
    level: "low",
  },
  {
    name: "Andrea",
    level: "medium",
  },
  {
    name: "Zulema",
    level: "hight",
  },
  {
    name: "Santiago",
    level: "low",
  },
  {
    name: "Valentina",
    level: "medium",
  },
  {
    name: "Lucia",
    level: "hight",
  },
];

const rta1 = data
.map(item => item.level)
.reduce((obj, item) => {
    if (!obj[item]) {
        obj[item] = 1;
    } else {
        obj[item] = obj[item] + 1;
    }
    return obj;
}, {});

console.log(rta1); //{ low: 2, medium: 2, hight: 2 }





//RETO (utilizando unicamente filter()):

const array = [10,2,3,4,5,6,7,8,10,9,2,5,6,10,3,4,8,5,5,6,5,2,1,9,10,7,4];

let objAcum = {
    "1-5":0,
    "6-8":0,
    "9-10":0
}

objAcum["1-5"] = array.filter(element => 1 <= element && element <= 5).length;
objAcum["6-8"] = array.filter(element => 6 <= element && element <= 8).length;
objAcum['9-10'] = array.filter(element => 9 <= element && element <= 10).length;

console.log(objAcum);




//RETO (utilizando reduce()):

const array1 = [10,2,3,4,5,6,7,8,10,9,2,5,6,10,3,4,8,5,5,6,5,2,1,9,10,7,4];

const acumulation = array1.reduce((obj,item) => {
    // console.log("antes",obj);
    if (item >= 1 && item <= 5){
        // console.log("despues",obj);
        !obj["1-5"]? obj["1-5"] = 1 : obj["1-5"]++
    } else if (item >= 6 && item <= 8) { 
        !obj["6-8"]? obj["6-8"] = 1 : obj["6-8"]++
    } else if (item >= 9 && item <= 10){
        !obj["9-10"]? obj["9-10"] = 1 : obj["9-10"]++
    }
    return obj;

},
{"1-5":0,
"6-8":0,
"9-10":0 });


console.log(acumulation);

