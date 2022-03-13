import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { addSong } from '../services/favoriteSongsAPI';
import Inputs from './Inputs';
import Loading from './Loading';

class MusicCard extends Component {
  constructor() {
    super();
    this.state = {
      loading: false,
    };
  }

  checkBox = (data) => {
    this.setState({
      loading: true,
    }, async () => {
      await addSong(data);
      this.setState({
        loading: false,
      });
    });
  }

  render() {
    const { loading } = this.state;
    const { musics } = this.props;
    return (
      loading ? <Loading /> : (
        <div>
          {musics.map((music) => (
            <div key={ music.trackId }>
              <p>{ music.trackName }</p>
              <audio data-testid="audio-component" src={ music.previewUrl } controls>
                <track kind="captions" />
                O seu navegador não suporta o elemento
                {' '}
                <code>audio</code>
              </audio>
              <Inputs
                id={ music.trackId }
                checkbox={ this.checkBox }
                data={ music }
              />
            </div>
          ))}
        </div>
      )
    );
  }
}
MusicCard.propTypes = {
  musics: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MusicCard;
