import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="Name">
          Name
          <input type="text" data-testid="name-input" />
        </label>
        <label htmlFor="Description">
          Description
          <input type="textarea" data-testid="description-input" />
        </label>
        <label htmlFor="Attr1">
          Attr1
          <input type="number" data-testid="attr1-input" />
        </label>
        <label htmlFor="Attr2">
          Attr2
          <input type="number" data-testid="attr2-input" />
        </label>
        <label htmlFor="Attr3">
          Attr3
          <input type="number" data-testid="attr3-input" />
        </label>
        <label htmlFor="Image">
          Image
          <input type="text" data-testid="image-input" />
        </label>
        <label htmlFor="Rarity">
          Rarity
          <select data-testid="rare-input">
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>
        <label htmlFor="Trunfo">
          Super Trunfo
          <input type="checkbox" data-testid="trunfo-input" />
        </label>
        <button type="submit" data-testid="save-button">Salvar</button>
      </form>
    );
  }
}

export default Form;
