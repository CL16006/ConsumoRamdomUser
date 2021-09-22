/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var contenido=document.querySelector("#contenido");

function traer(){
    fetch('https://randomuser.me/api/')
            .then(rest=>rest.json())
            .then(data=>{
                console.log(data);
    });
        
    
}
