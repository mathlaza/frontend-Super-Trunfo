import React from 'react';
import PropTypes from 'prop-types';

class CardPlaying extends React.Component {
  render() {
    const {
      allState,
      handleChoice,
    } = this.props;

    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = allState;

    return (
      <div>
        <div>
          {cardName}
        </div>
        {cardImage
          && <img
            src={ cardImage }
            alt={ cardName }
            style={ { width: '200px' } }
          />}

        <div>
          <button
            type="button"
          >
            {cardDescription}
          </button>

          <button
            type="button"
            className="card-attr1"
            value="Attr1"
            onClick={ (target) => handleChoice(cardAttr1, target) }
          >
            {cardAttr1}
          </button>

          <button
            type="button"
            className="card-attr2"
            value="Attr2"
            onClick={ (target) => handleChoice(cardAttr2, target) }
          >
            {cardAttr2}
          </button>

          <button
            type="button"
            className="card-attr3"
            value="Attr3"
            onClick={ (target) => handleChoice(cardAttr3, target) }
          >
            {cardAttr3}
          </button>

          <button
            type="button"
            className="card-rarity"
            value="Raridade"
            onClick={ (target) => handleChoice(cardRare, target) }
          >
            {cardRare}
          </button>

          {cardTrunfo
        && (
          <div
            className="card-trunfo"
            value="Trunfo"
          >
            Super Trunfo
          </div>)}
        </div>
      </div>
    );
  }
}

CardPlaying.defaultProps = {
  allState: PropTypes.func,
};

CardPlaying.propTypes = {
  allState: PropTypes.shape({
    cardName: PropTypes.string.isRequired,
    cardDescription: PropTypes.string.isRequired,
    cardAttr1: PropTypes.string.isRequired,
    cardAttr2: PropTypes.string.isRequired,
    cardAttr3: PropTypes.string.isRequired,
    cardImage: PropTypes.string,
    cardRare: PropTypes.string.isRequired,
    cardTrunfo: PropTypes.bool.isRequired,
  }),
  handleChoice: PropTypes.func.isRequired,
};

export default CardPlaying;
