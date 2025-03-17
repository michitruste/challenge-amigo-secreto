// Lista que contendrá los nombres
let amigos = [];

// Función activada con el botón 'Añadir'
function agregarAmigo(){
    let amigoAgregado = (document.querySelector('#amigo')).value;
    //console.log(amigoAgregado);
    if (amigoAgregado == ''){
        alert('Por favor, inserte un nombre');
    }
    else{
        amigos.push(amigoAgregado);
        document.querySelector("#amigo").value = '';
        actualizarAmigos(amigoAgregado);
    }
    return;
}

// Función para mostrar los nombres en el elemento <ul>
function actualizarAmigos(amigoAgregado){
    let lista = document.querySelector('#listaAmigos');
    lista.innerHTML = "";
    for (let i = 0; i < amigos.length; i ++) {
        let nuevoElemento = document.createElement("li");
        nuevoElemento.textContent = amigos[i];
        lista.appendChild(nuevoElemento);
    }
    return;
}

// Función activada al presionar el botón 'Sortear Amigo'
function sortearAmigo(){
    let amigoSorteado = amigos[Math.floor(Math.random()*amigos.length)];
    //console.log(amigoSorteado);
    let elementoResultado = document.querySelector('#resultado');
    elementoResultado.innerHTML = amigoSorteado;
    return;
}