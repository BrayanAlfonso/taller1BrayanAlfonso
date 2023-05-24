let btncal=document.getElementById("btncal");
btncal.addEventListener("click", function(){
    let lado1=parseFloat(document.getElementById("lado1").value);
    let lado2=parseFloat(document.getElementById("lado2").value);
    let lado3=parseFloat(document.getElementById("lado3").value);
    
    if(lado1===lado2 && lado2===lado3){
        alert(`Este triangulo tiene medidas que corresponden a un triangulo equilatero, ya que todos sus lados son iguales`)
    }else if(lado1==lado2 || lado1==lado3 || lado2==3){
        alert (`Este triangulo tiene medidas que corresponden a un triangulo isóceles, ya que al menos dos de sus lados son iguales`)
    }else{
        alert(`Este triangulo tiene medidas que corresponden a un triangulo escaleno, ya que ninguno de sus lados son iguales`)
    }
})
