let cerrar = document.querySelectorAll(".cerrar")[0];
let abrir = document.querySelectorAll(".cerrarabrir")[0];
let modal = document.querySelectorAll(".modal")[0];
let modalC = document.querySelectorAll(".modal-contenedor")[0];

abrir.addEventListener("click", function (e) {
  // e.preventDefault();
  modalC.style.opacity = "1";
  modalC.style.visibility = "visible";
  modal.classList.toggle("cerrarmodal");
});

cerrar.addEventListener("click", function () {
  modal.classList.toggle("cerrarmodal");

  setTimeout(function () {
    modalC.style.opacity = "0";
    modalC.style.visibility = "hidden";
  }, 900);
});

window.addEventListener("click", function (e) {
  if (e.target == modalC) {
    modal.classList.toggle("cerrarmodal");

    setTimeout(function () {
      modalC.style.opacity = "0";
      modalC.style.visibility = "hidden";
    }, 900);
  }
});
