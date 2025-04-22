// Función para validar el formulario de contacto
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        const fullNameInput = document.getElementById('fullName');
        const emailInput = document.getElementById('email');
        const phoneInput = document.getElementById('phone');
        const messageInput = document.getElementById('message');
        
        const fullNameError = document.getElementById('fullName-error');
        const emailError = document.getElementById('email-error');
        const phoneError = document.getElementById('phone-error');
        const messageError = document.getElementById('message-error');
        
        const formStatus = document.getElementById('form-status');
        
        // Función para validar el nombre completo
        function validateFullName() {
            const fullName = fullNameInput.value.trim();
            
            if (fullName === '') {
                fullNameError.textContent = 'El nombre completo es requerido';
                fullNameInput.classList.add('invalid');
                return false;
            } else if (fullName.length < 3) {
                fullNameError.textContent = 'El nombre debe tener al menos 3 caracteres';
                fullNameInput.classList.add('invalid');
                return false;
            } else {
                fullNameError.textContent = '';
                fullNameInput.classList.remove('invalid');
                return true;
            }
        }
        
        // Función para validar el email
        function validateEmail() {
            const email = emailInput.value.trim();
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            
            if (email === '') {
                emailError.textContent = 'El correo electrónico es requerido';
                emailInput.classList.add('invalid');
                return false;
            } else if (!emailRegex.test(email)) {
                emailError.textContent = 'Introduce un correo electrónico válido';
                emailInput.classList.add('invalid');
                return false;
            } else {
                emailError.textContent = '';
                emailInput.classList.remove('invalid');
                return true;
            }
        }
        
        // Función para validar el número de teléfono
        function validatePhone() {
            const phone = phoneInput.value.trim();
            const phoneRegex = /^(\+?56)?(\s?)(0?9)(\s?)[9876543]\d{7}$/;
            
            if (phone === '') {
                phoneError.textContent = 'El número de teléfono es requerido';
                phoneInput.classList.add('invalid');
                return false;
            } else if (!phoneRegex.test(phone)) {
                phoneError.textContent = 'Introduce un número de teléfono chileno válido (ej: +56 9 1234 5678)';
                phoneInput.classList.add('invalid');
                return false;
            } else {
                phoneError.textContent = '';
                phoneInput.classList.remove('invalid');
                return true;
            }
        }
        
        // Eventos para validación en tiempo real
        fullNameInput.addEventListener('blur', validateFullName);
        emailInput.addEventListener('blur', validateEmail);
        phoneInput.addEventListener('blur', validatePhone);
        
        // Evento para formatear el número de teléfono
        phoneInput.addEventListener('input', function(e) {
            let input = e.target.value.replace(/\D/g, '');
            
            if (input.length > 0) {
                if (input.length <= 9) {
                    if (input.length === 9) {
                        input = input.replace(/(\d{1})(\d{8})/, '$1 $2');
                    }
                } else {
                    input = input.substring(0, 11);
                    input = input.replace(/(\d{2})(\d{1})(\d{8})/, '+$1 $2 $3');
                }
            }
            
            e.target.value = input;
        });
        
        // Manejo del envío del formulario
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Validar todos los campos
            const isFullNameValid = validateFullName();
            const isEmailValid = validateEmail();
            const isPhoneValid = validatePhone();
            
            // Si todos los campos son válidos
            if (isFullNameValid && isEmailValid && isPhoneValid) {
                // Simular envío de formulario
                formStatus.textContent = 'Mensaje enviado con éxito. ¡Gracias por contactarme!';
                formStatus.className = 'form-status success';
                
                // En un caso real, aquí enviarías los datos a un servidor
                // usando fetch() o formData y una API de backend
                
                // Resetear formulario después de 3 segundos
                setTimeout(() => {
                    contactForm.reset();
                    formStatus.style.display = 'none';
                }, 3000);
            } else {
                formStatus.textContent = 'Por favor, corrige los errores en el formulario.';
                formStatus.className = 'form-status error';
            }
        });
    }
});
