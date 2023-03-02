import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

class Collection extends Component {
  render() {
    const {
      cardsFiltered,
      handleDelete,
    } = this.props;

    return (
      <div className="cardSaved">
        {cardsFiltered.map((card) => {
          const {
            Nome,
            Descrição,
            Attr1,
            Attr2,
            Attr3,
            Imagem,
            Raridade,
            Trunfo,
          } = card;

          return (
            <div key={ Nome }>
              <Card
                cardName={ Nome }
                cardDescription={ Descrição }
                cardAttr1={ Attr1 }
                cardAttr2={ Attr2 }
                cardAttr3={ Attr3 }
                cardImage={ Imagem }
                cardRare={ Raridade }
                cardTrunfo={ Trunfo }
              />

              <button
                data-testid="delete-button"
                name={ Nome }
                type="button"
                onClick={ handleDelete }
              >
                Excluir
              </button>
            </div>
          );
        })}
      </div>
    );
  }
}

Collection.propTypes = {
  cardsFiltered: PropTypes.arrayOf(PropTypes.shape({
    cardName: PropTypes.string.isRequired,
    cardDescription: PropTypes.string.isRequired,
    cardAttr1: PropTypes.string.isRequired,
    cardAttr2: PropTypes.string.isRequired,
    cardAttr3: PropTypes.string.isRequired,
    cardImage: PropTypes.string.isRequired,
    cardRare: PropTypes.string.isRequired,
    cardTrunfo: PropTypes.bool.isRequired,
  })).isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default Collection;
