/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function iniciarGame(){
if(localStorage.getItem('id') === null || localStorage.getItem('name')==="NameUser"){
    localStorage.id= "0";            
    localStorage.name = "NameUser";
    localStorage.puntos = "0";
    localStorage.level="0";
    localStorage.sound="checked";    
    // esto siempre usaremos "Usuario" ya que lo usuaremos para buscar en la tabla
    localStorage.user= "Usuario";
    localStorage.nVecesJugado ="0";
    //pintamosPantalla(21);  
    obtenerid_Web();        
    pintamosPantalla(16);  
}else if (localStorage.getItem('id') === "0"){
    obtenerid_Web();           
    pintamosPantalla(16);    
}else{                           
    pintamosPantalla(16);
}        


ajustarPantalla();

//window.plugins.AdMob.createBannerView();


}


window.onload = onDocLoad();
window.onload = onResize();