document.addEventListener('DOMContentLoaded', function () {
  const links = document.querySelectorAll('a[href^="#"]');

  // Función para el desplazamiento suave
  function scrollToTarget(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    
    if (target) {
      // Verificar si el navegador soporta scroll suave
      if ('scrollBehavior' in document.documentElement.style) {
        // Soporte moderno para scroll suave
        target.scrollIntoView({ behavior: 'smooth' });
      } else {
        // Solución fallback en caso de que el navegador no soporte scroll suave
        target.scrollIntoView();
      }

      // Ajustar el desplazamiento si la barra de navegación es fija
      if (document.querySelector('.top-bar')) {
        window.scrollTo({
          top: target.offsetTop - document.querySelector('.top-bar').offsetHeight, // Ajusta según la altura de tu barra de navegación
          behavior: 'smooth'
        });
      }
    }
  }

  // Agregar el evento a todos los enlaces que comienzan con "#"
  links.forEach(link => {
    link.addEventListener('click', scrollToTarget);
  });
});
