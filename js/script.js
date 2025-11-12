
// Função para mostrar mensagem de confirmação do formulário
function showMessage() {
    // Simula o envio do formulário
    const confirmationMessage = document.getElementById('confirmation-message');
    const form = document.querySelector('form');
    
    // Remove a classe d-none (Bootstrap) para mostrar a mensagem
    confirmationMessage.classList.remove('d-none');
    
    // Limpa o formulário
    form.reset();
    
    // Oculta a mensagem após 5 segundos
    setTimeout(() => {
        confirmationMessage.classList.add('d-none');
    }, 5000);

    // Rola a página de volta para a mensagem
    confirmationMessage.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// Smooth scroll para links de navegação (funcionalidade adicional)
document.addEventListener('DOMContentLoaded', function() {
    // Adiciona smooth scroll para todos os links âncora
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                // Calcula offset para navbar fixa
                const navbarHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = targetElement.offsetTop - navbarHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});
    
