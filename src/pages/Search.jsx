import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import searchAlbumsAPI from '../services/searchAlbumsAPI';
import Loading from '../components/Loading';

class Search extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      disabled: true,
      loading: false,
      artist: '',
      searchArtist: [],
      isVoid: false,
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

  getAPI = () => {
    const { name } = this.state;
    this.setState({
      loading: true,
    }, async () => {
      const searchArtist = await searchAlbumsAPI(name);
      if (searchArtist !== null) {
        this.setState({
          loading: false,
          artist: name,
          name: '',
          searchArtist,
          isVoid: searchArtist.length === 0,
        });
      }
    });
  }

  render() {
    const { name, disabled, loading, artist, searchArtist, isVoid } = this.state;
    return (
      <div data-testid="page-search">
        <Header />
        { loading ? <Loading />
          : (
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
                onClick={ this.getAPI }
              >
                Procurar
              </button>
            </form>)}
        {searchArtist.length !== 0 && (
          <p>
            Resultado de álbuns de:
            { ' ' }
            { artist }
          </p>)}
        {isVoid ? <p>Nenhum álbum foi encontrado </p> : (
          searchArtist.map((album) => (
            <Link
              to={ `/album/${album.collectionId}` }
              key={ album.collectionId }
              data-testid={ `link-to-album-${album.collectionId}` }
            >
              <p>{ album.collectionName }</p>

            </Link>))
        )}

      </div>

    );
  }
}

export default Search;
