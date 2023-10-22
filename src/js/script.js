const botoes = document.querySelectorAll(".botao");
const personagens = document.querySelectorAll(".conteudo-personagem")

botoes.forEach((botao, indice) => {
    botao.addEventListener("click", () => {

        desselecionarBotao();
        desselecionarPersonagem();
        
        personagens[indice].classList.add("selecionado");
        botao.classList.add("selecionado");
    });
})

function desselecionarBotao() {
    const botaoSelecionado = document.querySelector(".botao.selecionado");
    botaoSelecionado.classList.remove("selecionado")
}

function desselecionarPersonagem() {
    const personagemSelecionado = document.querySelector(".conteudo-personagem.selecionado");
    personagemSelecionado.classList.remove("selecionado");
}

