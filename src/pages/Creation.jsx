import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Form from '../components/CreationMode/Form';
import Card from '../components/CreationMode/Card';
import Filters from '../components/CreationMode/Filters';
import Collection from '../components/CreationMode/Collection';
import { fieldValidations, imageValidation } from '../Validations';
import '../style/creation.css';

class Creation extends Component {
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
    };
  }

  updateButtonEnable = () => {
    const allState = this.state;
    const buttonEnable = fieldValidations(allState);
    this.setState({
      isSaveButtonDisabled: !buttonEnable,
    });
  }

  handleChange = ({ target }) => {
    const { name } = target;
    const value = (target.type === 'checkbox') ? target.checked : target.value;

    this.setState({
      [name]: value,
    }, () => {
      this.updateButtonEnable();
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
        cardRare: 'normal',
        cardTrunfo: false,
        isSaveButtonDisabled: true,
      });
      const { savedCards, hasTrunfo } = this.state;
      localStorage.setItem('savedCards', JSON.stringify(savedCards));
      localStorage.setItem('hasTrunfo', JSON.stringify(hasTrunfo));

      const { enablePlayMode } = this.props;
      enablePlayMode();
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
    const { enablePlayMode } = this.props;
    enablePlayMode();
  }

  handleImage = ({ target }) => {
    const image = imageValidation(target.files[0]);

    const binaryData = [];
    binaryData.push(image);
    const blob = URL.createObjectURL(new Blob(binaryData, { type: 'application/zip' }));
    this.setState({ cardImage: blob }, () => {
      this.updateButtonEnable();
    });
  }

  render() {
    const {
      isSaveButtonDisabled,
      savedCards,
      findName,
      findRare,
      findTrunfo,
    } = this.state;

    const cardsFiltered = findTrunfo
      ? savedCards.filter((card) => card.Trunfo) : (savedCards
        .filter(({ Nome }) => Nome.toLowerCase().includes(findName.toLowerCase()))
        .filter(({ Raridade }) => (
          (findRare === 'todas' || !findRare) ? Raridade : Raridade === findRare)));

    return (
      <section className="creationBackground">
        <div className="formsVisual">
          <div className="forms">
            <Form
              allState={ this.state }
              isSaveButtonDisabled={ isSaveButtonDisabled }
              handleChange={ this.handleChange }
              handleSave={ this.handleSave }
              handleImage={ this.handleImage }
            />
            {isSaveButtonDisabled
              ? <p id="invalid_field">Preencha Corretamente!</p>
              : <p id="valid_field">Campos Preenchidos</p>}
          </div>

          <div className="visual">
            <p>Pré-visualização</p>
            <Card
              allState={ this.state }
              playing={ false }
            />
          </div>
        </div>

        <div className="collectionBackground">
          <Filters
            handleChange={ this.handleChange }
            findTrunfo={ findTrunfo }
          />

          <div className="cardsCriados">
            {`Cards criados: ${savedCards}`}
          </div>

          <Collection
            cardsFiltered={ cardsFiltered }
            handleDelete={ this.handleDelete }
          />
        </div>
      </section>
    );
  }
}

Creation.propTypes = {
  enablePlayMode: PropTypes.func.isRequired,
};

export default Creation;
