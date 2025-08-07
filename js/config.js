// =================================================================
//      CONFIGURACIÓN DEL MODO MANTENIMIENTO
// =================================================================
const MANTENIMIENTO_CONFIG = {
    // --- MANTENIMIENTO GLOBAL ---
    // Si global = 1, TODO el sitio se va a mantenimiento.
    global: 0,
    
    // --- MANTENIMIENTO DE PÁGINAS INTERNAS ---
    // Cambia a 1 para poner una página específica en mantenimiento.
    // Usa el archivo: mantenimiento.html
    paginas: {
        index: 0,
        informativo: 0,
        institucion: 0,
        pastoral: 0,
        plataforma: 0
    },

    // --- MANTENIMIENTO DE ENLACES EXTERNOS ---
    // Cambia a 1 si el servicio externo está en mantenimiento.
    // Usa el archivo: mantenimientoEnlace.html
    enlaces_externos: {
        aula_virtual: 1,
        calificaciones: 0
    }
};

// --- Lógica para PÁGINAS INTERNAS (No editar) ---
(function() {
    const path = window.location.pathname;
    const currentPageFile = path.substring(path.lastIndexOf('/') + 1);
    
    // Evita que las páginas de mantenimiento se redirijan a sí mismas
    if (currentPageFile.includes('mantenimiento')) {
        return;
    }

    const currentPageName = currentPageFile.replace('.html', '') || 'index';
    
    const paginaEnMantenimiento = MANTENIMIENTO_CONFIG.paginas.hasOwnProperty(currentPageName) && MANTENIMIENTO_CONFIG.paginas[currentPageName] === 1;
    const globalEnMantenimiento = MANTENIMIENTO_CONFIG.global === 1;

    if (globalEnMantenimiento || paginaEnMantenimiento) {
        // Redirige a mantenimiento.html
        let redirectPath = path.includes('/pages/') ? 'mantenimiento.html' : 'pages/mantenimiento.html';
        window.location.href = redirectPath;
    }
})();
