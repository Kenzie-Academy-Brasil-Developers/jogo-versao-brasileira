//FOSTER
let tabelaArray = []

// let tabela
// let addDiv
let colunas
let novoDisco

const body = document.getElementsByTagName('body')[0]
let blocoVezdoJogador
let vezDoVermelho

inicio()

//ROMULO

//Função de criação de novo disco

function addDisco(event) {
    let linhaAtual = document.getElementById(event.target.id)
    if(limitaQuantidade(event)===false){
        return console.log("A coluna nao pode receber mais discos")
    }
    novoDisco = document.createElement('div')
    novoDisco.classList.add('disco')
    novoDisco.classList.add('bolinhaVermelha')
    linhaAtual.appendChild(novoDisco)
    let jogador = true
    //FOSTER
    if (vezDoVermelho === true){
        jogador = "Vermelho"
        tabelaArray[this.id].push('Red')
    } else {
        jogador = "Preto"
        tabelaArray[this.id].push('Black')
    }

    // if (this.id == 0){
    //   col = 0;
    // } else if (this.id == 1){
    //   col = 1
    // } else if (this.id == 2){
    //   col = 2
    // } else if (this.id == 3){
    //   col = 3
    // } else if (this.id == 4){
    //   col = 4
    // } else if (this.id == 5){
    //   col = 5
    // }  else if (this.id == 6){
    //   col = 6
    // }

    //DANIEL - ADICIONADO PARAMETRO PARA A HORIZONTAL TAMBÉM
    horizontal(event)
    condicaoVitoriaVertical(event)
    diagonalSubindo(event)
    diagonalDescendo(event)
    if (horizontal(event) === true || condicaoVitoriaVertical(event) === true || diagonalSubindo(event) === true || diagonalDescendo(event) === true){
        vitoria()
    } else if (consultaDiscos() === true){
        empate()
    }
    
    alternaJogador(novoDisco)
}

//DANIEL-alternativa de função para limitar quantidade:
const limitaQuantidade = event => {
    if(event.target.querySelectorAll('.disco').length>=6) {
        return false
    }
    return true
}
// FUNÇÃO DE VERIFICAÇÃO DE COMBINAÇÃO HORIZONTAL -- FOSTER
function horizontal(event) {
    let posicao;
    let col = Number(event.target.id)
    posicao = tabelaArray[col].length-1
       
    if (tabelaArray[0][posicao] !== undefined 
        && tabelaArray[0][posicao] === tabelaArray[1][posicao]
        && tabelaArray[0][posicao] === tabelaArray[2][posicao]
        && tabelaArray[0][posicao] === tabelaArray[3][posicao]){
        return true
    } else if (tabelaArray[1][posicao] !== undefined 
        && tabelaArray[1][posicao] === tabelaArray[2][posicao] 
        && tabelaArray[1][posicao] === tabelaArray[3][posicao] 
        && tabelaArray[1][posicao] === tabelaArray[4][posicao]){
      return true
    } else if (tabelaArray[2][posicao] !== undefined 
        && tabelaArray[2][posicao] === tabelaArray[3][posicao] 
        && tabelaArray[2][posicao] === tabelaArray[4][posicao] 
        && tabelaArray[2][posicao] === tabelaArray[5][posicao]){
      return true
    }else if (tabelaArray[3][posicao] !== undefined 
        && tabelaArray[3][posicao] === tabelaArray[4][posicao] 
        && tabelaArray[3][posicao] === tabelaArray[5][posicao] 
        && tabelaArray[3][posicao] === tabelaArray[6][posicao]){
      return true
    } else {
      return false
    }
} 

//Função para limitar quantidade de elementos em cada coluna
// function colunaCheia(number) {
//     let count = 0
//     for (let i = 0; i < tabelaArray[number].length; i++) {
//         if (tabelaArray[number][i] === 1 || tabelaArray[number][i] === 2) {
//             count++
//         }
//     }
//     if (count === 6) {
//         return alertErro("A coluna nao pode receber mais discos")
//     }
// }

// //FUNÇÃO DE VERIFICAÇÃO DE COMBINAÇÃO DIAGONAL PARA BAIXO
// let possibilidades = [];
// let combinacaoDiscos = 4;
// const diagonalBaixo = () => {
//     for (let i = 0; i < 4; i++) {
//       for (let r = 0; r < 3; r++) {
//         let combinacao = [];
//         for (let j = 0; j < combinacaoDiscos; j++) {
//           combinacao.push(tabelaArray[i + j][j + r]);
//         }
//         possibilidades.push(combinacao);
//       }
//     }
//   };
//   //FUNÇÃO DE VERIFICAÇÃO DE COMBINAÇÃO DIAGONAL PARA CIMA
//   const diagonalCima = () => {
//     for (let i = 3; i < 7; i++) {
//       for (let r = 0; r < 3; r++) {
//         let combinacao = [];
//         for (let j = 0; j < combinacaoDiscos; j++) {
//           combinacaoDiscos.push(tabelaArray[i - j][j + r]);
//         }
//         possibilidades.push(combinacao);
//       }
//     }
//   };

//DANIEL: Função alternativa para diagonal
const diagonalSubindo = event => {
    let col = Number(event.target.id)
    let lin = tabelaArray[event.target.id].length-1
    let count = 1;
    for (let i = 1; i <= 3; i++){
        if(col+i>6||lin+i>5) {
            break
        }
        if(tabelaArray[col][lin]===tabelaArray[col+i][lin+i]){
            count++
        } else {
            break
        }
    }
    for (let i = 1; i <= 3; i++){
        if(col-i<0||lin-i<0) {
            break
        }
        if(tabelaArray[col][lin]===tabelaArray[col-i][lin-i]){
            count++
        } else {
            break
        }
    }
    return (count===4)
}

