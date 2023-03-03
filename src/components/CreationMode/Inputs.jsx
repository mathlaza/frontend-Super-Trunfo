import React from 'react';
import PropTypes from 'prop-types';

class Inputs extends React.Component {
  render() {
    const {
      allState,
      handleChange,
      handleImage,
    } = this.props;

    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
    } = allState;

    return (
      <div>
        <label htmlFor="Name">
          Name
          <input
            type="text"
            data-testid="name-input"
            value={ cardName }
            onChange={ handleChange }
            name="cardName"
          />
        </label>

        <label htmlFor="Description">
          Description
          <input
            type="textarea"
            data-testid="description-input"
            value={ cardDescription }
            onChange={ handleChange }
            name="cardDescription"
          />
        </label>

        <label htmlFor="Attr1">
          Attr1
          <input
            type="number"
            data-testid="attr1-input"
            value={ cardAttr1 }
            onChange={ handleChange }
            name="cardAttr1"
          />
        </label>

        <label htmlFor="Attr2">
          Attr2
          <input
            type="number"
            data-testid="attr2-input"
            value={ cardAttr2 }
            onChange={ handleChange }
            name="cardAttr2"
          />
        </label>

        <label htmlFor="Attr3">
          Attr3
          <input
            type="number"
            data-testid="attr3-input"
            value={ cardAttr3 }
            onChange={ handleChange }
            name="cardAttr3"
          />
        </label>

        <label htmlFor="Image">
          Image
          <input
            type="file"
            data-testid="image-input"
            onChange={ handleImage }
            name="cardImage"
          />
        </label>
      </div>
    );
  }
}

Inputs.propTypes = {
  allState: PropTypes.shape({
    cardName: PropTypes.string.isRequired,
    cardDescription: PropTypes.string.isRequired,
    cardAttr1: PropTypes.string.isRequired,
    cardAttr2: PropTypes.string.isRequired,
    cardAttr3: PropTypes.string.isRequired,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
  handleImage: PropTypes.func.isRequired,
};

export default Inputs;
