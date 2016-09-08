/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/**
 * 
 * @param {type} e: es el punto donde se ha pulsado de la pantalla
 * @returns {undefined}
 */
function pulsado(e) {
    //pintarLog("------"+arrayImagenes+"****************"+ contadorImagen);
   
    var x = e.pageX;
    var y = e.pageY;
    var posicion_imagenX = 0;
    var posicion_imagenY = 0;
    limpiarAntiguaFigura();
    
    if (contadorImagen < nImagenes ) {
        contadorImagen++;        
    } else {
        contadorImagen=0;
    }
    
    pintarfigura(contadorImagen);
    
    timeNoCambia = new Date().getTime();
    sCambio.play();
}

function iniciamosPartida() {
    gameLoop = setInterval(doGameLoop, velocidad);
    canvas.addEventListener("mousedown", pulsado, false);
    reiniciamosElMuro();
    contadorImagen++;
    sMusic.loop=true;
    sMusic.volumen = 0.5;
    sMusic.play();
    

}


function finalizarPartida() {
    window.clearInterval(gameLoop);
    canvas.removeEventListener("mousedown", pulsado, false);

    sMusic.pause();
    sFallo.play();
    if(puntuacion> localStorage.getItem('puntos')){
        guardamospuntosWebyOffline();
    }
    if(level> localStorage.getItem('level')){
        localStorage.setItem('level', level);
    }
    localStorage.setItem('nVecesJugado',""+(parseInt(localStorage.getItem('nVecesJugado'))+1));

    pintamosPantalla(18);
    
}


function reiniciamosElMuro() {
    //console.log("puntuacion:" + puntuacion + "---velocidad:" + velocidad + "---timeEmpieza" + timeEmpiza + "---level" + level + "figuraslevel" + figuraslevel);
    puntuacion = puntuacion + ((timeNoCambia - timeEmpiza) * level);
    puntosDePartida();
    //Le cambiamos el valor a ValorY que es el que vamos a utilizar
    valorY = 1;
//le cambiamo la sombra
    valorSombra = Math.floor((Math.random() * nImagenes));
//le vambiamos el valor de abjao
    


    liampiamoMuro();

    timeEmpiza = new Date().getTime();
    timeNoCambia = new Date().getTime() + 1;

    if (subimoselnivel()) {
        window.clearInterval(gameLoop);
        gameLoop = setInterval(doGameLoop, velocidad);
    }
    //contadorImagen = Math.floor(Math.random() * nImagenes);
    sMuro.play();

}
function subimoselnivel() {
    if (figuraslevel >= 2 && level <= 2) {
        figuraslevel = 0;
        level++;
        if (level < 11) {

            velocidad = 45 - level ;
        }
        if (nImagenes < maxDeImagenes) {
            nImagenes++;
        }
        return true;
    } else if (figuraslevel >= 4 && level > 2) {
        figuraslevel = 0;
        level++;
        if (level < 11) {
            velocidad = 45 - level ;
        }
        if (nImagenes < maxDeImagenes) {
            nImagenes++;
        }

        return true;
    }

    figuraslevel++;
    return false;

}
function subimoNivel() {
    level++;

}



function doGameLoop() {
    //console.log("ads"+Math.floor((canvas.height / 85)+(level)))
    valorY = valorY + Math.floor((canvas.height / 85)+(level));

    if (valorY >= canvas.height) {
        if (valorSombra === contadorImagen) {
            reiniciamosElMuro();
        } else {
            finalizarPartida();
        }
    } else {
            liampiamoMuro();

        pintamosMuro();
        
        pintarfigura(contadorImagen);
    }
}
     
