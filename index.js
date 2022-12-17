// Variables
// Globales 
var saludo ="Hola a todos";
if(saludo){
    var saludo = "Hola México, Europa, USA o reptiliano";
    console.log(saludo);
}

//Limitadas
let nombre="Raquel";
if (nombre){
    let nombre = "Reynaldo";
    console.log(nombre);
}
console.log(nombre);

//Inmutables
const rango="admins";
console.log(rango);

//Tipo de variables 
//STRING
let cargo ="Raquel Ojeda- CEO";
console.log(cargo);

//Number
let edad=23;
console.log(edad);

//Boolean
let casada=true;
console.log(casada);

//Undefined
let fechaDeEmbarazo=undefined;
console.log(fechaDeEmbarazo);

//Null
let numeroDeHijos=null;
console.log(numeroDeHijos);

//Concatenar
let nombreUsuario = prompt(`¡Hola! Bienvenido, ¿cuál es tu nombre?`);
alert(`Hola " + nombreUsuario + " " + "¿Cómo te enteraste de nosotos?, escríbenos al WhatsApp.`);
let edadUsuario = prompt("¿Cuántos años tienes?");


//Interpolación 
alert(`Oh mira, ${nombreUsuario} tienes ${edadUsuario} años, disfruta de nuestra web.`);

//OPERADORES

let a = 5
let b = 32
 //Operadores aritméticos
console.log(a*b);
//Asignación con operación aritmética
console.log(a=b);
console.log(a+=b);
console.log(a/b);
//Comparación

if (edadUsuario>=18){
alert(`Venga ${nombreUsuario} toma un trago, la casa invita`);
}
else{
    alert(`¡Alto ahí ${nombreUsuario}! Ten, toma ${edadUsuario * 2} chocolates`);
}
if(edadUsuario==18){
    alert(`¡ALTOOOOO AHÍ ${nombreUsuario}! Venga que sos recién legal, toma ${edadUsuario/6} shots de alegría y ve a disfrutar de nuestra web`)
}