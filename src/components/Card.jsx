import React from 'react';
import PropTypes from 'prop-types';

class Card extends React.Component {
  render() {
    const {
      allState,
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
        <div data-testid="name-card">
          {cardName}
        </div>
        {cardImage
          && <img
            src={ cardImage }
            alt={ cardName }
            data-testid="image-card"
            style={ { width: '100px' } }
          />}

        <div data-testid="description-card">
          {cardDescription}
        </div>

        <div data-testid="attr1-card">
          {cardAttr1}
        </div>

        <div data-testid="attr2-card">
          {cardAttr2}
        </div>

        <div data-testid="attr3-card">
          {cardAttr3}
        </div>

        <div data-testid="rare-card">
          {cardRare}
        </div>

        {cardTrunfo && <div data-testid="trunfo-card">Super Trunfo</div>}
      </div>
    );
  }
}

Card.defaultProps = {
  allState: PropTypes.func,
};

Card.propTypes = {
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
};

export default Card;
