import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Header from '../components/Header';
import Loading from '../components/Loading';
import MusicCard from '../components/MusicCard';
import getMusics from '../services/musicsAPI';

class Album extends Component {
  constructor() {
    super();
    this.state = {
      musics: [],
      collectionAlbum: {},
      loading: true,
    };
  }

  componentDidMount() {
    this.showMusics();
  }

  showMusics = async () => {
    const {
      match: {
        params: { id },
      },
    } = this.props;
    const musicsAlbum = await getMusics(id);
    this.setState({
      musics: musicsAlbum.filter((music) => music.kind === 'song'),
      collectionAlbum: musicsAlbum[0],
      loading: false,
    });
  }

  render() {
    const { musics, loading, collectionAlbum } = this.state;
    return (
      <div data-testid="page-album">
        <Header />
        {loading ? (<Loading />)
          : (
            <>
              <div>
                <p data-testid="artist-name">
                  { collectionAlbum.artistName }
                </p>
                <p data-testid="album-name">{ collectionAlbum.collectionName }</p>
              </div>
              <MusicCard
                musics={ musics }
              />

            </>)}

      </div>
    );
  }
}

Album.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default Album;
