/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var tenemosRed = true;


function obtenerid_Web() {
    if (tenemosRed) {
        var http_requestID = new XMLHttpRequest();
        // Descarga los datos JSON del servidor.
        http_requestID.onreadystatechange = manejaJSONid;
//        http_requestID.open("GET", 'http://192.168.100.7/GeoWall-web/devuelveId.php?name=' + localStorage.name, true);
console.log('http://majiba.com/GeoWall-web/devuelveId.php?name=' + localStorage.name );
        http_requestID.open("GET", 'http://majiba.com/GeoWall-web/devuelveId.php?name=' + localStorage.name, true);
        http_requestID.send(null);

        function manejaJSONid() {
            if (http_requestID.readyState == 4) {
                if (http_requestID.status == 200) {
                    var cadCodificadaJSON = http_requestID.responseText;
                    var objDatos = cadCodificadaJSON; //Creamos el objeto utilizando la cadena codificada
                    actualizarStorageLocal(16, objDatos);
                } else {

                }
                http_requestID = null;
            }
        }

    }
}
function recargarListadoRanking() {
    var http_request = new XMLHttpRequest();



    function manejaJSON() {
        if (http_request.readyState == 4) {
            if (http_request.status == 200) {
                var cadCodificadaJSON = http_request.responseText;
                var objDatos = eval("(" + cadCodificadaJSON + ")"); //Creamos el objeto utilizando la cadena codificada
                //Ahora con el objeto desplegamos los datos mandados desde el servidor
                //pintarLog(""+objDatos);
                listadoDePuntuaciones = objDatos;

// Descarga los datos JSON del servidor.
            } else {
//      alert("Ocurrio un problema con la URL.");
                http_request = null;
            }

        }

    }
    // Descarga los datos JSON del servidor.
    http_request.onreadystatechange = manejaJSON;
    //pintarLog('http://localhost/GeoWall-web/devuelveLista.php?user=' + usuario.id);
//    http_request.open("GET", 'http://192.168.100.7/GeoWall-web/devuelveLista.php?user=' + localStorage.id, true);
http_request.open("GET", 'http://majiba.com/GeoWall-web/devuelveLista.php?user=18', true);
    http_request.send(null);
}

function guardamosNuve() {

    var http_requestID = new XMLHttpRequest();
    // Descarga los datos JSON del servidor.
    http_requestID.onreadystatechange = manejaJSONid;
//    
    //pintarLog('http://192.168.100.7/GeoWall-web/actualizaDatos.php?user=' + localStorage.id + '&&puntuacion=' + localStorage.puntos + '&&name=' + localStorage.name+'&&nVecesJugado='+localStorage.nVecesJugado);
 //  http_requestID.open("GET", 'http://192.168.100.7/GeoWall-web/actualizaDatos.php?user=' + localStorage.id + '&&puntuacion=' + localStorage.puntos + '&&name=' + localStorage.name+'&&nVecesJugado='+localStorage.nVecesJugado, true);
    pintarLog('http://majiba.com/GeoWall-web/actualizaDatos.php?user=' + localStorage.id + '&&puntuacion=' + localStorage.puntos + '&&name=' + localStorage.name+'&&nVecesJugado='+localStorage.nVecesJugado);
        http_requestID.open("GET", 'http://majiba.com/GeoWall-web/actualizaDatos.php?user=' + localStorage.id + '&&puntuacion=' + localStorage.puntos + '&&name=' + localStorage.name+'&&nVecesJugado='+localStorage.nVecesJugado, true);
    http_requestID.send(null);

    function manejaJSONid() {
        if (http_requestID.readyState == 4) {
            if (http_requestID.status == 200) {
                var cadCodificadaJSON = http_requestID.responseText;
                var objDatos = cadCodificadaJSON; //Creamos el objeto utilizando la cadena codificada
                //Ahora con el objeto desplegamos los datos mandados desde el servidor


            } else {
//      alert("Ocurrio un problema con la URL.");
            }
            http_requestID = null;
        }

    }
}