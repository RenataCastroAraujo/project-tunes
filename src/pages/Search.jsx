import React, { Component } from 'react';
import Header from '../components/Header';

class Search extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      disabled: true,
    };
  }

  buttonAbled = () => {
    const { name } = this.state;
    const MAGICNUMBER = 2;
    if (name.length >= MAGICNUMBER) {
      this.setState({
        disabled: false,
      });
    } else {
      this.setState({
        disabled: true,
      });
    }
  }

  inputSearch = ({ target }) => {
    this.setState({
      [target.name]: target.value,
    }, this.buttonAbled);
  }

  render() {
    const { name, disabled } = this.state;
    return (
      <div data-testid="page-search">
        <Header />
        <form>
          <label htmlFor="search">
            <input
              data-testid="search-artist-input"
              placeholder="Nome do Artista"
              id="search"
              name="name"
              value={ name }
              onChange={ this.inputSearch }
            />
          </label>
          <button
            type="button"
            data-testid="search-artist-button"
            disabled={ disabled }
            onClick={ () => {} }
          >
            Procurar
          </button>
        </form>
      </div>

    );
  }
}

export default Search;
