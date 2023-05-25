import React from 'react';
import '../style/instructions.css';

class Instructions extends React.Component {
  render() {
    return (
      <section className="instructionsArea">
        <h1 className="instructionsTitle">Criação:</h1>
        <div>
          <div>Para começar, crie no mínimo 4 cards no modo &quot;Create&quot;;</div>
          <div>
            Atente-se em preencher os campos corretamente,
            inclusive o upload de imagem;
          </div>
          <div>
            Só é permitido criar 1 Super Trunfo por deck;
          </div>
        </div>

        <div className="instructionsPlus">
          <div>
            Você pode visualizar ao lado direito do formulário
            como seu card está ficando!
          </div>
          <div>
            Você também pode pesquisar e filtrar os cards já criados.
          </div>
        </div>

        <h1 className="instructionsTitle">Jogar:</h1>
        <div>
          <div>Após criar no mínimo 4 cards, o modo &quot;Play&quot; será liberado;</div>
          <div>
            O jogo começa com os cards embaralhados e
            distribuídos entre dois jogadores;
          </div>
          <div>
            Se um número ímpar de cards tiver sido criado, o jogador 2
            terá 1 card a mais;
          </div>
          <div>
            Para jogar, você (Player 1) escolhe um dos três atributos
            ou a raridade do card em jogo;
          </div>
          <div>
            Se seu atributo escolhido ou raridade forem maiores que o card em jogo do
            oponente (Player 2), você obtém o card dele;
          </div>
          <div>
            Ambos os cards em jogo que
            batalharam serão colocados ao final do deck do jogador que venceu a rodada;
          </div>
          <div>
            O jogo termina quando você (Player 1) obtém todos os cards do Player 2,
            ou vice-versa;
          </div>
        </div>

        <div className="instructionsPlus">
          <div>
            O Super Trunfo ganhará 2 cards de uma só vez
            ao ser jogado por você, caso vença!
          </div>
        </div>
      </section>
    );
  }
}

export default Instructions;
