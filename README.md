# Instagram Direct Mirror 🔄

Este projeto consiste em um script JavaScript projetado para ser executado no console do navegador (DevTools). Ele modifica o DOM do Instagram Web para inverter o layout das mensagens e suas respectivas cores.

## 🎯 Objetivo
Transformar visualmente uma conversa para que pareça que o print foi tirado pela outra pessoa. O script move as suas mensagens para a esquerda (cor cinza) e as mensagens recebidas para a direita (cor azul).

## 🚀 Como Funciona
O script atua diretamente no CSS e na estrutura de alinhamento do Instagram, realizando:
- Inversão do `flex-direction` e `align-items`.
- Troca forçada de `background-color` e `background-image` (removendo gradientes).
- Ajuste de cores de texto para garantir legibilidade (preto no cinza, branco no azul).
- Correção de direção de texto (`LTR` / `RTL`).

## 🛠️ Como usar
1. Vá para o **Instagram Web** e abra a conversa desejada.
2. Pressione `F12` (ou `Ctrl+Shift+I`) para abrir o Console.
3. Copie o código contido em `script.js` deste repositório.
4. Cole no console e pressione `Enter`.
5. Capture o seu print.

> **Aviso:** As alterações são temporárias e puramente visuais (lado do cliente). Ao atualizar a página (F5), o layout original será restaurado.

## 📂 Organização do Repositório
- `script.js`: Contém o código JavaScript funcional.
- `README.md`: Documentação do projeto.

## ⚖️ Licença
Este projeto está sob a licença [MIT](LICENSE).
