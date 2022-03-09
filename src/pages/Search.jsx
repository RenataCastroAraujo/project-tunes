import React, { Component } from 'react';
import Header from '../components/Header';

class Search extends Component {
  render() {
    return (
      <div data-testid="page-search">
        <h3>Search</h3>
        <Header />
      </div>

    );
  }
}

export default Search;
