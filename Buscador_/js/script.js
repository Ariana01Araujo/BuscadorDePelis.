// borde en las peliculas
let img= document.querySelectorAll(".peliculas")

img.forEach(img => {
    img.addEventListener("mouseenter", () => {
        img.classList.add("border", "border-light", "shadow")
    })
    img.addEventListener("mouseleave", () => {
        img.classList.remove("border", "border-light", "shadow")
    })
})




