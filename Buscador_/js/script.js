// --- Variables globales ---
const img = document.querySelectorAll(".bordeBlanco")
const btnAgregarPerfil = document.querySelector("#botonAgregar")
const btnActivarModoEdicion = document.querySelector("#eliminarperfil")
const accionesEdicion = document.querySelector("#acciones-edicion")
const btnCancelarCambios = document.querySelector("#cancelarCambios")
const btnGuardarCambios = document.querySelector("#guardarCambios")
const contenedorPerfiles = document.querySelector("#contenedor-perfiles")
const modalPerfil = document.querySelector("#modalPerfil")
const btnCancelarAgregar = document.querySelector("#cancelarAgregar")
const imagenesDePerfil = document.querySelectorAll(".perfil-opcion")
const btnGuardarPerfil = document.querySelector("#guardarPerfil")
const inputNombre = document.querySelector("#inputNombre")
const inputImagen = document.querySelector("#inputImagen")

const peliculas = document.querySelectorAll(".peliculas")
const modalPelicula = document.querySelector("#modalPelicula")
const modalTitulo = document.querySelector("#modalTitulo")
const modalDescripcion = document.querySelector("#modalDescripcion")
const btnCerrarModal = document.querySelector("#btnCerrarModal")

const params = new URLSearchParams(window.location.search)
const generoFiltrado = params.get("genero")

const contenedorPeliculas = document.querySelector("#contenedorPeliculas")
const tituloGenero = document.querySelector("#tituloGenero")

const inputBuscar = document.querySelector("#inputBuscar")
const btnBuscar = document.querySelector("#btnBuscar")
const btnLimpiar = document.querySelector("#btnLimpiar")


// Solo creo el modal si existe en la página
let modal = null
if (modalPelicula) {
    modal = new bootstrap.Modal(modalPelicula)
}

