//


const contenedor_principal = document.querySelector(".card_row");
console.log(contenedor_principal)



/*------------------------------------------------------------------Botones de la seccion preguntas------------------------------------------------------------------*/

/* let boton_comprar = document.querySelector(".boton_como_comprar")

let boton_donde_comprar = document.getElementById("donde_comprar")

let boton_como_canjear = document.getElementById("como_canjear")

let boton_terminos = document.getElementById("terminos")

let icono_como = document.getElementById("icono_flecha_como");

let icono_flecha_donde = document.getElementById("icono_flecha_donde");

let icono_como_canjear = document.getElementById("icono_como_canjear");

let icono_terminos = document.getElementById("terminos_condiciones");
 */


/**
 * Funcion para cambiar los iconos de los botones collapse al hacer click
 * @param {*} boton toma como parametro un boton
 */

/* const cambiar_flecha = (boton) =>{

    boton.addEventListener("click",(e)=>{
        
        
        const icono = e.target.querySelector("i");
        
        if(icono.classList.contains("fa-angle-down")){
            
            console.log("icono dentro del if",icono)
            icono.classList.remove("fa-angle-down")
            icono.classList.add("fa-angle-up")
        }
        else{
          
            
            icono.classList.remove("fa-angle-up")
            icono.classList.add("fa-angle-down")
        }
        
    })
}  */



/* cambiar_flecha(boton_donde_comprar)

cambiar_flecha(boton_como_canjear)

cambiar_flecha(boton_terminos)

//CAMBIAR EL ICONO PERO DESDE EL CLICK EN EL ICONO

const cambiar_flecha_desde_el_icono = (icono) => {
    icono.addEventListener("click", (e) => {
        if (icono.classList.contains("fa-angle-down")) {
            icono.classList.replace("fa-angle-down", "fa-angle-up");
        } else {
            icono.classList.replace("fa-angle-up", "fa-angle-down");
        }
    });
}



cambiar_flecha_desde_el_icono(icono_flecha_donde);
cambiar_flecha_desde_el_icono(icono_como_canjear);
cambiar_flecha_desde_el_icono(icono_terminos);
  */

/*

const cambiar_flecha = (boton) =>{

    boton.addEventListener("click",(e)=>{
        
        
        const icono = e.target.querySelector("i")
        if(icono.classList.contains("fa-angle-down")){
            icono.removeAttribute("class")
            icono.classList.add("fa-solid","fa-angle-up","i_preguntas")
        }
        else{
            icono.removeAttribute("class")
            icono.classList.add("fa-solid","fa-angle-down","i_preguntas")
        }
        
    })
}
*/

/*---------------------------------------------------------------------------------------------------------------------------------------------------------------------- */