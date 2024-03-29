
function encriptarTexto() {
    let textoEntrada = document.getElementById('textField').value;
    textoEntrada = textoEntrada.toLowerCase();
    let textoEncriptado = document.getElementById('textoEncriptado');
    let parrafo = document.getElementById('parrafo');
    let borrarImagen = document.getElementById('picture');
    
    textoEntrada = textoEntrada.replaceAll('e', 'enter')
                                .replaceAll('o', 'ober')
                                .replaceAll('i', 'imes')
                                .replaceAll('a', 'ai')
                                .replaceAll('u', 'ufat');
                                
    if (textoEntrada.length != 0) {
        textoEncriptado.innerHTML = 'El texto encriptado es:'
        parrafo.innerHTML = textoEntrada;
        parrafo.style.fontSize = '1.5em';
        parrafo.style.marginTop = '50px';
        borrarImagen.src = 'Imagenes/imagenvacia.jpg';
        borrarImagen.alt = 'Imagen vacia para que la caja quede libre';
    }
    else{
        textoVacio();
    }
    limpiarCaja();
    return;
}

function desencriptarTexto(){
    let textoSalida = document.getElementById('textField').value;
    textoSalida = textoSalida.toLowerCase();
    let textoEncriptado = document.getElementById('textoEncriptado');
    let parrafo = document.getElementById('parrafo');
    let borrarImagen = document.getElementById('picture');
    
    textoSalida = textoSalida.replaceAll('ai', 'a')
                            .replaceAll('enter', 'e')
                            .replaceAll('imes', 'i')
                            .replaceAll('ober', 'o')
                            .replaceAll('ufat', 'u');
    

    if (textoSalida.length != 0) {
        textoEncriptado.innerHTML = 'El texto desencriptado es:'
        parrafo.innerHTML = textoSalida;
        parrafo.style.fontSize = '1.5em';
        parrafo.style.marginTop = '50px';
        borrarImagen.src = 'Imagenes/imagenvacia.jpg';
        borrarImagen.alt = 'Imagen vacia para que la caja quede libre';
    }
    else{
        textoVacio();
    }
    limpiarCaja();
    return;
}

//Esta funcion es para borrar el texto de entrada inmediatamente se presiona uno de los botones. 
//Por seguridad no se deberia ver el texto original con el texto encriptado en la misma pantalla.
function limpiarCaja(){
    let textoCaja = document.getElementById('textField');
    textoCaja.value = '';
}

//Creando la funcion para el boton copiar.
function copiarTexto() {
    let elmento = document.getElementById('parrafo');
    let inputOculto = document.createElement('input');
    document.querySelector('.mensajeCopy').classList.add('show');
    setTimeout(()=>{
        document.querySelector('.mensajeCopy').classList.remove('show');
    }, 800);
    inputOculto.setAttribute('value', elmento.innerText);
    document.body.appendChild(inputOculto);   
    inputOculto.select();
    document.execCommand('copy');
    document.body.removeChild(inputOculto);
}

function textoVacio(){
    let textoEncriptado = document.getElementById('textoEncriptado');
    let parrafo = document.getElementById('parrafo');
    let borrarImagen = document.getElementById('picture');
    textoEncriptado.innerHTML = 'Ningún mensaje fue encontrado';
    parrafo.innerHTML = 'Ingresa el texto que desees encriptar o desenceriptar.';
    parrafo.style.marginTop = '5px';
    parrafo.style.fontSize = '1em';
    borrarImagen.src = 'Imagenes/chicoydiamante.png';
    borrarImagen.alt = 'Chico observando diamante con una lupa';
}

encriptarTexto(); 
desencriptarTexto();