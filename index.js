
//--- enero
//Sumatoria
const sumatoria = function (x,y,z){
    return x+y+z ;
}
let c=25
let d=12
let e=213
console.log(sumatoria(c , d , e));
// Comparación con funciones 

let passwordFiltro = 255;

const login = function (x){
    return x;
}

login(passwordFiltro) == 255 ? console.log('Bienvenido') : console.log('Denegado');

//flecha
const acceso =(clave, usuario)=> console.log(`Usuario ${usuario} su acceso es ${clave}`);
acceso(passwordFiltro, "Raquel")

//Objetos
const cliente1 = {
    //clave: valor
    nombre: 'Raúl',
    email: 'raul2@gmail.com',
    pais: 'Madrid',
    acceso: true,
    pago: 'Transferencia',
}
console.log(cliente1);

const {nombre, email, pago} = cliente1;
console.log(nombre, email, pago);

//Array 
let access = true 
const primerArray = ['Raúl', 38, access, sumatoria(c,d), ['Madrid',2023]];

//const [nambre, edad, año] = primerArray;
//console.log(nambre,edad, año);

const functionArray = () => { return primerArray; }
const [nambre, edad, ingreso]=functionArray();
console.log(nambre,edad,ingreso);
//Mensajes con condicional 
let nombreUsuario = prompt(`¡Hola! Bienvenido, ¿cuál es tu nombre?`);
alert(`Hola " + nombreUsuario + " " + "¿Cómo te enteraste de nosotos?, escríbenos al WhatsApp.`);
let edadUsuario = prompt("¿Cuántos años tienes?");


if (edadUsuario>=18){
    alert(`Venga ${nombreUsuario} toma un trago, la casa invita`);
    }
    else{
        alert(`¡Alto ahí ${nombreUsuario}! Ten, toma ${edadUsuario * 2} chocolates`);
    }
    if(edadUsuario==18){
        alert(`¡ALTOOOOO AHÍ ${nombreUsuario}! Venga que sos recién legal, toma ${edadUsuario/6} shots de alegría y ve a disfrutar de nuestra web`)
    }
    //Switch
switch(descuentos){
    case edadUsuario>=18:
        console.log ('Tienes un 20% de descuento adicional');
        alert(`${nombreUsuario}Tienes un 20% de descuento adicional`)
        break;

    case edadUsuario<=18:
        console.log ('Tienes un 15% de descuento adicional');
        alert(`Tienes un 15% de descuento adicional`);
        break;

    case edadUsuario>=18:
        console.log ('TAdemás recibe un 25% de descuento adicional');
        alert(`Además recibe un 25% de descuento adicional`);
        break;
}//lo intenté :C 
/*CarritoArray
const carrito=[];

const agregarAlCarrito = (producto, carrito)=>{
    carrito.push(producto);
    console.log("Se agrego con éxito al carrito");
}


const proucto1 ={
    nombre: "PLA",
    imagen: "img.jpg",
    precio: 300,
    descripcion: "El mejor material para principiantes en impresión 3D"
}

const proucto2 ={
    nombre: "PETG",
    imagen: "img.jpg", //PARA LLAMAR LA IMAGEN ES ../IMAGEN
    precio: 399,
    descripcion: "El mejor material para principiantes en impresión 3D"
}

const proucto3 ={
    nombre: "TPU",
    imagen: "img.jpg",
    precio: 699,
    descripcion: "El mejor material para principiantes en impresión 3D"
}
*/
const materiales =[
    {id: 1 , nombre: "PLA", precio: 300, img:"img.jpg"},
    {id: 2 , nombre: "PETG", precio: 399, img:"img.jpg"},
    {id: 3 , nombre: "TPU", precio: 699, img:"img.jpg"},
    {id: 4 , nombre: "PLA GLOW", precio: 699, img:"img.jpg"},
    
];

for (let i=0; i<comidas.length; i++){
    console.log("Total de productos" , suma+= comidas [i].precio);
}
const carrito=[];
const agregarAlCarrito = (producto, carrito)=>{
    carrito.push(producto);
    console.log("Se agrego con éxito al carrito");
}
agregarAlCarrito(producto[1], carrito);
agregarAlCarrito(producto[2], carrito);
agregarAlCarrito(producto[3], carrito);

console.log("Carrito de compras", carrito)