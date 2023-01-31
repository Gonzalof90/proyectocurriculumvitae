

let boton1 = document.getElementById("botonSobreMi")
let cuadroSobreMi = document.getElementById("cuadroSobreMi")
boton1.addEventListener("mousemove",() =>{
    cuadroSobreMi.style.backgroundColor = "lightblue";
    })
boton1.addEventListener("mouseout",() =>{
    cuadroSobreMi.style.backgroundColor = "";
    })
    boton1.addEventListener("mousemove",() =>{
        cuadroSobreMi.style.display = "block"})
  
        boton1.addEventListener("mouseout",() =>{
            cuadroSobreMi.style.display = "none"})
      

        // // boton1.removeEventListener("mouseout",
        // //             cuadroSobreMi.style.display = "block",true
        // //             )
   
        //     boton1.addEventListener("mouseout",() =>{
        //         boton1.removeEventListener("mousemove",
        //             cuadroSobreMi.style.display = "block",false
        //             )
        //         })
          
            

        






//     let boton2 = document.getElementById("botonContacto")
// let cuadroContacto = document.getElementById("cuadroContacto")
// boton2.addEventListener("click",() =>{
//     cuadroContacto.classList.toggle("seleccionado")
//     })