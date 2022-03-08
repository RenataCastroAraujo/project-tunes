import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <header>
        <h2>TrybeTunes</h2>
        <nav>
          <ul>
            <li><Link to="/search">Pesquisa</Link></li>
            <li><Link to="/favorites">Favoritos</Link></li>
            <li><Link to="/profile">Perfil</Link></li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
