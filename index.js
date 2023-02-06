const contadorCarrito = document.getElementById("contadorCarrito");
const contenidoCarrito = document.getElementById("contenidoCarrito");

const materiales = [
    {id: 1 , nombre: "Resina Bluecast", precio: 3959, stock: 10, img:"../imagenes/bluecastvent.jpg" },
    {id: 2 , nombre: "ABS LIKE BOSTER", precio: 959, stock: 11, img:"../imagenes/ABSLIKEBOS.jpg"},
    {id: 3 , nombre: "Resina Boster Casteable", precio: 2359, stock: 8, img:"../imagenes/JOYCAS.jpg"},
    {id: 4 , nombre: "Resina Sunlu Kit 3 Litros", precio: 1849, stock: 15, img:"../imagenes/Kit3.jpg"},
    {id: 5 , nombre: "Resina Sunlu Kit 5 Litros", precio: 1849, stock: 15, img:"../imagenes/kit5.jpg"},
    {id: 6 , nombre: "Resina Sunlu Kit 10 Litros", precio: 2949, stock: 15, img:"../imagenes/kit10.jpg"},
    {id: 7 , nombre: "Impresora 3D Creality Ender 3v2", precio: 4899, stock: 15, img:"../imagenes/Ender3v2.jpg"},
    {id: 8 , nombre: "3 Kg PETG Protej", precio: 1090, stock: 15, img:"../imagenes/Protej.jpg"},
];


const carrito = [];
 
const agregarAlCarrito = (id, carrito)=>{
    const productoElegido=materiales.find(item=> item.id ===id);
    carrito.push(productoElegido);
    console.log("Se agrego con éxito al carrito", carrito);
}

const agregarContadorCarrito = () => {
    if(carrito.lenght !==0){
        contadorCarrito.classList.add("contadorCarrito");
        contadorCarrito.textContent=carrito.length
    }
}
materiales.forEach(material=>{
    const div = document.createElement("div");
    div.innerHTML =
    `
    <div class="card cardMateriales">
        <img src="${material.img}" class="card-img-top imgMateriales" alt="${material.nombre}">
        <div class="card-bodi cuerpoCard">
             <h3 class="card-title tituloMaterial">${material.nombre}</h3>
             <p class="card-text precioMateral"> Precio: $${material.precio}</p>
             <button class="btn btnAgregarCarrito" id "agregarCarrito${material.id}"> Agregar al carrito </button>
        </div>
    </div>
    `
    contenedorProductos.appendChild(div);

    const botonAgregarCarrito = document.getElementById(`agregarCarrito${material.id}`);
    botonAgregarCarrito.addEventListener("click", ()=>{
       agregarAlCarrito(material.id, carrito);
       agregarContadorCarrito();
       actualizarCarrito();
    })
})

const actualizarCarrito = () => {
    contenidoCarrito.innerHTML = "";
    carrito.forEach (material => {
        const div = document.createElement("div");
        div.innerHTML=
        `
            <p> ${material.nombre}</p>
            <p> ${material.cantidad}</p>
            <p> PRECIO ${material.precio}</p>
            <button> Eliminar </button>
        `
        contenidoCarrito.appendChild(div);
    })
}