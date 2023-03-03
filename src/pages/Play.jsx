import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Play extends Component {
  render() {
    const {
      savedCards,
    } = this.props;

    return (
      <section>
        <div>Play</div>
        <div>
          {savedCards.length}
          { ' ' }
          {savedCards.length <= 1 ? <span>Carta</span> : <span>Cartas</span>}
        </div>
        <div>Meu Baralho</div>
      </section>
    );
  }
}

Play.propTypes = {
  savedCards: PropTypes.arrayOf(PropTypes.shape({
    Nome: PropTypes.string.isRequired,
    Descrição: PropTypes.string.isRequired,
    Attr1: PropTypes.string.isRequired,
    Attr2: PropTypes.string.isRequired,
    Attr3: PropTypes.string.isRequired,
    Imagem: PropTypes.string.isRequired,
    Raridade: PropTypes.string.isRequired,
    Trunfo: PropTypes.bool.isRequired,
  })).isRequired,
};

export default Play;
