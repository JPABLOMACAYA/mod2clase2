
function parImpar() {

    var numIngresado = parseInt(document.getElementById("numUsuario").value);

    if (numIngresado % 2 == 0){
        return " Es Par!";
    } else {return "Es Impar!";
    }

}

function edadJubila() {
    
    var numIngresado = parseInt(document.getElementById("edadUsuario").value);

    var generoIngresado = document.getElementById("generoUsuario").value;

    if ( ( (numIngresado >= 65 ) && (generoIngresado == "M") ) || ( (numIngresado >= 60 ) && (generoIngresado == "F") ) ) {
        return "Estimado(a) usuario(a), le informamos que ud SI cumple requisitos para jubilarse";
    } else {return "Estimado(a) usuario(a), le informamos que ud NO cumple requisitos para jubilarse"
    }

}