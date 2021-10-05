//FOSTER


for (let i = 0; i <= 6; i ++){
let tabela = document.getElementById('tabelaJogo')
let addDiv = document.createElement('div')
tabela.appendChild(addDiv);
addDiv.classList.add('coluna')
}

let colunas = document.querySelectorAll('coluna')

colunas.forEach(coluna => {
    coluna.addEventListener("click", addDisco)
});

// RÔMULO

//Função de criação de novo disco
let novoDisco;
function addDisco( coluna, linha) {
    let linhaAtual = document.getElementById(id)
    novoDisco = document.createElement('div')
    novoDisco.classList.add('disco')
    novoDisco.classList.add(coluna + "x" + linha)
    linhaAtual.appendChild(novoDisco)
}

// ALLAN

// Alterna jogador

// CRIANDO LOCAL COM O TEXTO DA VEZ DO JOGADOR
const body = document.getElementsByTagName('BODY')[0]
const blocoVezdoJogador = document.createElement('div')
blocoVezdoJogador.id = 'blocoVezdoJogador'
blocoVezdoJogador.classList.add('blocoVezdoJogadorVermelho')
blocoVezdoJogador.innerText = 'Vez do jogador vermelho'
body.appendChild(blocoVezdoJogador)


let vezDoVermelho = true // variavel que dirá se é a vez do jogador vermelho


function alternaJogador(bolinhaCriada) { // a cada jogada será chamada essa função que intercalará a vez do jogador
    if (vezDoVermelho === false) {
        vezDoVermelho = true
        blocoVezdoJogador.classList.remove('blocoVezdoJogadorPreto')
        blocoVezdoJogador.classList.add('blocoVezdoJogadorVermelho')
        blocoVezdoJogador.innerText = 'Vez do jogador vermelhor'
        bolinhaCriada.classList.remove('bolinhaPreta') // exemplo
        bolinhaCriada.classList.add('bolinhaVermelha') // exemplo
    } else {
        vezDoVermelho = false
        blocoVezdoJogador.classList.remove('blocoVezdoJogadorVermelho')
        blocoVezdoJogador.classList.add('blocoVezdoJogadorPreto')
        blocoVezdoJogador.innerText = 'Vez do jogador preto'
        bolinhaCriada.classList.remove('bolinhaVermelha') // exemplo
        bolinhaCriada.classList.add('bolinhaPreta') // exemplo
    }

    return vezDoVermelho // retorno da vez do jogador
}

//DANIEL