let textoEntrada = document.querySelector('entradaDeTexto');
textoEntrada = textoEntrada.toLowerCase();
let salida = '';

function encriptarTexto(textoEntrada){
    for (let i = 0; i < textoEntrada.length; i++) {
        let element = texto[i];
        if(element == 'a'){
            element = 'ai';
        } else if(element == 'e'){
            element = 'enter';
        } else if(element == 'i'){
            element = 'imes';
        } else if(element == 'o'){
            element = 'ober'
        } else if(element == 'u'){
            element = 'ufat'
        }
        salida = salida + element;
    }
}

function desencriptarTexto(textoEntrada){
    for (let i = 0; i < textoEntrada.length; i++) {
        let element = texto[i];
        if(element == 'ai'){
            element = 'a';
        } else if(element == 'enter'){
            element = 'e';
        } else if(element == 'imes'){
            element = 'i';
        } else if(element == 'ober'){
            element = 'o'
        } else if(element == 'ufat'){
            element = 'u'
        }
        salida = salida + element;
    }
}

encriptarTexto(textoEntrada);
desencriptarTexto(textoEntrada);


console.log(salida);