//Datos peliculas
const infoPeliculas = [
    {
        titulo: "Bajo La Misma Estrella",
        descripcion:"Hazel y Augustus se conocen en un grupo de apoyo para jóvenes con cáncer. Lo que empieza como una amistad tímida se convierte en una historia de amor profunda, intensa y conmovedora. Juntos se embarcan en un viaje que cambiará sus vidas para siempre, desafiando el dolor con humor, valentía y mucho corazón..",
        imagen: "img/bajolamismaestrella.jpg",
        genero: ["romance"]
    },
    {
        titulo: "Pixeles",
        descripcion: "Cuando unos alienígenas malinterpretan las señales de videojuegos clásicos como una amenaza, atacan la Tierra usando versiones gigantes de Pac-Man, Donkey Kong y más. Ahora, un grupo de gamers retirados deberá salvar al mundo… ¡jugando! Una aventura divertida, llena de nostalgia ochentosa y efectos espectaculares.",
        imagen: "img/pixeles.jpg",
        genero: ["comedia", "fantasia"]
    },
    {
        titulo: "Antes De Ti",
        descripcion: "Louisa, una chica alegre y sin rumbo claro, consigue trabajo cuidando a Will, un joven exitoso que quedó en silla de ruedas tras un accidente. Aunque al principio chocan, poco a poco nace entre ellos una conexión única. Juntos descubrirán que incluso en el dolor puede florecer el amor… y cambiar una vida para siempre.",
        imagen: "img/antesdeti.jpg",
        genero: ["romance"]
    },
    {
        titulo: "Viaje Al Centro De La Tierra",
        descripcion: "Cuando un excéntrico científico y su sobrino siguen las pistas de un antiguo libro, se embarcan en una expedición que los lleva a un mundo oculto bajo la superficie del planeta. Criaturas increíbles, paisajes imposibles y peligros inesperados los esperan en esta aventura épica inspirada en la novela de Julio Verne.",
        imagen: "img/viajealcentrodelatierra.jpg",
        genero: ["aventura"]
    },
    {
        titulo: "Lucy",
        descripcion: "Lucy, una joven atrapada en un negocio de tráfico de drogas, se convierte accidentalmente en una súper humana al absorber una sustancia experimental. A medida que su capacidad cerebral aumenta, desarrolla habilidades físicas y mentales extraordinarias… pero el tiempo corre, y su evolución no tiene vuelta atrás.",
        imagen: "img/lucy.jpg",
        genero: ["accion"]

    },
    {
        titulo: "avatar",
        descripcion: "En el mundo de Pandora, un exmarine paralítico recibe una segunda oportunidad al controlar un cuerpo avatar. Allí descubrirá una cultura fascinante y una lucha por defender su tierra. Lo que empieza como una misión militar, se transforma en una conexión profunda con la naturaleza, el amor y la resistencia.",
        imagen: "img/avatar.jpg",
        genero: ["fantasia", "aventura"]
    },
    {
        titulo: "titanic",
        descripcion: "A bordo del lujoso Titanic, Rose, una joven aristócrata, conoce a Jack, un artista sin recursos. Su historia de amor inesperada florece entre clases sociales y tragedia, mientras el barco se dirige hacia su destino fatal. Un romance inolvidable marcado por la belleza, el drama y la historia.",
        imagen: "img/titanic.jpg",
        genero: ["romance", "accion"]
    },
    {
        titulo: "Coco",
        descripcion: "Miguel, un niño con el sueño de ser músico, se embarca en una aventura mágica en la Tierra de los Muertos. Allí descubre secretos familiares, la importancia de la memoria y el verdadero significado de seguir tu pasión sin olvidar tus raíces.",
        imagen: "img/coco.jpg",
        genero: ["comedia", "fantasia", "aventura"]
    },
    {
        titulo: "John Wick",
        descripcion: "Después de perder a su esposa y sufrir una traición devastadora, John Wick, un exasesino legendario, regresa del retiro para desatar una venganza imparable. Con estilo, precisión y furia, nadie está a salvo cuando vuelve al juego.",
        imagen: "img/johnwick.jpg",
        genero: ["accion", "aventura"] 
    },
    {
        titulo:"king kong",
        descripcion: "Un grupo de exploradores viaja a una isla misteriosa y encuentra a Kong, un gigantesco gorila que protege su territorio. Pero cuando intentan llevarlo a la civilización, desatan una tragedia. Una historia de poder, belleza y la bestia más famosa del cine.",
        imagen: "img/kingkong.jpg",
        genero: ["accion",] 
        
    },
    {
        titulo: alt="Harry Potter" ,
        descripcion: "Después de vivir años con sus crueles tíos, Harry Potter descubre que es un mago y entra a Hogwarts, una escuela llena de magia, misterios y peligros. Mientras enfrenta nuevos amigos y enemigos, deberá proteger un secreto que podría cambiarlo todo.",
        imagen: "img/harry.jpg",
        genero: ["fantasia", "aventura"] 
    },
    {
        titulo: "it",
        descripcion: "trata sobre un grupo de amigos que, de niños y luego de adultos, enfrentan a una criatura que adopta la forma de sus peores miedos, casi siempre como el payaso Pennywise, en el pueblo de Derry.",
        imagen: "img/I T.jpg",
        genero: ["terror"] 
    }
    
    
]

// --- Funciones auxiliares 

// Muestra / oculta todos los tachitos de eliminar perfil
function mostrarOcultarTachitos(mostrar) {
    const botonesEliminar = document.querySelectorAll(".btn-eliminar")
    botonesEliminar.forEach(boton => {
        if (mostrar) {
            boton.classList.remove("d-none")
        } else {
            boton.classList.add("d-none")
        }
    })
}

// Muestra / oculta la UI del modo edición
function mostrarOcultarModoEdicion(activo) {
    if (activo) {
        btnAgregarPerfil.classList.add("d-none")
        btnActivarModoEdicion.classList.add("d-none")
        accionesEdicion.classList.remove("d-none")
    } else {
        btnAgregarPerfil.classList.remove("d-none")
        btnActivarModoEdicion.classList.remove("d-none")
        accionesEdicion.classList.add("d-none")
    }
}

