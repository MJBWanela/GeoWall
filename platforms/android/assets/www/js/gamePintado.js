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

function colorCanvas(){
	//console.log(""+level);
	switch(level){
		case 1:
			canvas.setAttribute("style","background-color: #444;");
		break;
		case 2:
			canvas.setAttribute("style","background-color: #0095FF;");
		break;
		case 3:
			canvas.setAttribute("style","background-color: #00FFA2;");
		break;
		case 4:
			canvas.setAttribute("style","background-color: #FFBC00;");
		break;
		case 5:
			canvas.setAttribute("style","background-color: #A200FF;");
		break;
		case 6:
			canvas.setAttribute("style","background-color: #008080;");
		break;
		case 7:
			canvas.setAttribute("style","background-color: #D2B48C;");
		break;
		case 8:
			canvas.setAttribute("style","background-color: #FFC0CB;");
		break;
		case 9:
			canvas.setAttribute("style","background-color: #808000;");
		break;
		case 10:
			canvas.setAttribute("style","background-color: #FAEBD7;");
		break;
		case 11:
			canvas.setAttribute("style","background-color: #FF7F50;");
		break;
		case 12:
			canvas.setAttribute("style","background-color: #DCDCDC;");
		break;
		case 13:
			canvas.setAttribute("style","background-color: #4B0082;");
		break;
		case 14:
			canvas.setAttribute("style","background-color: #FA8072;");
		break;
		case 15:
			canvas.setAttribute("style","background-color: #20B2AA;");
		break;
		case 16:
			canvas.setAttribute("style","background-color: #D2691E;");
		break;
		case 17:
			canvas.setAttribute("style","background-color: #FF6347;");
		break;
		case 18:
			canvas.setAttribute("style","background-color: #A9A9A9;");
		break;
		case 19:
			canvas.setAttribute("style","background-color: #000000;");
		break;
		default:
			canvas.setAttribute("style","background-color: #444;");
	}
}