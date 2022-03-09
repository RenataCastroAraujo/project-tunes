import React, { Component } from 'react';
import Header from '../components/Header';

class Favorite extends Component {
  render() {
    return (
      <div data-testid="page-favorites">
        <h3>Favoritos</h3>
        <Header />
      </div>
    );
  }
}

export default Favorite;
