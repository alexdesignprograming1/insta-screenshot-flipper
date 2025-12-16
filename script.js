(function() {
    // 1. Inverte o lado
    const mainContainer = document.querySelector('div[role="main"]') || document.body;
    mainContainer.style.direction = 'rtl';

    const style = document.createElement('style');
    style.innerHTML = `
        /* Garante que o texto fique legível */
        div[role="button"], div[dir="auto"], span { 
            direction: ltr !important; 
            unicode-bidi: isolate;
        }

        /* --- CORES --- */

        /* AZUL (Padrão A) */
        div[class*="x1xr0vuk"][class*="x1jm4cbz"] {
            background-color: #0095f6 !important;
            background-image: none !important;
            color: white !important;
        }

        /* VERMELHO (Padrão B) */
        div[class*="x11jlvup"][class*="xpmdkuv"] {
            background-color: #303030 !important;
            background-image: none !important;
            color: white !important;
        }

        /* --- REMOVER FOTO DO LADO AZUL --- */

        /* Este seletor identifica especificamente o container da foto que você mandou */
        /* Ele procura a div que tem a largura de 35px (típico da foto de perfil no chat) */
        div.x1ga7v0g[style*="width: 35px"], 
        div.x1nhvcw1[style*="width: 35px"] {
            display: none !important;
        }

        /* Se você quiser que a foto apareça APENAS no vermelho, 
           vamos forçar ela a sumir de forma geral e reaparecer só lá */
        /* Mas para não ficar "tudo preto", vamos usar apenas invisibilidade: */
        
        .x10w94by img { 
            transform: scaleX(1) !important; 
        }
    `;
    document.head.appendChild(style);

    console.log("Script corrigido. Sem tela preta.");
})();
