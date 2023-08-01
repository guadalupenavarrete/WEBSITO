const carrito = document.getElementById('carrito');
const elementos1 = document.getElementById('lista-1');
const lista = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.getElementById('vaciar-carrito');

cargarEventListeners();

function cargarEventListeners() {
    elementos1.addEventListener('click', comprarElemento);
    carrito.addEventListener('click', eliminarElemento);
    vaciarCarritoBtn.addEventListener('click', vaciarCarrito);

}
function comprarElemento(e){
    e.preventDefault();
    if(e.target.classList.contains('agregar-carrito')){
        const elemento = e.target.parentElement.parentElement;
        leerDatosElemento(elemento);
    }

}
function leerDatosElemento(elemento){
    const infoElemento={
        imagen: elemento.querySelector('img').src,
        titulo:elemento.querySelector('h3').textContent,
        precio: elemento.querySelector('.precio').textContent,
        id: elemento.querySelector('a').getAttribute('data-id')


    }
    insertarCarrito(infoElemento);
}
function insertarCarrito(elemento){
    const row = document.createElement('tr');
    row.innerHTML = `
    <td>
       <img src="${elemento.imagen}" width=100>
       </td>
       <td>
          ${elemento.titulo}
       </td>
       <td>
          ${elemento.precio}
       </td>
       <td>
          <a herf="#" class="borrar" data-id="${elemento.id}> X </a>
       </td>
    `;
    lista.appendChild(row);
}
function eliminarElemento(e){
    e.preventDefault();
    let elemento,
       elementoId;
    if (e.target.classList.contains('borrar')){
        e.target.parentElement.parentElement.remove();
        elemento = e.target.parentElement.parentElement;
        elementoId = elemento.querySelector('a').getAttribute('data-id');
    }
}

function vaciarCarrito() {
    while (lista.firstChild){
        lista.removeChild(lista.firstChild);
    }
    return false;
}







var producto = [];
var precio = [];


function card() {

    var Accesorios = document.getElementById("Accesorios").value;
    var cantidad = document.getElementById("cantidad").value;


    //elimino div1
    var contenedoraux = document.getElementById("contenedor");
    var elem = document.getElementById("div1");
    contenedoraux.removeChild(elem);

    for (var i = 1; i <= cantidad; i++) {


        //creo nuevamente div1
        var div0 = document.createElement("div")
        div0.className = "row gx-5";
        div0.id = "div1"
        contenedoraux.appendChild(div0)






        switch (Accesorios) {
            case "Aerosoles":
                producto = ["", "aero1", "aero2", "aero", "zapatillas de la marca ferrari", "topper grises a descuento", "topper deportivas a un precio comodo"];
                precio = [" ", "3.000$", "7.600$", "15.000$", "2.500$", "1.000$", "4.700$"];
                break;



            case "Protección y Detallado":
                producto = ["", "camiseta alternativa de la seleccion", "buzo de la seleccion", "camiseta alternativa de boca", "camiseta titular de boca junior", "camiseta alternativa del juventus", "camiseta de entrenamiento de la seleccion"];
                precio = [" ", "7.000$", "4.670$", "17.000$", "4.300$", "12.700$", "4.200$"];
                break;



            case "Protección y Detallado":
                producto = ["", "pantalones tipo jean color azul", "jean color negro", "jean color rojo oscuro", "jean color verde oscuro", "jean color beige", "cargo ajustado color negro"];
                precio = [" ", "5.000$", "4.600$", "10.000$", "2.300$", "1.700$", "4.500$"];
                break;
            default:
                break;
        }
        //creamos el primer div 
        var contenedor1 = document.getElementById("div1")
        var div1 = document.createElement("div")
        div1.className = "col-5"
        div1.id = "div1" + i
        contenedor1.appendChild(div1)

        var div1b = document.getElementById("div1" + i)
        var div2 = document.createElement("div")
        div2.className = "p-3"
        div2.id = "div2" + i
        div1b.appendChild(div2)

        var div2b = document.getElementById("div2" + i)
        var div3 = document.createElement("div")
        div3.className = "card"
        div3.id = "div3" + i
        div2b.appendChild(div3)

        var div3b = document.getElementById("div3" + i)
        var div4 = document.createElement("div")
        div4.className = "card"
        div4.style = "width: 18rem"
        div3b.appendChild(div4)

        var div5 = document.createElement("img")
        div5.src = "/PAGWEBAUTOS/imagenes/" + Accesorios + i + ".jpg"
        div5.className = "card-img-top"
        div5.alt = "..."
        div3b.appendChild(div5)

      


        var div6 = document.createElement("div")
        div6.className = "card-body"
        div6.id = "div6" + i
        div3b.appendChild(div6)
        //
        var div6b = document.getElementById("div6" + i)
        var div7 = document.createElement("h4")
        div7.className = "card-title"
        div7.innerHTML = "todo tipo de vestimenta a un precio razonable"
        div6b.appendChild(div7)

        var div8 = document.createElement("p")
        div8.className = "card-text"
        div8.innerHTML = producto[i] 
        div6b.appendChild(div8)

        var div9=document.createElement("p")
        div9.innerHTML ="  precio  " + precio[i]
        div6b.appendChild(div9)

        var div10=document.createElement("p")
        div6b.appendChild(div10)

        var button = document.createElement("button");
        button.className = "btn btn-primary"
        button.innerHTML = "comprar"
        div10.appendChild(button);



    }

}


