/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function actualizarStorageLocal(option, valorVariable ){
  pintarLog("actualizarStorageLocal Option:"+option+" valorVariable:"+valorVariable+"." );              
    switch(option){
      case 16:
        localStorage.id = ""+valorVariable;
        localStorage.name = "u"+(valorVariable*3);
      break;
      case 17:
        
        localStorage.name = ""+valorVariable;
      break;
      case 18:        
        localStorage.puntos = ""+valorVariable;
      break;
      case 19:        
        localStorage.sound = ""+valorVariable;
        if(valorVariable==="checked"){
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
     break;
      case 20:
        localStorage.level = ""+valorVariable;
      break;
      case 21:
        localStorage.nVecesJugado = ""+valorVariable;
      break;
    }            
pintarLog(localStorage);
}