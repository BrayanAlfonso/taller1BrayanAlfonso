let btncal=document.getElementById("btncal");
btncal.addEventListener("click", function(){
    let convertirde=parseInt(document.getElementById("convertirde").value);
    let convertira=parseInt(document.getElementById("convertira").value);
    let inputconvertirde=parseFloat(document.getElementById("inputconvertirde").value);
 

    if(convertirde==1 && convertira==2){
        let Cel=(inputconvertirde-32.0)/1.8
        alert(`El resultado de convertir grados Fahrenheit a grados Celsius es ${Cel.toFixed(2)}`)

    }else if(convertirde==1 && convertira==3){
        let Kelv=(inputconvertirde+459.67)*5/9
        alert(`El resultado de convertir grados Fahrenheit a grados Kelvin es ${Kelv.toFixed(2)}`)

    }else if(convertirde==2 && convertira==1){
        let fah=(inputconvertirde*9/5)+32
        alert(`El resultado de convertir grados Celsius a grados Fahrenheit es ${fah.toFixed(2)}`) 

    }else if(convertirde==2 && convertira==3){
        let toKelv=inputconvertirde+273.15
        alert(`El resultado de convertir grados Celsius a grados Kelvin es ${toKelv.toFixed(2)}`) 
        
    }else if(convertirde==3 && convertira==1){
        let tofah=(inputconvertirde-273.15)*9/5+32
        alert(`El resultado de convertir grados Kelvin a grados Fahrenheit es ${tofah.toFixed(2)}`) 
    }else if(convertirde==3 && convertira==2){
        let toCel=inputconvertirde-273.15
        alert(`El resultado de convertir grados Kelvin a grados Celsius es ${toCel.toFixed(2)}`) 
    }


})