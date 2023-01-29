
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
/*let nombreUsuario = prompt(`¡Hola! Bienvenido, ¿cuál es tu nombre?`);
alert(`Hola  ${nombreUsuario}  ¿Cómo te enteraste de nosotros?, escríbenos al WhatsApp.`);
let edadUsuario = prompt("¿Cuántos años tienes?");


if (edadUsuario>=18){
    alert(`Venga ${nombreUsuario} tienes el 10% de descuento`);
    }
    else{
        alert(`¡Alto ahí ${nombreUsuario}! Ten, toma ${edadUsuario * 20} gramos de PLA gratis`);
    }
    if(edadUsuario==18){
        alert(`¡ALTOOOOO AHÍ ${nombreUsuario}! Venga que sos recién legal, toma ${edadUsuario*2} de descuento`)
    }*/
    //Switch
/*switch(descuentos){
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
*/
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
    {id: 1 , nombre: "PLA", precio: 300, stock: 10, img:"img.jpg"},
    {id: 2 , nombre: "PETG", precio: 399, stock: 11, img:"img.jpg"},
    {id: 3 , nombre: "TPU", precio: 699, stock: 8, img:"img.jpg"},
    {id: 4 , nombre: "PLA GLOW", precio: 699, stock: 15, img:"img.jpg"},
    
];
let suma=0;

const carrito=[];

const agregarAlCarrito = (material, carrito)=>[
    carrito.push(material),
    console.log("Se agrego con éxito al carrito"),
];

/*for (let i=0; i<materiales.length; i++){
    console.log("Total de productos" , suma = materiales [i].precio);
}
*/

materiales.forEach (materiales => {
    console.log(materiales.nombre, materiales.stock)
});

const materialesFiltrado = materiales.filter(item => item.precio >300);
console.log("Los materiales más caros son:", materialesFiltrado);

let nuevoArray= materiales.map((item)=>({
    nombre: item.nombre,
    precio: item.precio / 2,
    id: item.id + 1
}));
console.log(materiales, "Array sin descuento");
console.log(nuevoArray,"Array con descuento");

agregarAlCarrito(materiales[1], carrito);
agregarAlCarrito(materiales[2], carrito);
agregarAlCarrito(materiales[3], carrito);
agregarAlCarrito(materiales[4], carrito);

console.log ("El carrito actualmente tiene :", carrito);
/*
const arrayPrecio = materiales.map (item => item.precio);

console.log (arrayPrecio , "nuevo array solo con precios");*/

//const precioPromedio = carrito.reduce ((total , precioProductos)=> total + precioProductos.precio, 560);
//console.log("El valor promedio es : ", precioPromedio);
//lo intente pero no se por qué me aparece anonymous

const ordenAlf = materiales.sort((item1,item2)=> {
    if(item1.nombre===item2.nombre){
        return 0
    } else if(item1.nombre <item2.nombre){
        return-1;
    }else{
        return 1
    }
});

console.log("Orden alfabético", ordenAlf);

const Costoso = materiales.sort((item1,item2)=> {
    if(item1.precio===item2.precio){
        return 0
    } else if(item1.precio >item2.precio){
        return-1;
    }else{
        return 1
    }
});

console.log("El producto más costoso es: ", ordenAlf);