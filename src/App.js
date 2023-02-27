import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
      // hasTrunfo: "",
      isSaveButtonDisabled: true,
      onInputChange: this.handleChange,
      onSaveButtonClick: () => { },
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
      // hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.state;

    return (
      <div>
        <Form
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          // hasTrunfo={ hasTrunfo }
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
      </div>
    );
  }
}

export default App;
