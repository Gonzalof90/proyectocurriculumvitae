

let boton1 = document.getElementById("botonSobreMi")
let cuadroSobreMi = document.getElementById("cuadroSobreMi")
boton1.addEventListener("click",() =>{
    cuadroSobreMi.classList.toggle("seleccionado")
    })
    let boton2 = document.getElementById("botonContacto")
let cuadroContacto = document.getElementById("cuadroContacto")
boton2.addEventListener("click",() =>{
    cuadroContacto.classList.toggle("seleccionado")
    })