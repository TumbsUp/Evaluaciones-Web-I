var gunter = {
    name: "Gunter",
    origin: "Adventure Time",
    canFly: false,
    sayHello: function () {
    console.log("QUACK!!!");
    }
};
var ramon = {
    name: "Ramón",
    origin: "Happy Feet",
    canFly: true,
    sayHello: function () {
    console.log("Estoy encantado de conocerle.");
    }
};
var fred = {
    name: "Fred",
    origin: "Sitting Ducks",
    canFly: false,
    sayHello: function () {
    console.log("Hi there!");
    }
}; 

//I.ARRAY QUE CONTIENE A LOS PINGüINOS
const pinguins = [
    {
        name: "Gunter",
        origin: "Adventure Time",
        canFly: false,
        sayHello: function () {
        console.log("QUACK!!!");
        }
    },
    {
        name: "Ramón",
        origin: "Happy Feet",
        canFly: true,
        sayHello: function () {
        console.log("Estoy encantado de conocerle.");
        }
    },
    {
        name: "Fred",
        origin: "Sitting Ducks",
        canFly: false,
        sayHello: function () {
        console.log("Hi there!");
        }
    }
];

//II.CICLO QUE DEVUELVE LOS NOMBRES DE LOS PINGUINOS
const results = pinguins.map((penguin, index)=>
    {
        return{
            nombre: penguin.name
        }
    }
)
console.log(results);

//III.IMPRIME EL TAMAÑO DE LA MATRIZ
let tam=(pinguins.length)
const mensaje = `El tamaño de la matriz es: ${tam}`
console.log(mensaje)

//IV.AGREGAR NUEVA PROPIEDAD A CADA PINGUINO 
for (let i = 0; i < pinguins.length; i++) {
    pinguins[i].numberOfFeet = Math.floor(Math.random() * 5 ) + 1;
}

//V.IMPRIMIR MENSAJE EN BASE A SI PUEDEN VOLAR O NO
for (let i = 0; i < pinguins.length; i++) {
    if(pinguins[i].canFly){
        const mensj1 = `${pinguins[i].name} puede volar!`
        console.log(mensj1);
    }
}


//VI.CREAR ARRAY QUE DEVUELVA LOS PINGUINOS CON MÁS DE 2 PIES
const MSJ4= pinguins.filter(x=>x.numberOfFeet>2)

console.log(MSJ4);


//VII. AGREGAR PROPIEDAD DE FAVORITE FOODS COMO MATRIZ DE TRES CADENAS
for (let i = 0; i < pinguins.length; i++) {
    pinguins[0].favoriteFoods = ['Manzana', 'Banana', 'Pescado'];
    pinguins[1].favoriteFoods = ['Pie', 'Chuleta', 'Pera'];
    pinguins[2].favoriteFoods = ['Piña', 'Mango', 'granola'];
}


//VII. ACCEDER A LA SEGUNDA COMIDA FAVORITA DE LOS PINGUINOS E IMPRIMIRLA
pinguins.map((penguin, index)=>
    {
        console.log('La comida favorita de ',penguin.name,'es: ',penguin.favoriteFoods[1]);
    }
)


//IX. MODIFICAR EL ULTIMO VALOR DE LA LISTA DE COMIDAS FAVORITAS POR "PIÑAS"
pinguins.map((penguin, index)=>
    {
        penguin.favoriteFoods[2]="piña"
    }
)


console.log(pinguins);


//X. ACCEDER A LA PROPIEDAD DE COMIDAS HE IMPRIMIR CADA UNA DE ELLAS
for (let i = 0; i < pinguins.length; i++) {
    const foodsMens = `La lista de comidas favoritas de ${pinguins[i].name} es: ${pinguins[i].favoriteFoods}`
    console.log(foodsMens);
}


