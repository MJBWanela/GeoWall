var anchoPixImganes= 256;
/**
 * 
 * @param {type} valorFigura: esta funcion nos pintal la figura en la parte inferior
 */

//Nos pinta la figura de abajo
function pintarfigura(valorFigura){
  
    ctx.drawImage(figura, valorFigura*anchoPixImganes, 0, anchoPixImganes, anchoPixImganes, anchuraFigura, canvas.height-(alturaFigura), anchuraFigura, alturaFigura);
}

//Nos borra el rectangulo de Abajo
function limpiarAntiguaFigura(){
    //pintarLog("estamoLimpiando");
    ctx.clearRect(anchuraFigura,  canvas.height-(alturaFigura), anchuraFigura, alturaFigura);
}


function liampiamoMuro(){
    ctx.clearRect(0,  0, canvas.width, canvas.height);
}

function pintamosMuro(){
    ctx.drawImage(muro, 0,  (valorY-canvas.height), anchura, canvas.height);
    pintamosSombra();
    
}
function pintamosSombra(){   
    ctx.drawImage(sombra, valorSombra * anchoPixImganes, 0, anchoPixImganes, anchoPixImganes, anchuraFigura, (valorY-anchuraFigura), anchuraFigura, alturaFigura);
}

