// Manejador de eventos para cuando el DOM está completamente cargado
// Este archivo maneja la navegación y las animaciones de la página.  Se utilizan eventos y un IntersectionObserver para optimizar el rendimiento.

document.addEventListener('DOMContentLoaded', () => {
    // Seleccionar todas las secciones y enlaces de navegación
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-list a');

    // Función para resaltar el elemento de navegación activo
    const highlightNavigation = () => {
        let currentSection = ''; // Variable para almacenar la sección actual
        sections.forEach(section => {
            const sectionTop = section.offsetTop; // Posición vertical de la sección
            const sectionHeight = section.clientHeight; // Altura de la sección
            // Comprobar si la sección está en la vista
            if (window.pageYOffset >= (sectionTop - sectionHeight / 3)) {
                currentSection = section.getAttribute('id'); // Obtener el ID de la sección
            }
        });
        navLinks.forEach(link => {
            link.classList.remove('active'); // Remover la clase 'active' de todos los enlaces
            // Agregar la clase 'active' al enlace correspondiente a la sección actual
            if (link.getAttribute('href').substring(1) === currentSection) {
                link.classList.add('active');
            }
        });
    };

    // Agregar un listener para el evento de scroll
    window.addEventListener('scroll', highlightNavigation); // Llamar a la función highlightNavigation en cada evento de scroll

    // Crear un IntersectionObserver para las animaciones
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            // Agregar la clase 'show' a la sección cuando entra en la vista
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                entry.target.classList.remove('hidden'); // Remover la clase 'hidden'
            } else {
                entry.target.classList.remove('show'); // Remover la clase 'show' cuando sale de la vista
            }
        });
    });

    // Agregar la clase 'hidden' a cada sección y observarlas con el IntersectionObserver
    document.querySelectorAll('.section').forEach(section => {
        section.classList.add('hidden'); // Agregar la clase 'hidden' inicialmente
        observer.observe(section); // Observar cada sección
    });

    // Agregar un listener de eventos al botón del menú para mostrar/ocultar el menú
    document.querySelector('.menu-toggle').addEventListener('click', () => {
        document.querySelector('.nav-list').classList.toggle('show'); // Mostrar u ocultar el menú
    });

    // Agregar un listener de eventos a cada enlace de navegación para cerrar el menú al hacer clic
    document.querySelectorAll('.nav-list a').forEach(link => {
        link.addEventListener('click', () => {
            document.querySelector('.nav-list').classList.remove('show'); // Ocultar el menú al hacer clic en un enlace
        });
    });
});
