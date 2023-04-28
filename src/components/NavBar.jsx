import React, { Component } from 'react';
import PropTypes from 'prop-types';

class NavBar extends Component {
  render() {
    const {
      goCreationMode,
      goPlayMode,
      buttonPlayEnable,
      goInstructionMode,
    } = this.props;

    return (
      <section>
        <button
          type="button"
          onClick={ goCreationMode }
        >
          Create
        </button>

        <button
          type="button"
          onClick={ goPlayMode }
          disabled={ !buttonPlayEnable }
        >
          Play
        </button>
        {!buttonPlayEnable && <span>Crie pelo menos 4 cards!</span>}

        <button
          type="button"
          onClick={ goInstructionMode }
        >
          Instructions
        </button>
      </section>
    );
  }
}

NavBar.propTypes = {
  goCreationMode: PropTypes.func.isRequired,
  goPlayMode: PropTypes.func.isRequired,
  buttonPlayEnable: PropTypes.bool.isRequired,
  goInstructionMode: PropTypes.func.isRequired,
};

export default NavBar;
