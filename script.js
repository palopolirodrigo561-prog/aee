function abrirMenu() {
    const menu = document.getElementById("menu");
    const overlay = document.getElementById("menuOverlay");

    menu.classList.toggle("activo");
    if (overlay) {
        overlay.classList.toggle("activo");
    }
}

function mostrar(id) {
    const secciones = document.querySelectorAll(".seccion");

    secciones.forEach(sec => {
        sec.classList.remove("activa");
    });

    document.getElementById(id).classList.add("activa");

    // cierra el menú al elegir una sección (celular)
    const menu = document.getElementById("menu");
    const overlay = document.getElementById("menuOverlay");
    if (menu) menu.classList.remove("activo");
    if (overlay) overlay.classList.remove("activo");
}
