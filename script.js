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
const naoBtn = document.getElementById("naoBtn");
const mensagemNao = document.getElementById("mensagemNao");

naoBtn.addEventListener("click", () => {
    mensagemNao.style.display = "block";
});
naoBtn.addEventListener("mouseover", () => {
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 50);

    naoBtn.style.position = "fixed";
    naoBtn.style.left = `${x}px`;
    naoBtn.style.top = `${y}px`;
});
