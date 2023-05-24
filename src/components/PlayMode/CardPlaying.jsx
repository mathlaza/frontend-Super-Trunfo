import React from 'react';
import PropTypes from 'prop-types';
import './cardPlaying.css';

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
      <div className="cardPlaying">
        <div className="playingName">
          {cardName}
        </div>
        {cardImage
          && <img
            src={ cardImage }
            alt={ cardName }
            style={ { width: '220px', height: '250px', paddingBottom: '7px' } }
          />}

        <div className="playingCardBox">
          <div
            className="playingDescription"
            type="button"
          >
            {cardDescription}
          </div>

          <button
            type="button"
            className="playingAttr"
            value="Attr1"
            onClick={ (target) => handleChoice(cardAttr1, target) }
          >
            {cardAttr1}
          </button>

          <button
            type="button"
            className="playingAttr"
            value="Attr2"
            onClick={ (target) => handleChoice(cardAttr2, target) }
          >
            {cardAttr2}
          </button>

          <button
            type="button"
            className="playingAttr"
            value="Attr3"
            onClick={ (target) => handleChoice(cardAttr3, target) }
          >
            {cardAttr3}
          </button>

          <button
            type="button"
            className="playingAttr"
            value="Raridade"
            onClick={ (target) => handleChoice(cardRare, target) }
          >
            {cardRare}
          </button>

          {cardTrunfo
        && (
          <div
            className="playingTrunfoBox"
            value="Trunfo"
          >
            <span className="playingTrunfo">Super Trunfo</span>
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
