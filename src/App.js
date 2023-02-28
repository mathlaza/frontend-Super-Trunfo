import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

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
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      onInputChange: this.handleChange,
      onSaveButtonClick: this.handleSave,
      savedCards: [],
      onDeleteClick: this.handleDelete,
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
    });
  }

  handleDelete = ({ target }) => {
    const { savedCards } = this.state;
    const cardsLeft = savedCards.filter((card) => card.Nome !== target.name);
    const checkTrunfo = cardsLeft.find((card) => card.Trunfo);

    this.setState({ savedCards: cardsLeft });
    if (!checkTrunfo) this.setState({ hasTrunfo: false });
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
      onInputChange,
      onSaveButtonClick,
      savedCards,
      onDeleteClick,
    } = this.state;

    return (
      <main>
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
          onInputChange={ onInputChange }
          onSaveButtonClick={ onSaveButtonClick }
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

        <div className="cardSaved">
          {savedCards.map((card) => {
            const {
              Nome,
              Descrição,
              Attr1,
              Attr2,
              Attr3,
              Imagem,
              Raridade,
              Trunfo,
            } = card;

            return (
              <div key={ Nome }>
                <Card
                  cardName={ Nome }
                  cardDescription={ Descrição }
                  cardAttr1={ Attr1 }
                  cardAttr2={ Attr2 }
                  cardAttr3={ Attr3 }
                  cardImage={ Imagem }
                  cardRare={ Raridade }
                  cardTrunfo={ Trunfo }
                />

                <button
                  data-testid="delete-button"
                  name={ Nome }
                  type="button"
                  onClick={ onDeleteClick }
                >
                  Excluir
                </button>
              </div>
            );
          })}
        </div>
      </main>
    );
  }
}

export default App;
