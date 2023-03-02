import React from 'react';
import Card from './components/Card';
import Collection from './components/Collection';
import Filters from './components/Filters';
import Form from './components/Form';
import NavBar from './components/NavBar';
import Play from './components/Play';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
      hasTrunfo: JSON.parse(localStorage.getItem('hasTrunfo')) || false,
      isSaveButtonDisabled: true,
      savedCards: JSON.parse(localStorage.getItem('savedCards')) || [],
      findName: '',
      findRare: '',
      findTrunfo: false,
      creationMode: true,
      playMode: false,
    };
  }

  handleChange = ({ target }) => {
    const { name } = target;
    const value = (target.type === 'checkbox') ? target.checked : target.value;

    this.setState({
      [name]: value,
    }, () => {
      const {
        cardName,
        cardDescription,
        cardAttr1,
        cardAttr2,
        cardAttr3,
        cardImage,
        cardRare,
      } = this.state;

      let fieldsComplete = false;
      let sumAttributes = false;
      const numAt1 = Number(cardAttr1);
      const numAt2 = Number(cardAttr2);
      const numAt3 = Number(cardAttr3);
      const maxSumAttr = 210;
      const maxAttr = 90;
      const checkAt1 = numAt1 <= maxAttr && numAt1 >= 0;
      const checkAt2 = numAt2 <= maxAttr && numAt2 >= 0;
      const checkAt3 = numAt3 <= maxAttr && numAt3 >= 0;

      if (cardName && cardDescription && cardImage && cardRare) fieldsComplete = true;
      if (numAt1 + numAt2 + numAt3 <= maxSumAttr) sumAttributes = true;

      const checkAllAttr = checkAt1 && checkAt2 && checkAt3;
      const buttonEnable = fieldsComplete && sumAttributes && checkAllAttr;

      this.setState({
        isSaveButtonDisabled: !buttonEnable,
      });
    });
  }

  handleSave = (event) => {
    event.preventDefault();

    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.state;

    const cardCreated = {
      Nome: cardName,
      Descrição: cardDescription,
      Attr1: cardAttr1,
      Attr2: cardAttr2,
      Attr3: cardAttr3,
      Imagem: cardImage,
      Raridade: cardRare,
      Trunfo: cardTrunfo,
    };

    this.setState((prevState) => {
      const deckAnterior = prevState.savedCards;
      return cardCreated.Trunfo ? {
        hasTrunfo: true,
        savedCards: [...deckAnterior, cardCreated],
      } : {
        savedCards: [...deckAnterior, cardCreated],
      };
    }, () => {
      this.setState({
        cardName: '',
        cardDescription: '',
        cardAttr1: '0',
        cardAttr2: '0',
        cardAttr3: '0',
        cardImage: '',
        cardRare: 'normal',
        cardTrunfo: false,
        isSaveButtonDisabled: true,
      });
      const { savedCards, hasTrunfo } = this.state;
      localStorage.setItem('savedCards', JSON.stringify(savedCards));
      localStorage.setItem('hasTrunfo', JSON.stringify(hasTrunfo));
    });
  }

  handleDelete = ({ target }) => {
    const { savedCards } = this.state;
    const cardsLeft = savedCards.filter((card) => card.Nome !== target.name);
    const checkTrunfo = cardsLeft.find((card) => card.Trunfo);

    this.setState({ savedCards: cardsLeft });
    localStorage.setItem('savedCards', JSON.stringify(cardsLeft));

    if (!checkTrunfo) {
      this.setState({ hasTrunfo: false }, () => {
        const { hasTrunfo } = this.state;
        localStorage.setItem('hasTrunfo', JSON.stringify(hasTrunfo));
      });
    }
  }

  goCreationMode = () => {
    this.setState({ creationMode: true, playMode: false });
  }

  goPlayMode = () => {
    this.setState({ playMode: true, creationMode: false });
  }

  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
      savedCards,
      findName,
      findRare,
      findTrunfo,
      creationMode,
      playMode,
    } = this.state;

    const cardsFiltered = findTrunfo
      ? savedCards.filter((card) => card.Trunfo) : (savedCards
        .filter(({ Nome }) => Nome.toLowerCase().includes(findName.toLowerCase()))
        .filter(({ Raridade }) => (
          (findRare === 'todas' || !findRare) ? Raridade : Raridade === findRare)));

    return (
      <main>
        <NavBar
          goCreationMode={ this.goCreationMode }
          goPlayMode={ this.goPlayMode }
        />

        {creationMode
          && (
            <section>
              <Form
                cardName={ cardName }
                cardDescription={ cardDescription }
                cardAttr1={ cardAttr1 }
                cardAttr2={ cardAttr2 }
                cardAttr3={ cardAttr3 }
                cardImage={ cardImage }
                cardRare={ cardRare }
                cardTrunfo={ cardTrunfo }
                hasTrunfo={ hasTrunfo }
                isSaveButtonDisabled={ isSaveButtonDisabled }
                handleChange={ this.handleChange }
                handleSave={ this.handleSave }
              />

              <Card
                cardName={ cardName }
                cardDescription={ cardDescription }
                cardAttr1={ cardAttr1 }
                cardAttr2={ cardAttr2 }
                cardAttr3={ cardAttr3 }
                cardImage={ cardImage }
                cardRare={ cardRare }
                cardTrunfo={ cardTrunfo }
              />

              <Filters
                handleChange={ this.handleChange }
                findTrunfo={ findTrunfo }
              />

              <Collection
                cardsFiltered={ cardsFiltered }
                handleDelete={ this.handleDelete }
              />
            </section>)}

        {playMode
          && <Play savedCards={ savedCards } />}
      </main>
    );
  }
}

export default App;
