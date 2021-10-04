# Entrega: Lig-4

**ATENÇÃO!!**

**Esta entrega é HARD DEADLINE, ou seja, se você não submete-la até o prazo de entrega, você NÃO poderá enviar após a data de entrega. Reveja atentamente no fim da entrega o seu tempo limite, qualquer dúvida chame o seu Facilitador.**

No Lig-4, um jogador assume a cor Vermelha e o outro assume a cor Preta. Os jogadores se alternam inserindo suas peças em uma das 7 colunas de uma **tabela 7x6**. O primeiro jogador que conseguir **quatro** de suas peças em uma linha (seja horizontal, vertical ou diagonal) vence.

No mundo físico, a tabela é colocada perpendicular à mesa, de forma que as peças caiam para a parte de baixo e se empilhem umas em cima das outras. Sua versão digital do jogo deve manter esta característica *(a animação de queda é opcional)*.

O jogo pode terminar em empate quando todas as células estiverem preenchidas e nenhum jogador conseguir quatro peças em linha.

![](http://mathworld.wolfram.com/images/gifs/connect4.gif)

Implemente o Lig-4 usando HTML, CSS e JavaScript. Em cada partida, os jogadores estarão usando o mesmo teclado & mouse, alternando seus turnos.

## Detalhes do Envio

Vocês trabalharão **em grupos** para completar sua implementação do Lig-4. Vocês devem codificar individualmente, mas podem trabalhar juntos para construir o layout e a funcionalidade do jogo.

Como membro de um grupo, você terá que atingir uma certa expectativa de desempenho. Seu desempenho será avaliado pelos outros membros do grupo, então tente contribuir igualmente com o projeto! Você pode ler mais aqui: [Guidelines for Individuals on a Team](https://docs.google.com/document/d/1SmfHAwjDHVRmcXyoF1LsWU5OpOC6ok5L-1sKakPQJjM/edit) (em inglês)

**Apenas o líder do projeto fará o envio do repositório e url do GitHub Pages.** Este será um projeto que você colocará em seu portfólio, então faça-o bonito e use a função do GitHub Pages para hospedar o jogo concluído para que qualquer um possa jogar.

## Dicas

Se você não estiver se sentindo seguro de como começar, aqui estão algumas dicas de etapas para seguir:

1. Exiba um disco preto ou vermelho.
2. Empilhe discos vermelhos e pretos em uma coluna usando um layout de caixa flex.
3. Exiba um tabuleiro completo consistindo de 7 colunas.
4. Configure uma função de handler de clique para cada coluna que adiciona um disco.
5. Reveze os turnos! Mude a cor do próximo disco após um disco ser adicionado.
6. Registre a cor dos discos em cada posição do tabuleiro. Você deve ser capaz de fazer o debug via console.log() depois de cada movimento mostrando o estado do tabuleiro.
7. Após encher uma coluna (6 discos), não permita que mais discos sejam adicionados.
8. Verifique se o último disco adicionado completou uma linha de quatro peças na coluna (verticalmente).
9. Verifique se o último disco adicionado completou uma linha de quatro peças horizontalmente.
10. Verifique se o último disco adicionado completou uma linha de quatro peças em uma diagonal descendente ou ascendente.

## Exemplo

Aqui está uma captura de tela de uma implementação concluída, mas sem a estilização chique.

<img src="https://i.snag.gy/15lyOr.jpg" alt="lig-4 image" width=100%/>

## Envio

Faça o push do código para o seu repositório do GitHub e implemente o GitHub pages. No Canvas, por favor, envie sua url do GitHub Pages: (ex: https://nomedeusuario.github.io/lig-4) e envie o link do seu repositório nos comentários. Após a correção, seu projeto deverá ficar privado.

