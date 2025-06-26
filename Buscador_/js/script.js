// borde en las peliculas
let img= document.querySelectorAll('.img-fluid').forEach(img => {
    img.addEventListener('mouseenter', () => {
        img.classList.add('border', 'border-light', 'shadow')
    })
    img.addEventListener('mouseleave', () => {
        img.classList.remove('border', 'border-light', 'shadow')
    })
})

// modal con la info
let peliculas = document.querySelectorAll('.peliculas').forEach(img => {
    img.addEventListener('click', () => {
        const titulo = img.getAttribute('data-titulo')
        const descripcion = img.getAttribute('data-descripcion')

        document.getElementById('modalTitulo').textContent = titulo
        document.getElementById('modalDescripcion').textContent = descripcion

        const modal = new bootstrap.Modal(document.getElementById('modalPelicula'))
        modal.show()
    })
})



