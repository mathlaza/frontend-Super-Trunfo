import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './filters.css';

class Filters extends Component {
  render() {
    const {
      handleChange,
      findTrunfo,
    } = this.props;

    return (
      <div className="filterFields">
        <input
          className="filterName"
          type="text"
          name="findName"
          placeholder="Card name"
          onChange={ handleChange }
          disabled={ findTrunfo }
        />
        <select
          className="filterSelect"
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
            className="filterCheckBox"
            type="checkbox"
            name="findTrunfo"
            onChange={ handleChange }
          />
          <span>Find Super Trunfo</span>
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
