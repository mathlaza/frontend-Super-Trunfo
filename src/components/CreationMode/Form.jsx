import React from 'react';
import PropTypes from 'prop-types';
import Inputs from './Inputs';

class Form extends React.Component {
  render() {
    const {
      allState,
      handleChange,
      handleSave,
      handleImage,
    } = this.props;

    const {
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
    } = allState;

    return (
      <form>
        <h1>Adicionar nova carta</h1>
        <Inputs
          allState={ allState }
          handleChange={ handleChange }
          handleImage={ handleImage }
        />

        <label className="rarityBox" htmlFor="Rarity">
          <span>Rarity</span>
          <select
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
            <label className="trunfoBox" htmlFor="Trunfo">
              <span>Super Trunfo</span>
              <input
                type="checkbox"
                checked={ cardTrunfo }
                onChange={ handleChange }
                name="cardTrunfo"
              />
            </label>
          )
          : <p id="hasTrunfo">Você já tem um Super Trunfo em seu baralho</p>}

        <button
          className="saveButton"
          type="submit"
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
  allState: PropTypes.shape({
    cardRare: PropTypes.string.isRequired,
    cardTrunfo: PropTypes.bool.isRequired,
    hasTrunfo: PropTypes.bool.isRequired,
    isSaveButtonDisabled: PropTypes.bool.isRequired,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSave: PropTypes.func.isRequired,
  handleImage: PropTypes.func.isRequired,
};

export default Form;
