import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Play extends Component {
  render() {
    const {
      savedCards,
    } = this.props;

    return (
      <main>
        <div>Play</div>
        <div>{savedCards}</div>
        <div>Meu Baralho</div>
      </main>
    );
  }
}

Play.propTypes = {
  savedCards: PropTypes.arrayOf(PropTypes.shape({
    cardName: PropTypes.string.isRequired,
    cardDescription: PropTypes.string.isRequired,
    cardAttr1: PropTypes.string.isRequired,
    cardAttr2: PropTypes.string.isRequired,
    cardAttr3: PropTypes.string.isRequired,
    cardImage: PropTypes.string.isRequired,
    cardRare: PropTypes.string.isRequired,
    cardTrunfo: PropTypes.bool.isRequired,
  })).isRequired,
};

export default Play;
