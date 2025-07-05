
let img= document.querySelectorAll(".img-fluid")

const bontonAgregar= document.querySelector("#botonAgregar")
const formularioPerfil= document.querySelector("#formularioPerfil")

// borde en las peliculas
img.forEach(img => {
    img.addEventListener("mouseenter", () => {
        img.classList.add("border", "border-light")
    })
    img.addEventListener("mouseleave", () => {
        img.classList.remove("border", "border-light")
    })
})


bontonAgregar.addEventListener("click",() =>{
    console.log("Hiciste clic en Agregar Perfil")
})