// Entra al modo edicion
function entrarModoEdicion() {
    mostrarOcultarTachitos(true)
    mostrarOcultarModoEdicion(true)
}

// Sale del modo edicion
function salirModoEdicion() {
    mostrarOcultarTachitos(false)
    mostrarOcultarModoEdicion(false)
}

// Devuelve todos los perfiles marcados para eliminar
function perfilesMarcados() {
    return document.querySelectorAll(".marcar-para-eliminar")
}

// Cambiar título según género 
function capitalize(s) {
    return s.charAt(0).toUpperCase() + s.slice(1)
}

// Función para mostrar pelis filtradas
function mostrarPeliculas(peliculas) {
    if (!contenedorPeliculas) return  // si no existe, no hace nada

    contenedorPeliculas.innerHTML = ""  // limpia todo
    peliculas.forEach((peli, index) => {
        const col = document.createElement("div")
        col.classList.add("col", "text-center")
        col.innerHTML = `
            <img src="${peli.imagen}" 
                alt="${peli.titulo}" 
                class="peliculas bordeBlanco img-fluid rounded cursor-pointer"
                data-index="${index}">
        `
        contenedorPeliculas.appendChild(col)
    })

    // Volver a asignar eventos para mostrar modal (si existe el modal)
    const pelisImgs = document.querySelectorAll(".peliculas")
    pelisImgs.forEach(img => {
        img.addEventListener("click", () => {
            const idx = parseInt(img.dataset.index)
            const peli = peliculas[idx]
            if (modalTitulo && modalDescripcion && modal) {
                modalTitulo.textContent = peli.titulo
                modalDescripcion.textContent = peli.descripcion
                modal.show()
            }
        })
    })
}

// --- Eventos iniciales 

// Agrega o quita borde blanco al pasar el mouse sobre imágenes
img.forEach(imagen => {
    imagen.addEventListener("mouseenter", () => {
        imagen.classList.add("border", "border-light")
    })
    imagen.addEventListener("mouseleave", () => {
        imagen.classList.remove("border", "border-light")
    })
})

// Activa modo edición al hacer click en el botón
if (btnActivarModoEdicion) {
    btnActivarModoEdicion.addEventListener("click", entrarModoEdicion)
}

// Marca un perfil para eliminar al hacer click en su tachito
if (contenedorPerfiles) {
    contenedorPerfiles.addEventListener("click", function (e) {
        const boton = e.target.closest(".btn-eliminar")
        if (boton) {
            const perfil = boton.closest(".col")
            perfil.classList.add("marcar-para-eliminar", "opacity-75")
        }
    })
}

// Guarda cambios: elimina perfiles marcados
if (btnGuardarCambios) {
    btnGuardarCambios.addEventListener("click", () => {
        perfilesMarcados().forEach(perfil => perfil.remove())
        salirModoEdicion()
    })
}

// Cancela cambios: desmarca perfiles y sale de edición
if (btnCancelarCambios) {
    btnCancelarCambios.addEventListener("click", () => {
        perfilesMarcados().forEach(perfil => {
            perfil.classList.remove("marcar-para-eliminar", "opacity-75")
        })
        salirModoEdicion()
    })
}

// --- Modal agregar perfil 

// Muestra modal al hacer click en "Agregar"
if (btnAgregarPerfil) {
    btnAgregarPerfil.addEventListener("click", () => {
        modalPerfil.classList.remove("d-none")
    })
}

// Oculta modal al hacer click en "Cancelar"
if (btnCancelarAgregar) {
    btnCancelarAgregar.addEventListener("click", () => {
        modalPerfil.classList.add("d-none")
    })
}

