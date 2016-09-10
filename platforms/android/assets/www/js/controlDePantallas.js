/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



function pintarListado(){
    cajaP = document.getElementById("cajaRanking");
    while(cajaP.firstChild){
        cajaP.removeChild(cajaP.firstChild);
    }
    
    for(var i=0; i< listadoDePuntuaciones.length ;i++){
        divRow = document.createElement("div");
        divRow.setAttribute('style', 'width: 100%;');
        
        divPosition = document.createElement("div");
        divPosition.setAttribute("class", "cell-row-ranking");        
        if(listadoDePuntuaciones[i].posicion==='***'){
            divTextPosition = document.createTextNode(""+listadoDePuntuaciones[i].posicion);        
        }else{
            divTextPosition = document.createTextNode(""+(1+listadoDePuntuaciones[i].posicion));        
        }
                        
        divPosition.appendChild(divTextPosition);        
        divName = document.createElement("div");
        divName.setAttribute("class", "cell-row-ranking ");
        divTextName = document.createTextNode(""+(listadoDePuntuaciones[i].name));
        divName.appendChild(divTextName);    
        
        divPuntos = document.createElement("div");
        divPuntos.setAttribute("class", "cell-row-ranking");
        divTextPuntos = document.createTextNode(""+(listadoDePuntuaciones[i].puntos));
        divPuntos.appendChild(divTextPuntos);
        
        
        //pintarLog(listadoDePuntuaciones[i].name+'==='+usuario.name);
        if(listadoDePuntuaciones[i].name === localStorage.name){
            divPosition.setAttribute("class", "cell-row-ranking cell-row-ranking-puntos soyYoRanking");
            //divName.setAttribute("class", "cell-row-ranking cell-row-ranking-position soyYoRanking");
            //divPuntos.setAttribute("class", "cell-row-ranking cell-row-ranking-puntos ");
            divRow.setAttribute("class", "row-ranking soyYoRanking");
        }else{
            divPosition.setAttribute("class", "cell-row-ranking cell-row-ranking-puntos ");
            divRow.setAttribute("class", "row-ranking");
        }

        divRow.appendChild(divPosition);
        divRow.appendChild(divName);
        divRow.appendChild(divPuntos);
        cajaP.appendChild(divRow);

    }
    divVolver = document.createElement("div");
    divVolver.setAttribute("class", "btnBottomRight");
    divVolver.setAttribute("onclick", "pintamosPantalla(16)");    
    divVolver.appendChild(document.createTextNode("Volver"));
    cajaP.appendChild(divVolver);    
}


function actualizarOptions(){
    var optionNick = document.getElementById("optionNick");
    optionNick.value = localStorage.name;

    var optionPuntos = document.getElementById("optionPuntos");
    while (optionPuntos.hasChildNodes()){
       optionPuntos.removeChild(optionPuntos.lastChild);
    }    
    optionPuntos.appendChild(document.createTextNode(localStorage.puntos));
    var optionLevel = document.getElementById("optionLevel");
    while (optionLevel.hasChildNodes()){
       optionLevel.removeChild(optionLevel.lastChild);
    }    
    optionLevel.appendChild(document.createTextNode(localStorage.level));
    
    var optionSound = document.getElementById("optionSound");    
    if(localStorage.sound==="checked"){
        optionSound.checked=true;
    }else{
        optionSound.checked=false;
    }

}

/*
 * Puntos en la partida
 */
function puntosDePartida(){
    var h1puntuacion = document.getElementById("puntos");
    pintarLog(""+ puntuacion+ "velo"+velocidad+"nivel"+level);
    var texto = document.createTextNode(""+ puntuacion);
    while(h1puntuacion.firstChild){
        h1puntuacion.removeChild(h1puntuacion.firstChild);
    }
    h1puntuacion.appendChild(texto);
}
/**
 * 
 * Puntos al final de la partida
 */
function mostramosPuntuacionCorrecta(){
    var h1puntuacion = document.getElementById("puntuacionPartida");  
    var levelPartida = document.getElementById("levelPartida");  
    var mensaje = document.getElementById("mensaje");    
  
    var texto = document.createTextNode(""+ puntuacion);
    var textlevel = document.createTextNode("Level : "+level+"/20");

    var textmensaje ="";

    if(level<9){
        textmensaje = document.createTextNode("jo jo jo jo");    
    }else if(level >8 && level <15){
        textmensaje = document.createTextNode("Ok! ;)");
    }else if(level >=15){
        textmensaje = document.createTextNode("PRO!");
    }

    while(mensaje.firstChild){
        mensaje.removeChild(mensaje.firstChild);
    }
    while(h1puntuacion.firstChild){
        h1puntuacion.removeChild(h1puntuacion.firstChild);
    }
    while(levelPartida.firstChild){
        levelPartida.removeChild(levelPartida.firstChild);
    }
    levelPartida.appendChild(textlevel);
    h1puntuacion.appendChild(texto);
    mensaje.appendChild(textmensaje);
}