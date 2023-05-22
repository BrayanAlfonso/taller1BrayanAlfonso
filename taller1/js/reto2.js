//El evento de ejemplo onclick donde llamamos el id del borton y hacemos una funcion para cuando ele vento ocurra
let onclik=document.getElementById("onclick");
onclik.addEventListener("click", function(){
 alert("Haz dado click en el boton!")
})

//El veneto
let mouseover=document.getElementById("mouseover");
mouseover.addEventListener("mouseover",function(){
    mouseover.style.backgroundColor="#03e9f4";
    mouseover.style.transform="scale(1.1)";
})
mouseover.addEventListener("mouseout",function(){
    mouseover.style.backgroundColor="#ffff";
    mouseover.style.transform="scale(1)";
})

document.addEventListener("keydown",function(event){
    if(event.keyCode===13){
        alert('Se ha presionado la tecla enter')
    }
})

let input=document.getElementById("input");
input.addEventListener("focus",function(){
    alert("Has enfocado el input, ahora puedes digitar algo!")
})

input.addEventListener("blur",function(){
    alert("El input ha sido desenfocado, seleccionalo para escribir algo")
})

let dbclick=document.getElementById("dbclick");
dbclick.addEventListener("dblclick", function(){
    alert("se ha dado doble click en el boton")
})


window.addEventListener('scroll', function(){
    alert("Has desplazado la pagina con el scroll del mouse")
})

let drag=document.getElementById("drag");
drag.addEventListener("dragstart", function(){
    console.log("has iniciado a arrastrar el elemento")
})

drag.addEventListener("drag", function(){
    console.log("Estas arrastrando el elemento")
})

drag.addEventListener("dragend", function(){
    console.log("has terminado de arrastrar el elemento")
})

window.addEventListener("resize", function(){
   alert("La ventana se ha ajustado nuevamente")
})

window.addEventListener("load",function(){
    alert("La pagina se ha cargado completamente")
})

let onchange =document.getElementById("onchange");
onchange.addEventListener("change",function(){
    let opcion=onchange.value;
    alert(`se ha seleccionado la opcion: ${opcion}`)
})