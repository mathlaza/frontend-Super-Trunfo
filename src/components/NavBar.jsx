import React, { Component } from 'react';
import PropTypes from 'prop-types';

class NavBar extends Component {
  render() {
    const {
      goCreationMode,
      goPlayMode,
      buttonPlayEnable,
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

        {!buttonPlayEnable && <div>Crie pelo menos 4 cards!</div>}
      </section>
    );
  }
}

NavBar.propTypes = {
  goCreationMode: PropTypes.func.isRequired,
  goPlayMode: PropTypes.func.isRequired,
  buttonPlayEnable: PropTypes.bool.isRequired,
};

export default NavBar;
