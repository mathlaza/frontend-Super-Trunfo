import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Filters extends Component {
  render() {
    const {
      handleChange,
      findTrunfo,
    } = this.props;

    return (
      <div>
        <input
          type="text"
          name="findName"
          placeholder="Card name"
          onChange={ handleChange }
          disabled={ findTrunfo }
        />
        <select
          name="findRare"
          onChange={ handleChange }
          disabled={ findTrunfo }
          defaultValue="todas"
        >
          <option value="todas">All Rarities</option>
          <option value="normal">Normal</option>
          <option value="raro">Raro</option>
          <option value="muito raro">Muito raro</option>
        </select>
        <label htmlFor="findTrunfo">
          <input
            type="checkbox"
            name="findTrunfo"
            onChange={ handleChange }
          />
          Find SuperTrunfo
        </label>
      </div>
    );
  }
}

Filters.propTypes = {
  handleChange: PropTypes.func.isRequired,
  findTrunfo: PropTypes.bool.isRequired,
};

export default Filters;
