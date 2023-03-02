import React from 'react';
import PropTypes from 'prop-types';
import Inputs from './Inputs';

class Form extends React.Component {
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
      handleChange,
      handleSave,
    } = this.props;

    return (
      <form>
        <Inputs
          cardName={ cardName }
          handleChange={ handleChange }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
        />

        <label htmlFor="Rarity">
          Rarity
          <select
            data-testid="rare-input"
            value={ cardRare }
            onChange={ handleChange }
            name="cardRare"
          >
            <option value="" disabled>-</option>
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>

        {!hasTrunfo
          ? (
            <label htmlFor="Trunfo">
              Super Trunfo
              <input
                type="checkbox"
                data-testid="trunfo-input"
                checked={ cardTrunfo }
                onChange={ handleChange }
                name="cardTrunfo"
              />
            </label>
          )
          : <p>Você já tem um Super Trunfo em seu baralho</p>}

        <button
          type="submit"
          data-testid="save-button"
          disabled={ isSaveButtonDisabled }
          onClick={ handleSave }
        >
          Salvar
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSave: PropTypes.func.isRequired,
};

export default Form;
