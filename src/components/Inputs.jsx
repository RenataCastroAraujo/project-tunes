import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { getFavoriteSongs } from '../services/favoriteSongsAPI';
import Loading from './Loading';

class Inputs extends Component {
  constructor() {
    super();
    this.state = {
      isFavorite: false,
      loading: true,
    };
  }

  componentDidMount() {
    this.saveMusic();
  }

  saveMusic = async () => {
    const { data } = this.props;
    const response = await getFavoriteSongs();
    this.setState({
      isFavorite: response.some((music) => music.trackId === data.trackId),
      loading: false,
    });
  }

  render() {
    const { id, checkbox, data } = this.props;
    const { isFavorite, loading } = this.state;
    return (
      loading ? <Loading />
        : (
          <label htmlFor="favorites">
            Favorita
            <input
              data-testid={ `checkbox-music-${id}` }
              type="checkbox"
              id="favorites"
              checked={ isFavorite }
              onChange={ () => checkbox(data) }
            />
          </label>)
    );
  }
}

Inputs.propTypes = {
  checkbox: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  data: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Inputs;