// Selección de imagen de perfil
imagenesDePerfil.forEach(imagen => {
    imagen.addEventListener("click", () => {
        imagenesDePerfil.forEach(img => {
            img.classList.remove("border", "border-3", "border-danger")
        })
        imagen.classList.add("border", "border-3", "border-danger")
        inputImagen.value = imagen.dataset.src
    })
})

// Guardar nuevo perfil
if (btnGuardarPerfil) {
    btnGuardarPerfil.addEventListener("click", () => {
        const nombreValue = inputNombre.value.trim()
        const imagenValue = inputImagen.value

        if (nombreValue === "" || imagenValue === "") {
            alert("Por favor, completá el nombre y seleccioná una imagen.")
            return
        }

        // Crear perfil nuevo
        const nuevoPerfil = document.createElement("div")
        nuevoPerfil.classList.add("col", "perfil", "position-relative")

        const enlace = document.createElement("a")
        enlace.href = "buscador.html"

        const imagenPerfil = document.createElement("img")
        imagenPerfil.src = imagenValue
        imagenPerfil.alt = nombreValue
        imagenPerfil.classList.add("bordeBlanco", "img-fluid", "rounded-circle", "w-50")

        enlace.appendChild(imagenPerfil)
        nuevoPerfil.appendChild(enlace)

        const nombrePerfil = document.createElement("p")
        nombrePerfil.textContent = nombreValue
        nombrePerfil.classList.add("text-white", "lemon-regular", "mt-2")

        const botonEliminar = document.createElement("button")
        botonEliminar.classList.add(
            "btn", "btn-danger", "btn-sm", "btn-eliminar",
            "position-absolute", "top-0", "end-0", "m-2", "d-none"
        )

        const icono = document.createElement("i")
        icono.classList.add("fa-solid", "fa-trash")
        botonEliminar.appendChild(icono)

        nuevoPerfil.appendChild(nombrePerfil)
        nuevoPerfil.appendChild(botonEliminar)

        contenedorPerfiles.insertBefore(nuevoPerfil, btnAgregarPerfil)

        // Reset
        inputNombre.value = ""
        inputImagen.value = ""
        modalPerfil.classList.add("d-none")
    })
}

// --- Eventos para abrir modal de películas ---
if (peliculas.length && modal) {
    peliculas.forEach((pelicula, index) => {
        pelicula.addEventListener("click", () => {
            modalTitulo.textContent = infoPeliculas[index].titulo
            modalDescripcion.textContent = infoPeliculas[index].descripcion
            modal.show()
        })
    })
}

// --- Evento para cerrar modal ---
if (btnCerrarModal && modal) {
    btnCerrarModal.addEventListener("click", () => {
        modal.hide()
    })
}

// --- Filtrar pelis ---
const pelisFiltradas = generoFiltrado
    ? infoPeliculas.filter(peli => peli.genero.includes(generoFiltrado.toLowerCase()))
    : infoPeliculas

// --- Cambiar título según género ---


// Solo cambio el título si existe el elemento
if (tituloGenero) {
    tituloGenero.textContent = generoFiltrado
        ? `Películas de ${capitalize(generoFiltrado)}`
        : "Todas las películas"
}

// Evento del buscador (solo si existen los elementos) 
if (btnBuscar && inputBuscar && contenedorPeliculas) {
    btnBuscar.addEventListener("click", () => {
        const texto = inputBuscar.value.trim().toLowerCase()
        if (texto === "") return

        const resultados = infoPeliculas.filter(peli => {
            return peli.titulo.toLowerCase().includes(texto) ||
                peli.genero.some(g => g.includes(texto))
        })

        mostrarPeliculas(resultados)
    })
}

if (btnLimpiar && inputBuscar && contenedorPeliculas) {
    btnLimpiar.addEventListener("click", () => {
        inputBuscar.value = ""
        mostrarPeliculas(infoPeliculas)  // muestra todas de nuevo
    })
}

// Mostrar las pelis filtradas (o todas) al cargar la página
if (contenedorPeliculas) {
    mostrarPeliculas(pelisFiltradas)
}