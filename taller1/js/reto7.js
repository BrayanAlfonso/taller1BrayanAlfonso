//Acceder al checkBox
let checkBox = document.getElementById("Terminos");

//Aceder a la ventana modal
let ventanaModal = document.getElementById("ventanaModalTerm");

//Aceder al boton de cierre de la ventana modal
let cerModal = document.querySelector(".cerrarModalTerm");

//Abrir la ventana Modal
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




//Comprobacion de contraseña
let btnCal = document.getElementById("btncal");
btnCal.addEventListener("click", (e) => {
  e.preventDefault();
  // Traer valores de los inputs
  let contraseña = document.getElementById("password").value;
  let confirmContraseña = document.getElementById("ConfirmPassword").value;

  if (contraseña !== confirmContraseña) {
    document.getElementById("mensajeError").textContent = "Las contraseñas no coinciden";
  } else {
    document.getElementById("mensajeError").textContent = "";
    document.getElementById("formulario").submit();
  }
});
