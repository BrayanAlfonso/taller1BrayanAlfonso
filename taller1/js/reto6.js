//Acceder al boton
let btnModal=document.getElementById("btncalACirculo");

//Aceder a la ventana modal
let ventanaModal=document.getElementById("ventanaModal");

//Aceder al boton de cierre de la ventana modal
let cerModal=document.querySelector(".cerrarModal");

let mensaje=document.getElementById("resultACirculo")

//Abrir la ventana Modal
btnModal.addEventListener("click", (e)=>{
    e.preventDefault();
    ventanaModal.style.display="block";

        let btnACirculo=document.getElementById("btnACirculo")
    btnACirculo.addEventListener("click", (e)=>{
        let radio=parseFloat(document.getElementById("ACirculo").value)

        e.preventDefault();
        let pi=3.14159
        let resultAC=pi*(radio*radio)

        let resultACirculo=document.getElementById("resultACirculo")
        resultACirculo.textContent="El area del circulo es "+resultAC
        mensaje.style.display = "block";
    })

})

//Cerrar la ventana Modal
cerModal.addEventListener("click", ()=>{
    ventanaModal.style.display="none";
    mensaje.style.display = "none";
})


//Acceder al boton
let btnModalCP=document.getElementById("btncalPCirculo");

//Aceder a la ventana modal
let ventanaModalCP=document.getElementById("ventanaModalCP");

//Aceder al boton de cierre de la ventana modal
let cerModalCP=document.querySelector(".cerrarModalCP");

let mensaje2=document.getElementById("resultACirculo")


btnModalCP.addEventListener("click", (e)=>{
    e.preventDefault();
    ventanaModalCP.style.display="block";
    let btnPCirculo=document.getElementById("btnPCirculo")
    btnPCirculo.addEventListener("click", "click", (e)=>{
        e.preventDefault();
    let radio=document.getElementById("PCirculo").value
    let pi=3.14159
    let resultPC=2*pi*radio
    resultPC.textContent="El perimetro del circulo es "+resultPC

})
})

cerModalCP.addEventListener("click", ()=>{
    ventanaModalCP.style.display="none";
 
})