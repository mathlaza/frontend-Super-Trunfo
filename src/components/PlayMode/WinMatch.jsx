import PropTypes from 'prop-types';
import React from 'react';
import '../../style/winMatch.css';

class WinMatch extends React.Component {
  constructor({ deckPlayer1, deckPlayer2 }) {
    super();

    this.state = {
      deck1: deckPlayer1,
      deck2: deckPlayer2,
    };
  }

  whoWon = () => {
    const { deck1, deck2 } = this.state;
    if (deck1.length === 0) return 2;
    if (deck2.length === 0) return 1;
  }

  render() {
    return (
      <section className="winMatchArea">
        <div className="winningPlayer">
          { `Player ${this.whoWon()} won !!!` }
        </div>
      </section>
    );
  }
}

WinMatch.propTypes = {
  deckPlayer1: PropTypes.number.isRequired,
  deckPlayer2: PropTypes.number.isRequired,
};

export default WinMatch;
