import React from 'react';
import PropTypes from 'prop-types';
import '../../style/inputs.css';

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
      <main className="inputMain">
        <label className="inputName" htmlFor="Name">
          <span>Name</span>
          <input
            type="text"
            value={ cardName }
            onChange={ handleChange }
            name="cardName"
          />
        </label>

        <label className="inputName" htmlFor="Description">
          <span>Description</span>
          <textarea
            className="textArea"
            type="textarea"
            rows={ 3 }
            cols={ 38 }
            value={ cardDescription }
            onChange={ handleChange }
            name="cardDescription"
          />
        </label>

        <label htmlFor="Attr1">
          <span className="attrSpan">Attr1</span>
          <input
            className="attrInput"
            type="number"
            value={ cardAttr1 }
            onChange={ handleChange }
            name="cardAttr1"
          />
        </label>

        <label htmlFor="Attr2">
          <span className="attrSpan">Attr2</span>
          <input
            className="attrInput"
            type="number"
            value={ cardAttr2 }
            onChange={ handleChange }
            name="cardAttr2"
          />
        </label>

        <label htmlFor="Attr3">
          <span className="attrSpan">Attr3</span>
          <input
            className="attrInput"
            type="number"
            value={ cardAttr3 }
            onChange={ handleChange }
            name="cardAttr3"
          />
        </label>

        <label className="buttonUpload" htmlFor="img_input">
          <span>Card Image</span>
          <input
            id="img_input"
            type="file"
            accept="image/jpg, image/jpeg, image/png, image/gif"
            onChange={ handleImage }
            name="cardImage"
            style={ { display: 'none' } }
          />
        </label>
      </main>
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
