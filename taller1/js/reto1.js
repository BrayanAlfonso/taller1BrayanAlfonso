let btncal=document.getElementById("btncal")
btncal.addEventListener("click", 

function calcular(e){
    e.preventDefault();
    let palabra=document.getElementById("floatingInputWord").value;
    let opcion=parseInt(document.getElementById("opcion").value);

    switch(opcion){
        case 1:
            let longitud = palabra.length;
            alert(`La longitud de la palabra ${palabra } es de ${longitud}`)
        break;

        case 2:
            let maysuculas=palabra.toLocaleUpperCase();
            alert(`La palabra ${palabra } convertida en mayusculas es ${maysuculas}`);
        break;


        case 3:
            let minusculas=palabra.toLocaleLowerCase();
            alert(`La palabra ${palabra } convertida en minusculas es ${minusculas}`);
        break;


        case 4:
            let caracter=palabra.charAt(0);
            alert(`El primer caracter de la palabra ${palabra } es ${caracter}`);
        break;
    }
})