
    

    // Efecto de cursor personalizado
    document.addEventListener('DOMContentLoaded', () => {
        const cursor = document.querySelector('.cursor');
        const cursorFollower = document.querySelector('.cursor-follower');
        const interactiveElements = document.querySelectorAll(
            'a, button, .project-card, .btn, input, textarea, select, [role="button"]'
        );
    
    // Añadir clase al html para ocultar cursor nativo
    document.documentElement.classList.add('has-custom-cursor');
    
    // Seguir movimiento del mouse
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = $;{e.clientX}px;
        cursor.style.top = $;{e.clientY}px;
        cursorFollower.style.left = $;{e.clientX}px;
        cursorFollower.style.top = $;{e.clientY}px;
    });
    
    // Efectos al interactuar
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.classList.add('hover-cursor-effect');
            cursorFollower.classList.add('hover-cursor-effect-follower');
        });
        
        el.addEventListener('mouseleave', () => {
            cursor.classList.remove('hover-cursor-effect');
            cursorFollower.classList.remove('hover-cursor-effect-follower');
        });
    });
    
    // Ocultar cursor cuando salga de la ventana
    document.addEventListener('mouseout', () => {
        cursor.style.opacity = '0';
        cursorFollower.style.opacity = '0';
    });
    
    document.addEventListener('mouseover', () => {
        cursor.style.opacity = '1';
        cursorFollower.style.opacity = '1';
    });
    
    // Inicializar posición
    cursor.style.opacity = '0';
    cursorFollower.style.opacity = '0';
});
    document.addEventListener('DOMContentLoaded', function() {
        // Smooth scrolling para enlaces internos
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    const headerHeight = document.querySelector('.header').offsetHeight;
                    const targetPosition = targetElement.offsetTop - headerHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                    
                    // Cerrar menú móvil si está abierto
                    const navList = document.querySelector('.nav-list');
                    if (navList.classList.contains('active')) {
                        toggleMobileMenu();
                    }
                }
            });
        });
        
        // Toggle del menú móvil
        const menuToggle = document.querySelector('.menu-toggle');
        if (menuToggle) {
            menuToggle.addEventListener('click', toggleMobileMenu);
        }
        
        function toggleMobileMenu() {
            const navList = document.querySelector('.nav-list');
            const menuIcon = document.querySelector('.menu-toggle i');
            
            navList.classList.toggle('active');
            
            if (navList.classList.contains('active')) {
                menuIcon.classList.remove('fa-bars');
                menuIcon.classList.add('fa-times');
                document.body.style.overflow = 'hidden';
            } else {
                menuIcon.classList.remove('fa-times');
                menuIcon.classList.add('fa-bars');
                document.body.style.overflow = '';
            }
        }
        
        // Añadir clase active al elemento de navegación actual
        const sections = document.querySelectorAll('section');
        const navItems = document.querySelectorAll('.nav-list a');
        
        window.addEventListener('scroll', function() {
            let current = '';
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                const headerHeight = document.querySelector('.header').offsetHeight;
                
                if (pageYOffset >= (sectionTop - headerHeight - 50)) {
                    current = section.getAttribute('id');
                }
            });
            
            navItems.forEach(item => {
                item.classList.remove('active');
                if (item.getAttribute('href') === '#$({current}') 
                    {
                    item.classList.add('active');
                    }
                });
            });
        
        // Animaciones para las tarjetas de proyectos
        const animateProjectCards = function() {
            const projectCards = document.querySelectorAll('.project-card');
            
            projectCards.forEach((card, index) => {
                const cardPosition = card.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;
                
                if (cardPosition < windowHeight - 100) {
                    // Animación escalonada para cada tarjeta
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, index * 150);
                }
            });
        };
        
        // Configurar animaciones iniciales para proyectos
        document.querySelectorAll('.project-card').forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease, box-shadow 0.3s ease';
        });
        
        
        window.addEventListener('scroll', animateProjectCards);
        animateProjectCards(); // Ejecutar una vez al cargar la página
        

        //////////////////////////////////
        // // Opcional: Efecto hover más elaborado para las tarjetas
        // document.querySelectorAll('.project-card').forEach(card => {
        //     card.addEventListener('mouseenter', function() {
        //         this.querySelector('.project-links a').style.transform = 'translateY(0)';
        //     });
            
        //     card.addEventListener('mouseleave', function() {
        //         this.querySelector('.project-links a').style.transform = 'translateY(-3px)';
        //     });
        // });

        // // Efecto de cursor personalizado
        // const cursor = document.querySelector('.cursor');
        // const cursorFollower = document.querySelector('.cursor-follower');

        // document.addEventListener('mousemove', (e) => {
        //     cursor.style.left = e.clientX + 'px';
        //     cursor.style.top = e.clientY + 'px';
    
        //  // El follower tiene un ligero retraso para un efecto más suave
        // setTimeout(() => {
        //     cursorFollower.style.left = e.clientX + 'px';
        //     cursorFollower.style.top = e.clientY + 'px';
        //     }, 100);    
        // });

        // // Efectos al interactuar con elementos
        // document.querySelectorAll('a, button, .project-card').forEach(element => {
        //     element.addEventListener('mouseenter', () => {
        //         cursor.classList.add('active');
        //         cursorFollower.classList.add('active');
        //     });
            
        // element.addEventListener('mouseleave', () => {
        //     cursor.classList.remove('active');
        //     cursorFollower.classList.remove('active');
        //     });
        // });

        // // Ocultar cursor cuando no esté en la ventana
        // document.addEventListener('mouseout', () => {
        //     cursor.style.opacity = '0';
        //     cursorFollower.style.opacity = '0';
        // });

        // document.addEventListener('mouseover', () => {
        //     cursor.style.opacity = '1';
        //     cursorFollower.style.opacity = '1';
        // });


    ///////////////////////////////////
    // Cargar proyectos dinámicamente (ejemplo)
    // fetchProjects();
    
    // function fetchProjects() {
    //     fetch('projects.json')
    //         .then(response => response.json())
    //         .then(data => {
    //             const projectsGrid = document.querySelector('.projects-grid');
    //             projectsGrid.innerHTML = '';
    //             
    //             data.forEach(project => {
    //                 const projectCard = document.createElement('div');
    //                 projectCard.className = 'project-card';
    //                 projectCard.innerHTML = `
    //                     <div class="project-image">
    //                         <img src="${project.image}" alt="${project.title}">
    //                     </div>
    //                     <div class="project-info">
    //                         <h3>${project.title}</h3>
    //                         <p>${project.description}</p>
    //                         <div class="project-links">
    //                             <a href="${project.github}"><i class="fab fa-github"></i></a>
    //                             <a href="${project.demo}"><i class="fas fa-external-link-alt"></i></a>
    //                         </div>
    //                     </div>
    //                 `;
    //                 projectsGrid.appendChild(projectCard);
    //             });
    //         })
    //         .catch(error => console.error('Error loading projects:', error));
    // }
    });
;