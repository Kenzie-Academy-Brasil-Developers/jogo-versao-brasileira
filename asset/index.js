//FOSTER
const tabelaArray = [
    [],
    [], 
    [],
    [],
    [],
    [],
    [],
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
    // console.log(event)
    let linhaAtual = document.getElementById(event.target.id)
    novoDisco = document.createElement('div')
    novoDisco.classList.add('disco')
    alternaJogador(novoDisco)
    linhaAtual.appendChild(novoDisco)

    codicaodeVitoriaHorizontal()
    //FOSTER
    if (vezDoVermelho === true){
        
        tabelaArray[this.id].push('Red')
    } else {
        tabelaArray[this.id].push('Black')
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

//FUNÇÃO DE VERIFICAÇÃO DE COMBINAÇÃO DIAGONAL PARA BAIXO
let possibilidades = [];
let combinacaoDiscos = 4;
const diagonalBaixo = () => {
    for (let i = 0; i < 4; i++) {
      for (let r = 0; r < 3; r++) {
        let combinacao = [];
        for (let j = 0; j < combinacaoDiscos; j++) {
          combinacao.push(tabelaArray[i + j][j + r]);
        }
        possibilidades.push(combinacao);
      }
    }
  };
  //FUNÇÃO DE VERIFICAÇÃO DE COMBINAÇÃO DIAGONAL PARA CIMA
  const diagonalCima = () => {
    for (let i = 3; i < 7; i++) {
      for (let r = 0; r < 3; r++) {
        let combinacao = [];
        for (let j = 0; j < combinacaoDiscos; j++) {
          combinacaoDiscos.push(tabelaArray[i - j][j + r]);
        }
        possibilidades.push(combinacao);
      }
    }
  };

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
        blocoVezdoJogador.innerText = 'Vez do jogador vermelho'
        bolinhaCriada.classList.remove('bolinhaVermelha') // exemplo
        bolinhaCriada.classList.add('bolinhaPreta') // exemplo

    } else {
        vezDoVermelho = false
        blocoVezdoJogador.classList.remove('blocoVezdoJogadorVermelho')
        blocoVezdoJogador.classList.add('blocoVezdoJogadorPreto')
        blocoVezdoJogador.innerText = 'Vez do jogador preto'
        bolinhaCriada.classList.remove('bolinhaPreta') // exemplo
        bolinhaCriada.classList.add('bolinhaVermelha') // exemplo

    }

    return vezDoVermelho // retorno da vez do jogador
}

function codicaodeVitoriaHorizontal() {

    for (let coluna = 0; coluna < colunas.length; coluna++) {    
        let filhosColuna = colunas[coluna].childNodes
        let contadorDeIgualdade = 0

        if (filhosColuna.length < 4) {
            continue
        } else {
            for (let celula = 1; celula < filhosColuna.length; celula++) {
                if (filhosColuna[celula - 1].className === filhosColuna[celula].className) {
                    contadorDeIgualdade++
                    
                    if (contadorDeIgualdade === 3) {
                        vitoria()
                        return true
                    }
                
                } else {
                    contadorDeIgualdade = 0
                }
            }
        }   
    }

    return false
}

function vitoria() {
    let jogador
    if (vezDoVermelho === false) {
        jogador = 'Vermelho'
    } else {
        jogador = 'Preto'
    }

    body.innerHTML = ''

    const blocoResultado = document.createElement('div')
    blocoResultado.classList.add('blocoResultado')
    
    const texto = document.createElement('h2')
    texto.classList.add('textoResultado')
    texto.innerHTML = `O jogador ${jogador} venceu!`
    blocoResultado.appendChild(texto)

    const botaoReiniciar = document.createElement('button')
    botaoReiniciar.classList.add('botaoReiniciar')
    botaoReiniciar.innerText = 'Reiniciar Jogo'
    body.appendChild(botaoReiniciar)

    body.appendChild(blocoResultado)
}
