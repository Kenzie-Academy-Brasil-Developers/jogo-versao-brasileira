//FOSTER


for (let i = 0; i <= 6; i ++){
    let tabela = document.getElementById('tabelaJogo')
    let addDiv = document.createElement('div')
    tabela.appendChild(addDiv);
    addDiv.classList.add('coluna')
}

let colunas = document.querySelectorAll('.coluna')

colunas.forEach(coluna => {
    coluna.addEventListener("click", addDisco)
});

function addDisco(){
    console.log("bla")
}
















//ROMULO



















//ALLAN



















//DANIEL