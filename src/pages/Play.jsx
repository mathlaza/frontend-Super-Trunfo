import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CardPlaying from '../components/PlayMode/CardPlaying';
import Card from '../components/CreationMode/Card';

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
    };
  }

  render() {
    const {
      savedCards,
    } = this.props;

    const moveCardToLast = (array, fromIndex, toIndex) => {
      const element = array.splice(fromIndex, 1)[0];
      array.splice(toIndex, 0, element);
      return array;
    };

    const handleChoice = (valor, target) => {
      const { deckPlayer1, deckPlayer2 } = this.state;
      const attrChosen = target.target.value;
      const lastIndex = deckPlayer1.length - 1;

      if (Number(valor) > Number(deckPlayer2[0][attrChosen])) {
        deckPlayer1.push(deckPlayer2[0]);
        deckPlayer2.shift();

        this.setState({
          deckPlayer1: moveCardToLast(deckPlayer1, 0, lastIndex),
          deckPlayer2,
        });
        console.log('DECK 1', deckPlayer1);
        return console.log(valor, 'É MAIOR');
      }
      if (Number(valor) < Number(deckPlayer2[0][attrChosen])) {
        deckPlayer2.push(deckPlayer1[0]);
        deckPlayer1.shift();

        this.setState({
          deckPlayer1,
          deckPlayer2: moveCardToLast(deckPlayer2, 0, lastIndex),
        });
        console.log('DECK 2', deckPlayer2);
        return console.log(valor, 'É MENOR');
      }
      console.log('é igual');
    };

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
            {deckPlayer1.length <= 1 ? <span>Carta</span> : <span>Cartas Player 1</span>}
          </div>
          <div>
            {deckPlayer2.length}
            {' '}
            {deckPlayer2.length <= 1 ? <span>Carta</span> : <span>Cartas Player 2</span>}
          </div>
        </section>

        <h1>Meu Baralho</h1>

        {cardsShuffled.length >= 2 // Se eu tenho um baralho para jogar em dois
          && (
            <section>
              <h3>Player 1</h3>
              <div>
                {deckPlayer1.length > 0
                && (
                  <CardPlaying
                    allState={ playerDeckMount(deckPlayer1, 0)[0] }
                    handleChoice={ handleChoice }
                  />
                )}
              </div>

              <h3>Player 2</h3>
              <div>
                {deckPlayer2.length > 0
                && (
                  <Card
                    allState={ playerDeckMount(deckPlayer2, 0)[0] }
                  />
                )}
              </div>
            </section>)}
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
