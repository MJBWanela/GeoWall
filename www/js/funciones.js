/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function ajustarPantalla() {
/*
 * Temporalmente sera 360 x 640
 */

    var cajaMedida = document.getElementById("cajaMedida");

//    
    altura = cajaMedida.clientHeight;
    anchura = cajaMedida.scrollWidth;   
    distanciadLineas = Math.floor(altura/16);
        
    anchuraFigura = anchura/3;
    alturaFigura = anchura/3;
    
    canvas.height = altura - (distanciadLineas+50);
    canvas.width = anchura;
    
    /**
     * aspectos graficos a modificar     
     */
    var btnCheckRegistrar = document.getElementById('btnCheck1');
    btnCheckRegistrar.setAttribute("style", "height:" + anchura/10 );
    
    var puntosenlaPartida = obtenerElementoID("puntos");
    puntosenlaPartida.height = distanciadLineas;

    puntosenlaPartida.setAttribute("style", "height:" + distanciadLineas + "px; vertical-align: middle; max-height:" + distanciadLineas + "px; width: 100%; text-align: center;");

   
}


function pintarLog(log) {
//    console.log(("----Log----") + log + "-----------");
}

function obtenerElementoID(elemento) {
    return document.getElementById(elemento);
}

function replaceAll(text, busca, reemplaza) {
    while (text.toString().indexOf(busca) !== -1) {
        text = text.toString().replace(busca, reemplaza);
    }
    return text;
}





function cambiaNombre(name) {
    //console.log("--"+name+"--");
    var tenemosName = false;

    var nickChanged = ("" + name);
    var nameAyuda = ("" + name);

    nameAyuda = replaceAll(nickChanged, '\u0020', '');

    if (nameAyuda !== '' && nickChanged.length < 20 && nickChanged !== 'NameUser') {
        tenemosName = true;
    }
    if (tenemosName) {
        actualizarStorageLocal(17, nickChanged);
        //localStorage.setItem('name', nickChanged);

        if (localStorage.getItem('id') === "0") {
            obtenerid_Web();
        } else {
            guardamosNuve();
        }
        pintamosPantalla(16);
    }
}

function guardamosSonido() {
    var optionSound = document.getElementById("optionSound");    
    if (optionSound.checked) {
        actualizarStorageLocal(19, "checked");        
    } else {
        actualizarStorageLocal(19, "false");        
    }
}


function guardamospuntosWebyOffline(){    
    if(puntuacion> localStorage.getItem('puntos')){
        localStorage.setItem('puntos', puntuacion);    
    }    
    guardamosNuve();    
}

function cerrarApp(){
        navigator.app.exitApp();
}