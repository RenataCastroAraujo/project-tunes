import React, { Component } from 'react';
import Header from '../components/Header';

class Profile extends Component {
  render() {
    return (
      <div data-testid="page-profile">
        <h3>Perfil</h3>
        <Header />
      </div>
    );
  }
}

export default Profile;
