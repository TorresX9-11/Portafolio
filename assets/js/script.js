// Manejador de eventos para cuando el DOM está completamente cargado
document.addEventListener('DOMContentLoaded', () => {
    // Seleccionar todas las secciones y enlaces de navegación
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-list a');

    // Función para resaltar el elemento de navegación activo
    const highlightNavigation = () => {
        let currentSection = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.pageYOffset >= (sectionTop - sectionHeight / 3)) {
                currentSection = section.getAttribute('id');
            }
        });
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === currentSection) {
                link.classList.add('active');
            }
        });
    };

    // Agregar un listener para el evento de scroll
    window.addEventListener('scroll', highlightNavigation);

    // Crear un IntersectionObserver para las animaciones
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                entry.target.classList.remove('hidden');
            } else {
                entry.target.classList.remove('show');
            }
        });
    });

    // Agregar la clase 'hidden' a cada sección y observarlas con el IntersectionObserver
    document.querySelectorAll('.section').forEach(section => {
        section.classList.add('hidden');
        observer.observe(section);
    });

    // Agregar un listener de eventos al botón del menú para mostrar/ocultar el menú
    document.querySelector('.menu-toggle').addEventListener('click', () => {
        document.querySelector('.nav-list').classList.toggle('show');
    });

    // Agregar un listener de eventos a cada enlace de navegación para cerrar el menú al hacer clic
    document.querySelectorAll('.nav-list a').forEach(link => {
        link.addEventListener('click', () => {
            document.querySelector('.nav-list').classList.remove('show');
        });
    });
});