const diagonalDescendo = event => {
    let col = Number(event.target.id)
    let lin = tabelaArray[event.target.id].length-1
    let count = 1;
    for (let i = 1; i <= 3; i++){
        if(col+i>6||lin-i<0) {
            break
        }
        if(tabelaArray[col][lin]===tabelaArray[col+i][lin-i]){
            count++
        } else {
            break
        }
    }
    for (let i = 1; i <= 3; i++){
        if(col-i<0||lin+i>5) {
            break
        }
        if(tabelaArray[col][lin]===tabelaArray[col-i][lin+i]){
            count++
        } else {
            break
        }
    }
    return (count===4)
}

// ALLAN

// Alterna jogador

// CRIANDO LOCAL COM O TEXTO DA VEZ DO JOGADOR
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

function vitoria() {
    let jogador
    if (vezDoVermelho === true) {
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
    botaoReiniciar.addEventListener('click', inicio)
    body.appendChild(botaoReiniciar)

    body.appendChild(blocoResultado)
}

function empate() {
    body.innerHTML = ''

    const resultEmpate = document.createElement('div')
    resultEmpate.classList.add('resultEmpate')
    
    const texto = document.createElement('h2')
    texto.classList.add('textoEmpate')
    texto.innerHTML = `O jogo empatou. Reinicie a partida!`
    resultEmpate.appendChild(texto)

    const botaoReiniciar = document.createElement('button')
    botaoReiniciar.classList.add('botaoReiniciar')
    botaoReiniciar.innerText = 'Reiniciar Jogo'
    botaoReiniciar.addEventListener('click', inicio)
    body.appendChild(botaoReiniciar)

    body.appendChild(resultEmpate)
}

// function condicaoVitoriaVertical(colunaClicada) {
//     if ( colunaClicada.childElementCount > 3 ) {
//         const filhosColuna = colunaClicada.childNodes
//         console.log(filhosColuna)
//         let contador = 0
//         for (let index = 1; index < 4; index++) {
//             if (filhosColuna[filhosColuna.length - index].className !== filhosColuna[filhosColuna.length - index - 1].className) {
//                 continue
//             } else {
//                 contador++
//                 if (contador >= 3) {
//                     console.log('VITÓRIA')
//                     return true
//                 }
//             }
//         }
//     }
//     return false
// }

// CORREÇÃO CONDIÇÃO VITÓRIA VERTICAL E REFATORAÇÃO - DANIEL
function condicaoVitoriaVertical(event) {
    const col = Number(event.target.id)
    const lin = tabelaArray[event.target.id].length-1
    if (tabelaArray[col].length > 3){
        let contador = 1
        for (let index = 1; index <= 3; index++) {
            if (tabelaArray[col][lin] === tabelaArray[col][lin-index]) {
                contador++
            } else {
                break
            }
        }
        return contador===4
    }
    return false
}


//  EVENTO TECLA NUMÉRICA DE 1 A 7
document.addEventListener('keydown', (event) => {
    const keyName = event.key - 1
    let cilindro = document.querySelectorAll('.coluna')[keyName]
   
    if (keyName >= 0 && keyName < 7) { // se precionar alguma tecla não confugurada evita erro no devTools
        addDiscoTeclado(cilindro, keyName)
    
    } else {
        console.log('Essa tecla não está configurada')
    }
})

function addDiscoTeclado(cilindro, posicaoCilindro) {

    if (cilindro.childElementCount >= 6) { // limitador de bolinhas na coluna
        console.log('você não pode adicionar aqui')
   
    } else {
        novoDisco = document.createElement('div')
        novoDisco.classList.add('disco')
        alternaJogador(novoDisco)
        cilindro.appendChild(novoDisco)
    
        //FOSTER
        if (vezDoVermelho === true){
            
            tabelaArray[posicaoCilindro].push('Red')
        } else {
            tabelaArray[posicaoCilindro].push('Black')
        }
    
        condicaoVitoriaVertical(cilindro)

    }
}

function consultaDiscos() {
    let cont = 0;
    for (let i = 0; i <= 6;i++)
    if (tabelaArray[i].length === 6){
        cont++
    } 
    if (cont === 7){
        return true
        
    }
}

function inicio() {
    body.innerText = ''
    let tabela = document.createElement('div')
    tabela.id = 'tabelaJogo'

    tabelaArray = [
        [],
        [], 
        [],
        [],
        [],
        [],
        [],
    ]
    

    for (let i = 0; i <= 6; i ++){
        let addDiv = document.createElement('div')
        tabela.appendChild(addDiv);
        addDiv.classList.add('coluna')
        addDiv.setAttribute("id", i)
    }

    body.appendChild(tabela)
    
    colunas = document.querySelectorAll('.coluna')

    colunas.forEach(coluna => {
        coluna.addEventListener("click", addDisco)
    });

    blocoVezdoJogador = document.createElement('div')
    blocoVezdoJogador.id = 'blocoVezdoJogador'
    blocoVezdoJogador.classList.add('blocoVezdoJogadorVermelho')
    blocoVezdoJogador.innerText = 'Vez do jogador vermelho'
    
    body.appendChild(blocoVezdoJogador)
    
    vezDoVermelho = true // variavel que dirá se é a vez do jogador vermelho
} 