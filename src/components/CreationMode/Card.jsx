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
          {cardDescription}
        </div>

        <div>
          {cardAttr1}
        </div>

        <div>
          {cardAttr2}
        </div>

        <div>
          {cardAttr3}
        </div>

        <div>
          {cardRare}
        </div>

        {cardTrunfo && <div className="card-trunfo">Super Trunfo</div>}
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
