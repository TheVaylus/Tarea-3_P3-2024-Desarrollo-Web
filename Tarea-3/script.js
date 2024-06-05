// Solicita el nombre, apellido, edad y fecha de nacimiento del usuario
var nombre = prompt("Dame tu nombre");
var apellido = prompt("Dame tu apellido");
var edad = prompt("Dame tu edad");
var fechaNacimiento = prompt("Dame tu fecha de nacimiento (DD/MM/AAAA)");

// Función para crear un mensaje de saludo
function saludar(nombre, apellido, edad, fechaNacimiento) {
    var mayorDeEdad = edad >= 18 ? "mayor" : "menor";
    var mensaje = `Hola, me llamo ${nombre} ${apellido}, tengo ${edad} años y nací el ${fechaNacimiento}. Soy ${mayorDeEdad} de edad.`;
    return mensaje;
}

// Actualiza el contenido del elemento con id "output" con el mensaje de saludo
var outputDiv = document.getElementById("output");
outputDiv.innerHTML = saludar(nombre, apellido, edad, fechaNacimiento);

// Crear un objeto 'car' con detalles del coche
const car = {
    name: "BMW",
    modelo: "BMW Serie 2 Active Tourer",
    color: "Black",
    año: "2009",
    puertas: 4
};

// Crear un objeto 'carro' con detalles del vehículo
const carro = {
    marca: "BMW",
    modelo: "ix1",
    color: "Negro",
    tipo: "SUV"
};

// Crear un objeto 'moto' con detalles de la motocicleta
const moto = {
    marca: "Yamaha",
    color: "Blanco",
    cilindrada: "250cc"
};

// Actualiza el contenido del elemento con id "cars" con los detalles del objeto 'carro'
var carsDiv = document.getElementById("cars");
var msjCarro = `El carro ${carro.marca} modelo ${carro.modelo} es un ${carro.tipo} de color ${carro.color}.`;
carsDiv.innerHTML = msjCarro;

// Actualiza el contenido del elemento con id "moto" con los detalles del objeto 'moto'
var motoDiv = document.getElementById("moto");
var msjMoto = `La moto ${moto.marca} tiene un color ${moto.color} y una cilindrada de ${moto.cilindrada}.`;
motoDiv.innerHTML = msjMoto;

// Solicita la operación matemática que el usuario desea realizar
var operacion = prompt("¿Qué operación quiere hacer? (+,-,/,*)");
// Solicita los números para la operación
var num1 = prompt("Ingrese un número");
var num2 = prompt("Ingrese el segundo número");

// Variable para almacenar el resultado de la operación
var resultado;

// Función para sumar dos números
function sumar(n1, n2) {
    return parseFloat(n1) + parseFloat(n2);
}

// Función para restar dos números
function restar(n1, n2) {
    return parseFloat(n1) - parseFloat(n2);
}

// Función para multiplicar dos números
function multiplicar(n1, n2) {
    return parseFloat(n1) * parseFloat(n2);
}

// Función para dividir dos números
function dividir(n1, n2) {
    return parseFloat(n1) / parseFloat(n2);
}

// Realiza la operación matemática según la selección del usuario
if (operacion == "+") {
    resultado = sumar(num1, num2);
} else if (operacion == "-") {
    resultado = restar(num1, num2);
} else if (operacion == "*") {
    resultado = multiplicar(num1, num2);
} else if (operacion == "/") {
    resultado = dividir(num1, num2);
} else {
    alert("¡La información ingresada es incorrecta!");
}

// Actualiza el contenido del elemento con id "result" con el resultado de la operación
var resultDiv = document.getElementById("result");
resultDiv.innerHTML = "El resultado es " + resultado;

// Crear un array de autos y añadir elementos adicionales
const autos = ["Mazda", "BMW", "Honda"];
autos.push("Hyundai");  // Añadir elemento al final del array
autos.push("Toyota");   // Añadir otro elemento al final del array

// Métodos adicionales para manipular el array 'autos'
autos.unshift("Ford");  // Añade un elemento al principio del array
autos.pop();            // Elimina el último elemento del array
autos.shift();          // Elimina el primer elemento del array

// Mostrar una alerta con el contenido del array 'autos' actualizado
alert(autos);
