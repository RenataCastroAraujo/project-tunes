import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getUser } from '../services/userAPI';
import Loading from './Loading';

class Header extends Component {
  constructor() {
    super();
    this.state = {
      user: '',
      loading: true,
    };
  }

  async componentDidMount() {
    const infoUser = await getUser();
    this.setState({
      user: infoUser.name,
      loading: false,
    });
  }

  render() {
    const { user, loading } = this.state;
    return (
      loading
        ? <Loading />
        : (
          <header data-testid="header-component">
            <h2>TrybeTunes</h2>
            <h4 data-testid="header-user-name">{ user }</h4>
            <nav>
              <ul>
                <li><Link data-testid="link-to-search" to="/search">Pesquisa</Link></li>
                <li>
                  <Link data-testid="link-to-favorites" to="/favorites">Favoritos</Link>
                </li>
                <li><Link data-testid="link-to-profile" to="/profile">Perfil</Link></li>
              </ul>
            </nav>
          </header>)

    );
  }
}

export default Header;
