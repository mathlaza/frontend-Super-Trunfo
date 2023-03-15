import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CardPlaying from '../components/PlayMode/CardPlaying';
import Card from '../components/CreationMode/Card';

class Play extends Component {
  constructor({ savedCards }) {
    super();

    const shuffleParam = 0.5;

    this.state = {
      cardsShuffled: savedCards.sort(() => Math.random() - shuffleParam),
    };
  }

  render() {
    const {
      savedCards,
    } = this.props;

    // const shuffleParam = 0.5;
    // const cardsShuffled = savedCards.sort(() => Math.random() - shuffleParam);

    const handleChoice = (valor, target) => {
      const { cardsShuffled } = this.state;
      const attrChosen = target.target.value;

      if (Number(valor) > Number(cardsShuffled[cardsShuffled.length - 1][attrChosen])) {
        console.log(valor, 'É MAIOR');
      }
      console.log('sequencia dos cards:', cardsShuffled);

      // this.setState({
      //   merda: cardsShuffled,
      // }, () => {
      //   console.log(cardsShuffled);
      // });
    };

    const { cardsShuffled } = this.state;

    const playerDeckMount = (index) => [cardsShuffled[index]].map((card) => {
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
    });

    return (
      <section>
        <div>Play</div>
        <div>
          {savedCards.length}
          {' '}
          {savedCards.length <= 1 ? <span>Carta</span> : <span>Cartas</span>}
        </div>

        <h1>Meu Baralho</h1>

        {cardsShuffled.length >= 2 // Se eu tenho um baralho para jogar em dois
          && (
            <section>
              <h3>Player 1</h3>
              <div>
                <CardPlaying
                  allState={ playerDeckMount(0)[0] }
                  handleChoice={ handleChoice }
                />
              </div>

              <h3>Player 2</h3>
              <div>
                <Card
                  allState={ playerDeckMount(cardsShuffled.length - 1)[0] }
                />
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
