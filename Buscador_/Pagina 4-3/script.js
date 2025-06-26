let perfiles = JSON.parse(localStorage.getItem("perfiles"));

if (!perfiles || perfiles.length === 0) {
  perfiles = [
    { nombre: "Perfil 1", imagen: "perfilimagen1.jpg" },
    { nombre: "Perfil 2", imagen: "perfilimagen2.jpg" },
    { nombre: "Perfil 3", imagen: "perfilimagen3.jpg" }
  ];
  localStorage.setItem("perfiles", JSON.stringify(perfiles));
}


window.onload = () => {
  renderizarPerfiles();
};

function mostrarAgregar() {
  ocultarSecciones();
  document.getElementById("agregar").classList.remove("d-none");
}

function mostrarEliminar() {
  ocultarSecciones();
  document.getElementById("eliminar").classList.remove("d-none");
  renderizarEliminar();
}

function volverInicio() {
  ocultarSecciones();
  document.getElementById("inicio").classList.remove("d-none");
  renderizarPerfiles();
}

function ocultarSecciones() {
  document.querySelectorAll(".seccion").forEach(sec => sec.classList.add("d-none"));
}

let imagenSeleccionada = null;

function seleccionarFoto(img) {
  document.querySelectorAll(".img-perfil").forEach(el => el.classList.remove("selected"));
  img.classList.add("selected");
  imagenSeleccionada = img.getAttribute("src");
}

function guardarPerfil() {
  const nombre = document.getElementById("nombrePerfil").value.trim();

  if (!nombre || !imagenSeleccionada) {
    alert("Completá el nombre y seleccioná una foto.");
    return;
  }

  perfiles.push({ nombre, imagen: imagenSeleccionada });
  localStorage.setItem("perfiles", JSON.stringify(perfiles));

  document.getElementById("nombrePerfil").value = "";
  imagenSeleccionada = null;
  document.querySelectorAll(".img-perfil").forEach(el => el.classList.remove("selected"));

  volverInicio();
}

function renderizarPerfiles() {
  const contenedor = document.querySelector(".perfiles-list");
  contenedor.innerHTML = "";

  perfiles.forEach((perfil, index) => {
    contenedor.innerHTML += `
      <div class="col-6 col-sm-3">
        <div class="d-flex flex-column align-items-center">
          <img src="${perfil.imagen}" class="img-perfil mb-2">
          <p>${perfil.nombre}</p>
        </div>
      </div>
    `;
  });

  contenedor.innerHTML += `
    <div class="col-6 col-sm-3">
      <div class="agregar p-3" onclick="mostrarAgregar()">Agregar +</div>
    </div>
  `;
}

function renderizarEliminar() {
  const contenedor = document.querySelector(".eliminar-list");
  contenedor.innerHTML = "";

  perfiles.forEach((perfil, index) => {
    contenedor.innerHTML += `
      <div class="col-6 col-sm-3">
        <div class="perfil border border-3 rounded-4 p-3 position-relative d-flex flex-column align-items-center">
          <img src="${perfil.imagen}" class="img-perfil mb-2">
          ${perfil.nombre}
          <span class="cerrar" onclick="eliminarPerfil(${index})">X</span>
        </div>
      </div>
    `;
  });
}

function eliminarPerfil(index) {
  if (confirm("¿Estás segura de eliminar este perfil?")) {
    perfiles.splice(index, 1);
    localStorage.setItem("perfiles", JSON.stringify(perfiles));
    renderizarEliminar();
  }
}

function guardarEliminacion() {
  volverInicio();
}
