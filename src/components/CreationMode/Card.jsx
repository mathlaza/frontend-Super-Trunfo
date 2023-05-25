import React from 'react';
import PropTypes from 'prop-types';
import '../../style/card.css';

class Card extends React.Component {
  render() {
    const {
      allState,
      playing,
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
      <section className="cardMounted">
        <div className="cardName">
          {cardName}
        </div>
        {cardImage
          && <img
            src={ cardImage }
            alt={ cardName }
            style={ { width: '220px', height: '250px', paddingBottom: '7px' } }
          />}

        <div className="cardDescription">
          {cardDescription}
        </div>

        {!playing
        && (
          <section>
            <div className="attrBox">
              <span>Attr1</span>
              <span>{cardAttr1}</span>
            </div>

            <div className="attrBox">
              <span>Attr2</span>
              <span>{cardAttr2}</span>
            </div>

            <div className="attrBox">
              <span>Attr3</span>
              <span>{cardAttr3}</span>
            </div>

            <div className="cardFooter">
              {cardRare}
              {cardTrunfo && <div className="card-trunfo">Super Trunfo</div>}
            </div>

          </section>)}
      </section>
    );
  }
}

Card.defaultProps = {
  allState: PropTypes.func,
  playing: PropTypes.bool,
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
  playing: PropTypes.bool,
};

export default Card;
