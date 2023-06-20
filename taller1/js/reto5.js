


let btncal=document.getElementById("btncal");
btncal.addEventListener("click", function(e){
    e.preventDefault();

    const mensaje=document.getElementById("mensaje")
    mensaje.style.color="white"


    let traerNombre=parseInt(document.getElementById("nombres").value);
    let traerApellido=parseInt(document.getElementById("apellidos").value);
    let traerMateria=parseInt(document.getElementById("materia").value);

    if(traerNombre==0 && traerApellido==0 &&traerMateria==0){
        mensaje.textContent="El resultado es correcto"
    }else if(traerNombre==1 && traerApellido==1 && traerMateria==1){
        mensaje.textContent="El resultado es correcto"
    }else if(traerNombre==2 && traerApellido==2 && traerMateria==2){
        mensaje.textContent="El resultado es correcto"
    }else if(traerNombre==3 && traerApellido==3 && traerMateria==3){
        mensaje.textContent="El resultado es correcto"
    }else if(traerNombre==4 && traerApellido==4 && traerMateria==4){
        mensaje.textContent="El resultado es correcto"
    }else if(traerNombre==5 && traerApellido==5 && traerMateria==5){
        mensaje.textContent="El resultado es correcto"
    }else if(traerNombre==6 && traerApellido==6 && traerMateria==6){
        mensaje.textContent="El resultado es correcto"
    }else if(traerNombre==7 && traerApellido==7 && traerMateria==7){
        mensaje.textContent="El resultado es correcto"
    }else{
        mensaje.textContent="El resultado es incorrecto"
    }
})