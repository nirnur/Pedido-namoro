const botao = document.getElementById("pedidoBtn");
const mensagem = document.getElementById("mensagemAmor");

botao.addEventListener("click", () => {
    mensagem.style.display = "block";

    botao.textContent = "❤️ Melhor decisão da minha vida ❤️";

    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth"
    });
});