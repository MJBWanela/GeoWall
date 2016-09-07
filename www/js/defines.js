
//Este listado se usara para el ranking
var listadoDePuntuaciones = [{'name': "****", 'puntos': "*****", 'posicion': '***'}];


/**
 * 
 * Definimos los archivos Necesarios para el correcto funcionamiento del Juego
 */
//variable del juego
var gameLoop ;

//variables de Imagenes
var figura = new Image();
figura.src = 'img/figuras.png'; 

var sombra = new Image();
sombra.src = 'img/sombras.png';

var muro = new Image();
muro.src = 'img/ladrillos1.jpg';

// variables de Audio
var sCambio = new Audio("sound/cambio.mp3"); 
var sMuro = new Audio("sound/wall.mp3"); 
var sFallo = new Audio("sound/fallo.mp3"); 
var sMusic = new Audio("sound/loopnolo.mp3"); 



var canvas = document.getElementById('micanvas');

var ctx = canvas.getContext('2d');


//Dibujo en el contexto del canvas
var anchura = 0;
var altura = 0;
var distanciadLineas = 0;

/*
 * @param {number} sera la anchura de la figura
 */
var anchuraFigura = anchura/3;
var alturaFigura = anchura/3;




















/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * @param {number} puntuacion: puntuacion obtenida
 */
var puntuacion = 0;

/**
 * @param {number} contadorImagen: posibles imagenes que mostraremos al pulsar la pantallas
 */
var contadorImagen = 0;
/**
 * 
 * @type Number valorSombra : numero de la imagen de la sombra
 */
var valorSombra = 0;
/**
 * 
 * @param level: nivel de la partida
 */
var level = 1;
/**
 * 
 * @type Number: para saber las figuras conseguidas en este nivel
 */
var figuraslevel =0;
/**
 * 
 * @param Number velocidad, tiempo en milesegundos que se reproducira la imagen;
 */
var velocidad = 40;
/**
 * 
 * @param  maxDeImagenes, será el numero maximo de imagenes
 */
var maxDeImagenes = 19;
/**
 * @param  nImagenes: sera el numero de imagenes disponibles acorde al nivel
 */
var nImagenes = 2;

/**
 * @type Number: ambos sera para controlar el tiempo en el que empiza a caer el muro y el tiempo que hizo el ultimo cambio de figura
 */
var timeEmpiza = 0;
var timeNoCambia = 0;





var valorY = 0;
/**
 * 
 * @type Image
 */


//
// =  {"name":"John", "levelMax":"100", "sound":"checked", "puntosMax":"123456", "id":"0"}; 



function iniciamosVariables(){
puntuacion = 0;
contadorImagen = 0;
valorSombra = 0;
level = 1;
figuraslevel =0;
velocidad = 40;
maxDeImagenes = 19;
nImagenes = 2;
timeEmpiza = 0;
timeNoCambia = 0;
valorY = 2;


	if(localStorage.sound ==='checked'){
            sCambio.volume = 1;
            sMuro.volume = 1;
            sFallo.volume = 1;
            sMusic.volume = 0.3;
        }else{
        	sCambio.volume = 0;
            sMuro.volume = 0;
            sFallo.volume = 0;
            sMusic.volume = 0;
        }
}

    
    
    
    
    
    
    
    








