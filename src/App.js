import React from 'react';
import Card from './components/Card';
import Collection from './components/Collection';
import Filters from './components/Filters';
import Form from './components/Form';
import NavBar from './components/NavBar';
import Play from './components/Play';
import fieldValidations from './Validations';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: null,
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
      const allState = this.state;

      const buttonEnable = fieldValidations(allState);

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
        cardImage: null,
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

  handleImage = ({ target }) => {
    // this.setState({ cardImage: target.files[0] });

    const binaryData = [];
    binaryData.push(target.files[0]);
    const xablau = URL.createObjectURL(new Blob(binaryData, { type: 'application/zip' }));
    this.setState({ cardImage: xablau });
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
                handleImage={ this.handleImage }
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
