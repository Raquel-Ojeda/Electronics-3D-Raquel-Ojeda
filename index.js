
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