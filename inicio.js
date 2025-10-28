window.addEventListener("scroll", function () {
  const encabezado = document.getElementById("encabezado");
  if (window.scrollY > 50) {
    encabezado.style.backgroundColor = "#ffdfc5";
    encabezado.style.transition = "background-color 0.5s ease";
  } else {
    encabezado.style.backgroundColor = "#ffeedf";
  }
});
