import React, { Component } from 'react';
import PropTypes from 'prop-types';

class NavBar extends Component {
  render() {
    const {
      goCreationMode,
      goPlayMode,
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
        >
          Play
        </button>
      </section>
    );
  }
}

NavBar.propTypes = {
  goCreationMode: PropTypes.func.isRequired,
  goPlayMode: PropTypes.func.isRequired,
};

export default NavBar;
