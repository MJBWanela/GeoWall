/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function pintamosPantalla(pantalla){
     var cajaMenu = document.getElementById("cajaMenu");
    cajaMenu.setAttribute('style','display: none');
    var cajaCanvas = document.getElementById("cajaCanvas");
    cajaCanvas.setAttribute('style','display: none');
    var cajaPuntuaciones = document.getElementById("cajaPuntuaciones");
    cajaPuntuaciones.setAttribute('style','display: none');
    var cajaRanking = document.getElementById("cajaRanking");
    cajaRanking.setAttribute('style','display: none');
    var cajaOption = document.getElementById("cajaOption");
    cajaOption.setAttribute('style','display: none');
    var cajaOption1 = document.getElementById("cajaOption1");
    cajaOption1.setAttribute('style','display: none');
    var cajaInstrucciones = document.getElementById("cajaInstrucciones");
    cajaInstrucciones.setAttribute('style','display: none');
    var cajaError = document.getElementById("cajaInstrucciones");
    cajaError.setAttribute('style','display: none');
    
    //manejaJSON();
    switch(pantalla){
        case 16: 
            cajaMenu.setAttribute('style','display: block; position: absolute; left: 0; top: 0;');
            iniciamosVariables();
            recargarListadoRanking();
        break;
        case 17:             
            iniciamosVariables();              
            
            iniciamosPartida();
            
            cajaCanvas.setAttribute('style','display: block; position: absolute; left: 0; top: 0;');
            
        break;
        case 18: 
            cajaPuntuaciones.setAttribute('style','display: block; position: absolute; left: 0; top: 0; bottom:0; right:0; ');
            mostramosPuntuacionCorrecta();
        break;
        case 19:                         
            pintarListado();
            cajaRanking.setAttribute('style','display: block; position: absolute; left: 0; top: 0; bottom:0; right:0; ');                        
        break;
        case 20:
            actualizarOptions();
            cajaOption.setAttribute('style','display: block; position: absolute; left: 0; top: 0; bottom:0; right:0;  text-align: center;');                        
        break;
        case 21:
            cajaOption1.setAttribute('style','display: block; position: absolute; left: 0; top: 0; bottom:0; right:0;  text-align: center;');                        
        break;
        case 22:
            cajaInstrucciones.setAttribute('style','display: block; position: absolute; left: 0; top: 0; bottom:0; right:0;  text-align: center;');                        
        break;
        case 22:
            cajaError.setAttribute('style','display: block; position: absolute; left: 0; top: 0; bottom:0; right:0; text-align: center;');                        
        break;
    }
}
