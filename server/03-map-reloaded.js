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
  ];

  console.log("original", orders);
  const rta = orders.map(item => item.total);
  console.log("rta", rta);


  
  //A continuación hacemos una copia del array principal "orders" con el método map
  //para agregarle una nueva propiedad "tax" pero en este caso
  //Terminamos modificando el array original y no es lo que queremos.
  //Esto sucede debido a que al copiar de esta manera estamos haciendo una referencia en memoria
  //y no estamos generando un nuevo array como tal.
  
  // const rta2 = orders.map((item) => {
  //   item.tax = 0.19;
  //   return item;
  // });
  // console.log("rta2", rta2);
  // console.log("original", orders);

  

  //Ahora haremos la copia solventando este problema:

  const rta3 = orders.map(item => {
    return {
      ...item,
      tax: 0.19,
    };
  });
  console.log("rta3", rta3);
  console.log("original", orders);


  




  