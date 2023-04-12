// Ejercicio 1 

function ejercicio1(num) {
    
    console.log(`El ${num} es impar`);  
};

ejercicio1("17")

// Ejercicio 2 

function ejercicio2(numero1, numero2) {

if (numero1 > numero2) {
    console.log(`El 2 es mayor que el 1`);
}

}

ejercicio2 ("2", "1")

// Ejercicio 3

function ejercicio3(numero3) {

if (numero3 * 5 === 12) {
    console.log(`Sí, el ${numero3} es múltiplo de 5`);
}
else {
    console.log(`No, el ${numero3} no es múltiplo de 5`);
}
    
}

ejercicio3 ("12")

// Ejercicio 4

function ejercicio4 (numero4) {

for (let i = 0; i < numero4; i++) {

    if (i === 8) { continue;
    }
    
console.log(`${i}`);    
}

} 

ejercicio4 ("8")


// Ejercicio 5 

function ejercicio5 (palabra, numero5) {

for (let i = 0; i < numero5; i++) {
    console.log(`${palabra}`);
}
}

ejercicio5 ("Hola", "4")


// Ejercicio 6

let colores = [
    "Rosa",
    "Azul",
    "Blanco",
    "Negro",
    "Verde",
    "Amarillo",
];

function ejercicio6 (Array) {

let colores = [
    "Rosa",
    "Azul",
    "Blanco",
    "Negro",
    "Verde",
    "Amarillo",
];
}

console.log(colores);

// Ejercicio 7

function ejercicio7 (array) {

    for (let i = 0; i < array.length; i++) {
        if (i !== 5) {
            console.log(array[i]);
        }
    }
}

ejercicio7 ([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

// Ejercicio 8 

function ejercicio8 (array, numero6) {
    
    for (let i = 0; i < array.length; i++) {
        console.log(array[i] * numero6);
    }
}

ejercicio8 ([3, 6, 9, 12, 15], 2);














