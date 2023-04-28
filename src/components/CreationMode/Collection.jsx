import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

class Collection extends React.Component {
  render() {
    const {
      cardsFiltered,
      handleDelete,
    } = this.props;

    return (
      <div className="cardSaved">
        {cardsFiltered.map((card, index) => {
          const allState = {
            cardName: card.Nome,
            cardDescription: card.Descrição,
            cardAttr1: card.Attr1,
            cardAttr2: card.Attr2,
            cardAttr3: card.Attr3,
            cardImage: card.Imagem,
            cardRare: card.Raridade,
            cardTrunfo: card.Trunfo,
          };

          return (
            <div key={ index }>
              <Card
                allState={ allState }
                playing={ false }
              />

              <button
                name={ card.Nome }
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
    Nome: PropTypes.string.isRequired,
    Descrição: PropTypes.string.isRequired,
    Attr1: PropTypes.string.isRequired,
    Attr2: PropTypes.string.isRequired,
    Attr3: PropTypes.string.isRequired,
    Imagem: PropTypes.string.isRequired,
    Raridade: PropTypes.string.isRequired,
    Trunfo: PropTypes.bool.isRequired,
  })).isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default Collection;
