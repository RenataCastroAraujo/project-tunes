import React, { Component } from 'react';
import Loading from '../components/Loading';
import { getUser } from '../services/userAPI';
import Header from '../components/Header';

class Search extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
    };
  }

  componentDidMount() {
    getUser().then(() => {
      this.setState({
        loading: false,
      });
    });
  }

  render() {
    const { loading } = this.state;
    return (
      <div data-testid="page-search">
        { loading ? <Loading /> : <Header /> }
      </div>

    );
  }
}

export default Search;
