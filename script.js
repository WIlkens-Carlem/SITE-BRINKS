document.addEventListener('DOMContentLoaded', function() {
    const noButton = document.getElementById('no-button');
    const yesButton = document.getElementById('yes-button');
    const message = document.getElementById('message');
    
    // Função para mover o botão "Não" quando o mouse se aproxima
    document.addEventListener('mousemove', function(e) {
        const noButtonRect = noButton.getBoundingClientRect();
        const mouseX = e.clientX;
        const mouseY = e.clientY;
        
        // Calcula a distância entre o mouse e o centro do botão
        const buttonCenterX = noButtonRect.left + noButtonRect.width / 2;
        const buttonCenterY = noButtonRect.top + noButtonRect.height / 2;
        
        // Define uma distância de "segurança" para o botão começar a se mover
        const safeDistance = 100;
        
        const distanceX = mouseX - buttonCenterX;
        const distanceY = mouseY - buttonCenterY;
        const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
        
        // Se o mouse estiver próximo o suficiente, move o botão
        if (distance < safeDistance) {
            // Calcula a nova posição do botão (na direção oposta ao mouse) com velocidade aumentada
            const moveX = (distanceX / distance) * 200;
            const moveY = (distanceY / distance) * 200;
            
            // Obtém as dimensões da janela
            const windowWidth = window.innerWidth;
            const windowHeight = window.innerHeight;
            
            // Calcula a nova posição, garantindo que o botão não saia da tela
            let newLeft = noButtonRect.left - moveX;
            let newTop = noButtonRect.top - moveY;
            
            // Limita a posição para que o botão não saia da tela
            newLeft = Math.max(0, Math.min(windowWidth - noButtonRect.width, newLeft));
            newTop = Math.max(0, Math.min(windowHeight - noButtonRect.height, newTop));
            
            // Aplica a nova posição
            noButton.style.position = 'fixed';
            noButton.style.left = newLeft + 'px';
            noButton.style.top = newTop + 'px';
        }
    });
    
    // Evento de clique no botão "Sim"
    yesButton.addEventListener('click', function() {
        message.classList.remove('hidden');
        yesButton.textContent = 'Obrigado! ❤️';
        noButton.style.display = 'none';
        
        // Adiciona um pequeno atraso antes de redirecionar para o YouTube
        setTimeout(function() {
            window.location.href = 'https://www.youtube.com/shorts/h3l7FqfEpBA';
        }, 2000); // Redireciona após 2 segundos
    });
});