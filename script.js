document.addEventListener('DOMContentLoaded', function() {
    const noButton = document.getElementById('no-button');
    const yesButton = document.getElementById('yes-button');
    const message = document.getElementById('message');
    
    // Função para criar a pergunta de confirmação
    function criarPerguntaConfirmacao() {
        // Criar o container da pergunta de confirmação
        const confirmContainer = document.createElement('div');
        confirmContainer.id = 'confirm-container';
        confirmContainer.style.position = 'fixed';
        confirmContainer.style.top = '50%';
        confirmContainer.style.left = '50%';
        confirmContainer.style.transform = 'translate(-50%, -50%)';
        confirmContainer.style.backgroundColor = 'white';
        confirmContainer.style.padding = '20px';
        confirmContainer.style.borderRadius = '15px';
        confirmContainer.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.3)';
        confirmContainer.style.textAlign = 'center';
        confirmContainer.style.zIndex = '1000';
        
        // Adicionar a pergunta
        const pergunta = document.createElement('h2');
        pergunta.textContent = 'Tem certeza?';
        pergunta.style.marginBottom = '20px';
        pergunta.style.color = '#333';
        
        // Criar container para os botões
        const botoesContainer = document.createElement('div');
        botoesContainer.style.display = 'flex';
        botoesContainer.style.justifyContent = 'center';
        botoesContainer.style.gap = '15px';
        
        // Botão Sim (pequeno)
        const simButton = document.createElement('button');
        simButton.textContent = 'Sim';
        simButton.style.padding = '8px 15px';
        simButton.style.backgroundColor = '#4CAF50';
        simButton.style.color = 'white';
        simButton.style.border = 'none';
        simButton.style.borderRadius = '50px';
        simButton.style.fontSize = '12px';
        simButton.style.fontWeight = 'bold';
        simButton.style.cursor = 'pointer';
        
        // Botão Não (maior)
        const naoButton = document.createElement('button');
        naoButton.textContent = 'Não';
        naoButton.style.padding = '15px 30px';
        naoButton.style.backgroundColor = '#f44336';
        naoButton.style.color = 'white';
        naoButton.style.border = 'none';
        naoButton.style.borderRadius = '50px';
        naoButton.style.fontSize = '18px';
        naoButton.style.fontWeight = 'bold';
        naoButton.style.cursor = 'pointer';
        
        // Adicionar eventos aos botões
        simButton.addEventListener('click', function() {
            document.body.removeChild(confirmContainer);
            // Redireciona para o vídeo do homem chorando
            window.location.href = 'https://www.youtube.com/watch?v=kwXQQ7UC2Mw';
        });
        
        naoButton.addEventListener('click', function() {
            document.body.removeChild(confirmContainer);
        });
        
        // Montar a estrutura
        botoesContainer.appendChild(simButton);
        botoesContainer.appendChild(naoButton);
        confirmContainer.appendChild(pergunta);
        confirmContainer.appendChild(botoesContainer);
        
        // Adicionar ao body
        document.body.appendChild(confirmContainer);
        
        return {
            container: confirmContainer,
            simButton: simButton,
            naoButton: naoButton
        };
    }
    
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
            const moveX = (distanceX / distance) * 400;
            const moveY = (distanceY / distance) * 400;
            
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
    
    // Evento de clique no botão "Não"
    noButton.addEventListener('click', function(e) {
        // Previne o comportamento padrão do botão
        e.preventDefault();
        
        // Cria a pergunta de confirmação
        const confirmacao = criarPerguntaConfirmacao();
        
        // Adiciona evento ao botão Sim da confirmação
        confirmacao.simButton.addEventListener('click', function() {
            // Se o usuário confirmar que tem certeza, esconde o botão "Não" original
            noButton.style.display = 'none';
        });
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