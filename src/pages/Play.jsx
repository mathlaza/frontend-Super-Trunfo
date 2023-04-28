import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CardPlaying from '../components/PlayMode/CardPlaying';
import Card from '../components/CreationMode/Card';
import WinMatch from '../components/PlayMode/WinMatch';

class Play extends Component {
  constructor({ savedCards }) {
    super();

    const shuffleParam = 0.5;
    const cardsShuffled = savedCards.sort(() => Math.random() - shuffleParam);
    const midIndexOfCardsShuffled = Math.ceil((cardsShuffled.length - 1) / 2);

    this.state = {
      cardsShuffled: savedCards.sort(() => Math.random() - shuffleParam),
      deckPlayer1: cardsShuffled.slice(0, midIndexOfCardsShuffled), // Pega a primeira metade do baralho
      deckPlayer2: cardsShuffled.slice(midIndexOfCardsShuffled, cardsShuffled.length), // Pega a segunda metade do baralho
      // playerWin: this.deckPlayer1.length === 0 || this.deckPlayer2.length === 0,
    };
  }

  moveCardToLast = (array, fromIndex, toIndex) => {
    const element = array.splice(fromIndex, 1)[0];
    array.splice(toIndex, 0, element);
    return array;
  };

  handleChoice = (valor, target) => {
    const { deckPlayer1, deckPlayer2 } = this.state;
    const attrChosen = target.target.value;
    const lastIndex1 = deckPlayer1.length - 1;
    const lastIndex2 = deckPlayer2.length - 1;
    let rarity;

    console.log('comeco', deckPlayer1.length, deckPlayer2.length);

    if (attrChosen === 'Raridade') {
      const enemyValor = deckPlayer2[0][attrChosen];
      rarity = this.handleRarity(valor, enemyValor);
    }

    const isTrunfo = target.target.parentNode.lastChild.className;

    if (Number(valor) > Number(deckPlayer2[0][attrChosen]) || rarity === 'better') {
      deckPlayer1.push(deckPlayer2[0]);
      deckPlayer2.shift();

      if (isTrunfo === 'card-trunfo' && deckPlayer2.length >= 1) {
        deckPlayer1.push(deckPlayer2[0]);
        deckPlayer2.shift();
      }

      this.setState({
        deckPlayer1: this.moveCardToLast(deckPlayer1, 0, lastIndex1 + 1),
        deckPlayer2,
      });
      console.log('dentro1', deckPlayer2.length);
    }

    if (Number(valor) < Number(deckPlayer2[0][attrChosen]) || rarity === 'worse') {
      deckPlayer2.push(deckPlayer1[0]);
      deckPlayer1.shift();

      this.setState({
        deckPlayer1,
        deckPlayer2: this.moveCardToLast(deckPlayer2, 0, lastIndex2 + 1),
      });
      if (deckPlayer1.length === 0) return;
    }

    // Se empatar, move os cards para posições aleatórias para que não caiam juntos novamente
    const shuffleCardTied = (index) => Math.ceil(Math.random() * (index));
    this.setState({
      deckPlayer1: this.moveCardToLast(deckPlayer1, 0, shuffleCardTied(lastIndex1)),
      deckPlayer2: this.moveCardToLast(deckPlayer2, 0, shuffleCardTied(lastIndex2)),
    });
  };

  handleRarity = (valor, enemyValor) => {
    if (valor === 'muito raro' && enemyValor === 'raro') return 'better';
    if (valor === 'muito raro' && enemyValor === 'normal') return 'better';
    if (valor === 'raro' && enemyValor === 'normal') return 'better';
    if (valor === enemyValor) return 'equal';
    return 'worse';
  }

  render() {
    const {
      savedCards,
    } = this.props;

    const {
      cardsShuffled,
      deckPlayer1,
      deckPlayer2,
    } = this.state;

    const playerDeckMount = (playerNumber, index) => [playerNumber[index]].map((card) => {
      if (playerNumber.length > 0) {
        const allState = {
          cardName: card.Nome,
          cardDescription: card.Descrição,
          cardAttr1: card.Attr1,
          cardAttr2: card.Attr2,
          cardAttr3: card.Attr3,
          cardImage: card.Imagem,
          cardRare: card.Raridade,
          cardTrunfo: card.Trunfo,
        };

        return allState;
      }
      return null;
    });

    return (
      <section>
        <div>Play</div>
        <section>
          <div>
            {savedCards.length}
            {' '}
            {savedCards.length <= 1 ? <span>Carta</span> : <span>Cartas</span>}
          </div>
          <div>
            {deckPlayer1.length}
            {' '}
            {deckPlayer1.length <= 1
              ? <span>Carta Player 1</span> : <span>Cartas Player 1</span>}
          </div>
          <div>
            {deckPlayer2.length}
            {' '}
            {deckPlayer2.length <= 1
              ? <span> Carta Player 2</span> : <span>Cartas Player 2</span>}
          </div>
        </section>

        <h1>Meu Baralho</h1>

        {(cardsShuffled.length >= 2 && deckPlayer1.length > 0 && deckPlayer2.length > 0) // Se eu tenho um baralho para jogar em dois
          ? (
            <section>
              <h3>Player 1</h3>
              <div>
                {deckPlayer1.length > 0
                  && (
                    <CardPlaying
                      allState={ playerDeckMount(deckPlayer1, 0)[0] }
                      handleChoice={ this.handleChoice }
                    />
                  )}
              </div>

              <h3>Player 2</h3>
              <div>
                {deckPlayer2.length > 0
                  && (
                    <Card
                      allState={ playerDeckMount(deckPlayer2, 0)[0] }
                      playing
                    />
                  )}
              </div>
            </section>)
          : (cardsShuffled.length >= 2
            && <WinMatch
              deckPlayer1={ deckPlayer1 }
              deckPlayer2={ deckPlayer2 }
            />)}
      </section>
    );
  }
}

Play.propTypes = {
  savedCards: PropTypes.arrayOf(PropTypes.shape({
    Nome: PropTypes.string.isRequired,
    Descrição: PropTypes.string.isRequired,
    Attr1: PropTypes.string.isRequired,
    Attr2: PropTypes.string.isRequired,
    Attr3: PropTypes.string.isRequired,
    Imagem: PropTypes.string.isRequired,
    Raridade: PropTypes.string.isRequired,
    Trunfo: PropTypes.bool.isRequired,
  })).isRequired,
};

export default Play;
