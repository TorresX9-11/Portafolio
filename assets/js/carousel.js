// carousel.js
document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.carousel-3d');
    const slides = document.querySelectorAll('.carousel-slide');
    const prevBtn = document.querySelector('.carousel-control.prev');
    const nextBtn = document.querySelector('.carousel-control.next');
    
    let currentIndex = 0;
    const totalSlides = slides.length;
    
    // Inicializar el carrusel
    function initCarousel() {
        updateCarousel();
    }
    
    // Actualizar la posición del carrusel
    function updateCarousel() {
        // Ocultar todos los slides primero
        slides.forEach((slide, index) => {
            slide.style.opacity = '0';
            slide.style.transform = 'translateX(100%)';
            slide.style.zIndex = '0';
            slide.style.display = 'none';
        });
        
        // Mostrar el slide actual
        slides[currentIndex].style.display = 'block';
        slides[currentIndex].style.opacity = '1';
        slides[currentIndex].style.transform = 'translateX(0)';
        slides[currentIndex].style.zIndex = '2';
        
        // Mostrar el slide anterior (si existe)
        const prevIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        slides[prevIndex].style.display = 'block';
        slides[prevIndex].style.opacity = '0.6';
        slides[prevIndex].style.transform = 'translateX(-80%) scale(0.8)';
        slides[prevIndex].style.zIndex = '1';
        
        // Mostrar el siguiente slide (si existe)
        const nextIndex = (currentIndex + 1) % totalSlides;
        slides[nextIndex].style.display = 'block';
        slides[nextIndex].style.opacity = '0.6';
        slides[nextIndex].style.transform = 'translateX(80%) scale(0.8)';
        slides[nextIndex].style.zIndex = '1';
    }
    
    // Ir al slide anterior
    function goToPrev() {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        updateCarousel();
    }
    
    // Ir al siguiente slide
    function goToNext() {
        currentIndex = (currentIndex + 1) % totalSlides;
        updateCarousel();
    }
    
    // Event listeners para los botones
    prevBtn.addEventListener('click', goToPrev);
    nextBtn.addEventListener('click', goToNext);
    
    // Inicializar el carrusel al cargar la página
    initCarousel();
    
    // Opcional: Navegación con teclado
    document.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowLeft') {
            goToPrev();
        } else if (e.key === 'ArrowRight') {
            goToNext();
        }
    });
});