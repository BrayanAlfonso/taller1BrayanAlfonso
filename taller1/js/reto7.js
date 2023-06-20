//Acceder al checkBox
let checkBox = document.getElementById("Terminos");

//Aceder a la ventana modal
let ventanaModal = document.getElementById("ventanaModalTerm");

//Aceder al boton de cierre de la ventana modal
let cerModal = document.querySelector(".cerrarModalTerm");

//Abrir la ventana Modal para terminos y condiciones
checkBox.addEventListener("click", (e) => {
  e.preventDefault();
  ventanaModalTerm.style.display = "block";

  let btnAceptarTerm = document.getElementById("btnAceptarTerm");
  btnAceptarTerm.addEventListener("click", (e) => {
    e.preventDefault();
    ventanaModalTerm.style.display = "none";
    checkBox.checked = true;
  });

  let btnCancelarTerm = document.getElementById("btnCancelarTerm");
  btnCancelarTerm.addEventListener("click", (e) => {
    e.preventDefault();
    ventanaModalTerm.style.display = "none";
    checkBox.checked = false;
  });
});

//Cerrar la ventana Modal
cerModal.addEventListener("click", () => {
  ventanaModalTerm.style.display = "none";
});



//Definir las reglas de validación

const number=/^[0-9]{5,}$/
const text=/^[A-Za-z á-úÁ-ÚÑñ]{5,50}$/
const fechaLimite = new Date("01-01-2002");
const validacionEmail =/^[a-zA-Z0-9._%+-]+@misena\.edu\.co$/
const validacionPassword=/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*().-])[A-Za-z0-9!@#$%^&*().-]{10,}$/


//Acceder a los elementos que se van a alterar
const form=document.getElementById("formulario");


const feedback = document.querySelector("#inputNoDoc .feedback")
const feedback1 = document.querySelector("#inputName .feedback")
const feedback2 = document.querySelector("#inputLName .feedback")
const feedback3 = document.querySelector("#inputDate .feedback")
const feedback4 = document.querySelector("#inputEmail .feedback")
const feedback5 = document.querySelector("#inputPassword .feedback")
const feedback6 = document.querySelector("#inputConfirmPassword .feedback")
const feedback7 = document.querySelector(".SelectTipoDoc .feedback")


//Flags (para los feedback darles valores boolaneos)
let flag
let flag1
let flag2
let flag3
let flag4
let flag5
let flag6
let flag7
let flag8



// Accedemos a los inputs
const TpNoDoc = document.getElementById("TipoDoc");
const NoDoc = form.NoDoc.value;
const name = document.getElementById("name");
const lName = document.getElementById("lName");
const dateBirth = document.getElementById("dateBirth");
const email = document.getElementById("email");
const password = form.password.value;

// Evento y validación para el campo de número de documento

console.log(TpNoDoc);

TpNoDoc.addEventListener("change", (e) => {
  e.preventDefault();

  if (parseInt(TpNoDoc.value) === 0) {
    // Regla NO pasa la validación
    TpNoDoc.classList.add("error");
    feedback7.style.visibility = "visible";
    feedback7.style.opacity = "1";
    feedback7.textContent =
      "Selecciona un tipo de documento por favor";
    flag8 = false;
  } else {
    // Regla pasa la validación
    TpNoDoc.classList.add("succes");
    TpNoDoc.classList.remove("error");
    feedback7.style.visibility = "hidden";
    feedback7.style.opacity = "0";
    feedback7.textContent = "";
    flag8 = true;
  }
});


//Evento y validacion para el campo de numero de documento
form.NoDoc.addEventListener("input", e=>{
  

  if(number.test(e.target.value)){
    //Regla pasa la validación 
    form.NoDoc.setAttribute("class","succes")
    feedback.style.visibility= "hiden"
    feedback.style.opacity="0"
    feedback.textContent = ''
    flag=true
  }else{
    //Regla NO pasa la validación
    form.NoDoc.setAttribute("class","error")
    feedback.style.visibility= "visible"
    feedback.style.opacity="1"
    feedback.textContent = 'Solo se admiten valores númericos con una longitud de minimo 1 caracter y máximo de 15'
    flag=false
   }

});


//Evento y alidación para el campo de nombre
form.name.addEventListener("input", (e)=>{
  

  if(text.test(e.target.value)){
    //Regla pasa la validación 
    form.name.setAttribute("class","succes")
    feedback1.style.visibility= "hiden"
    feedback1.style.opacity="0"
    feedback1.textContent = ''
    flag1=true
  }else{
    //Regla NO pasa la validación
    form.name.setAttribute("class","error")
    feedback1.style.visibility= "visible"
    feedback1.style.opacity="1"
    feedback1.textContent = 'Solo se admiten valores alfanúmeericos con una longitud de minimo 10 caracter y máximo de 50'
    flag1=false
   }

});



//Evento y alidación para el campo de apellido
form.lName.addEventListener("input", (e)=>{
  
  if(text.test(e.target.value)){
    //Regla pasa la validación 
    form.lName.setAttribute("class","succes")
    feedback2.style.visibility= "hiden"
    feedback2.style.opacity="0"
    feedback2.textContent = ''
    flag2=true
  }else{
    //Regla NO pasa la validación
    form.lName.setAttribute("class","error")
    feedback2.style.visibility= "visible"
    feedback2.style.opacity="1"
    feedback2.textContent = 'Solo se admiten valores alfanúmeericos con una longitud de minimo 10 caracter y máximo de 50'
    flag2=false
   }

});






//Evento y alidación para el campo de fecha de nacimiento
form.dateBirth.addEventListener("change", (e)=>{
  
  const fechaIngresada = document.querySelector('#dateBirth').value;
  const parsedDate = new Date(fechaIngresada);
  console.log(parsedDate)

  console.log(fechaLimite)

  if(parsedDate<fechaLimite){
    //Regla pasa la validación 
    form.dateBirth.setAttribute("class","succes")
    feedback3.style.visibility= "hiden"
    feedback3.style.opacity="0"
    feedback3.textContent = ''
    flag3=true
  }else{
    //Regla NO pasa la validación
    form.dateBirth.setAttribute("class","error")
    feedback3.style.visibility= "visible"
    feedback3.style.opacity="1"
    feedback3.textContent = 'Debe ser mayor de 18 años para poderse registrar'
    flag3=false
   }

});






//Evento y alidación para el campo de email
form.email.addEventListener("change", (e)=>{

  if(validacionEmail.test(e.target.value)){
    //Regla pasa la validación 
    form.email.setAttribute("class","succes")
    feedback4.style.visibility= "hiden"
    feedback4.style.opacity="0"
    feedback4.textContent = ''
    flag4=true
  }else{
    //Regla NO pasa la validación
    form.email.setAttribute("class","error")
    feedback4.style.visibility= "visible"
    feedback4.style.opacity="1"
    feedback4.textContent = 'El dominio del correo electronico debe ser @misena.edu.co'
    flag4=false
   }

});




//Evento y alidación para el campo de contraseña
form.password.addEventListener("input", (e)=>{
  

  if(validacionPassword.test(e.target.value)){
    //Regla pasa la validación 
    form.password.setAttribute("class","succes")
    feedback5.style.visibility= "hiden"
    feedback5.style.opacity="0"
    feedback5.textContent = ''
    flag5=true
  }else{
    //Regla NO pasa la validación
    form.password.setAttribute("class","error")
    feedback5.style.visibility= "visible"
    feedback5.style.opacity="1"
    feedback5.textContent = 'La contraseña debe tener minimo una letra mayúscula, un número, una letra minúscula, un carácter y debe ser mínimo de 10 caracteres.'
    flag5=false
   }

});



//Evento y alidación para el campo de confirmar contraseña
form.ConfirmPassword.addEventListener("input", (e) => {
  const password = form.password.value;
  const ConfirmPassword = form.ConfirmPassword.value;
  console.log(password);
  console.log(ConfirmPassword);

  if (ConfirmPassword.trim().localeCompare(password.trim()) === 0) {
    // Regla pasa la validación
    form.ConfirmPassword.setAttribute("class", "succes");
    feedback6.style.visibility = "hidden";
    feedback6.style.opacity = "0";
    feedback6.textContent = "";
    flag6 = true;
  } else {
    // Regla NO pasa la validación
    form.ConfirmPassword.setAttribute("class", "error");
    feedback6.style.visibility = "visible";
    feedback6.style.opacity = "1";
    feedback6.textContent = "Las contraseñas no coinciden";
    flag6 = false;
  }
});







//Validación final para enviar formulario
form.addEventListener("submit", (e)=>{
  e.preventDefault()
  if(form.NoDoc.value==null || form.NoDoc.value==0 || flag==false){
      alert("Debe ingresar un numero de documento valido")
      form.NoDoc.focus()
      form.NoDoc.setAttribute("class","error")
  }else if(form.name.value==null || form.name.value==0 || flag1==false){
    alert("Debe ingresar un nombre valido")
    form.name.focus()
    form.name.setAttribute("class","error")
  }else if(form.lName.value==null || form.lName.value==0 || flag2==false){
    alert("Debe ingresar un apellido valido")
    form.lName.focus()
    form.lName.setAttribute("class","error")
  }else if(form.dateBirth.value==null || form.dateBirth.value==0 || flag3==false){
    alert("Debe ingresar una fecha de nacimiento valida")
    form.dateBirth.focus()
    form.dateBirth.setAttribute("class","error")

  }else if(form.email.value==null || form.email.value==0 || flag4==false){
    alert("Debe ingresar un correo electronico valido")
    form.email.focus()
    form.email.setAttribute("class","error")
  
  }else if(form.password.value==null || form.password.value==0 || flag5==false){
    alert("Debe ingresar una contraseña valida")
    form.password.focus()
    form.password.setAttribute("class","error")

  } 
else if (form.ConfirmPassword.value==null || form.ConfirmPassword.value==0 || flag6==false) {
    alert("Las contraseñas no coinciden");
    form.ConfirmPassword.focus();
    form.ConfirmPassword.setAttribute("class", "error");
  } else if(!form.Terminos.checked){
    alert("Debes aceptar los terminos y condiciones");

  
  }else if(TpNoDoc.value==0 || flag8==false || TpNoDoc.value==null ){
    alert("Debes elegir un tipo de documento valido");

  }
  else{
    form.submit()
  }
})
