
const img= document.querySelectorAll(".img-fluid")

const botonAgregar = document.querySelector("#botonAgregar")
const botonEliminar = document.querySelector("#eliminarperfil")
const botonesBasura = document.querySelectorAll(".btn-eliminar")
const accionesEdicion = document.querySelector("#acciones-edicion")
const cancelarCambios = document.querySelector("#cancelarCambios")
const guardarCambios = document.querySelector("#guardarCambios")
const contenedorPerfiles = document.querySelector("#contenedor-perfiles")

let perfilMarcado = ""

// borde en las peliculas
img.forEach(img => {
    img.addEventListener("mouseenter", () => {
        img.classList.add("border", "border-light")
    })
    img.addEventListener("mouseleave", () => {
        img.classList.remove("border", "border-light")
    })
})


// eliminar perfil
function entrarModoEdicion() {
    for (let i = 0; i < botonesBasura.length; i++) {
        botonesBasura[i].classList.remove("d-none")
    }

    botonAgregar.classList.add("d-none")
    botonEliminar.classList.add("d-none")
    accionesEdicion.classList.remove("d-none")
}

function salirModoEdicion() {
    for (let i = 0; i < botonesBasura.length; i++) {
        botonesBasura[i].classList.add("d-none")
    }

    botonAgregar.classList.remove("d-none")
    botonEliminar.classList.remove("d-none")
    accionesEdicion.classList.add("d-none")
}

botonEliminar.addEventListener("click", entrarModoEdicion)

function perfilesMarcados() {
    let perfiles = document.querySelectorAll(".marcar-para-eliminar")
    return perfiles
}

// marcás el perfil para eliminar
contenedorPerfiles.addEventListener("click", function (e) {
    const boton = e.target.closest(".btn-eliminar")
    if (boton) {
        const perfil = boton.closest(".col")
        perfil.classList.add("marcar-para-eliminar", "opacity-75")
    }
})

// guarda todos los perfiles eliminados
guardarCambios.addEventListener("click", () => {
    perfilMarcado = perfilesMarcados()

    for (let i = 0; i < perfilMarcado.length; i++) {
        perfilMarcado[i].remove()
    } 

    salirModoEdicion()
})

// al cancelar sacás la marca de eliminar y el efecto
cancelarCambios.addEventListener("click", () => {
    perfilMarcado = perfilesMarcados()

    for (let i = 0; i < perfilMarcado.length; i++) {
        perfilMarcado[i].classList.remove("marcar-para-eliminar", "opacity-75")
    }

    salirModoEdicion()
})



