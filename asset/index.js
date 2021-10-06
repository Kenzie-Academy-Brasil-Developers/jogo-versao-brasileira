//FOSTER
const tabelaArray = [
    [0,0,0,0,0,0], 
    [0,0,0,0,0,0],
    [0,0,0,0,0,0],
    [0,0,0,0,0,0],
    [0,0,0,0,0,0],
    [0,0,0,0,0,0],
    [0,0,0,0,0,0]
]

for (let i = 0; i <= 6; i ++){
    let tabela = document.getElementById('tabelaJogo')
    let addDiv = document.createElement('div')
    tabela.appendChild(addDiv);
    addDiv.className='coluna'
    addDiv.setAttribute("id", i)
}

let colunas = document.querySelectorAll('.coluna')

colunas.forEach(coluna => {
    coluna.addEventListener("click", addDisco)
});


//ROMULO

//Função de criação de novo disco
let novoDisco;
function addDisco(event) {
    console.log(event)
    let linhaAtual = document.getElementById(event.target.id)
    novoDisco = document.createElement('div')
    novoDisco.classList.add('disco')
    linhaAtual.appendChild(novoDisco)
    
    //FOSTER
    if (vezDoVermelho === true){
        tabelaArray[this.id][tabelaArray.lenght -1 -this.childElementCount] = 'Red'
    } else {
        tabelaArray[this.id][tabelaArray.lenght -1 -this.childElementCount] = 'Black'
      }
}


//Função para limitar quantidade de elementos em cada coluna
function colunaCheia(number) {
    let count = 0
    for (let i = 0; i < tabelaArray[number].length; i++) {
        if (tabelaArray[number][i] === 1 || tabelaArray[number][i] === 2) {
            count++
        }
    }
    if (count === 6) {
        return alertErro("A coluna nao pode receber mais discos")
    }
}


// ALLAN

// Alterna jogador

// CRIANDO LOCAL COM O TEXTO DA VEZ DO JOGADOR
const body = document.getElementsByTagName('BODY')[0]
const blocoVezdoJogador = document.createElement('div')
blocoVezdoJogador.id = 'blocoVezdoJogador'
blocoVezdoJogador.classList.add('blocoVezdoJogadorVermelho')
blocoVezdoJogador.innerText = 'Vez do jogador vermelhor'
body.appendChild(blocoVezdoJogador)



let vezDoVermelho = true // variavel que dirá se é a vez do jogador vermelho


function alternaJogador(bolinhaCriadano) { // a cada jogada será chamada essa função que intercalará a vez do jogador
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