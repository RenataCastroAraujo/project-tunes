import React from 'react';
import { Redirect } from 'react-router-dom';
import { createUser } from '../services/userAPI';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      disabledButton: true,
      name: '',
      redirect: false,
    };
  }

  buttonAbled = () => {
    const { name } = this.state;
    const MAGICNUMBER = 3;
    if (name.length >= MAGICNUMBER) {
      this.setState({
        disabledButton: false,
      });
    } else {
      this.setState({
        disabledButton: true,
      });
    }
  }

  inputChange = ({ target }) => {
    this.setState({
      [target.name]: target.value,
    }, this.buttonAbled);
  }

  saveUser = () => {
    const { name } = this.state;
    createUser({
      name,
    });
    this.setState({
      redirect: true,
    });
  }

  render() {
    const { disabledButton, name, redirect } = this.state;
    return (
      <>
        <div data-testid="page-login">
          Login
        </div>
        <label htmlFor="input-name">
          Nome:
          <input
            type="text"
            name="name"
            value={ name }
            onChange={ this.inputChange }
            data-testid="login-name-input"
          />
        </label>
        <button
          type="button"
          data-testid="login-submit-button"
          disabled={ disabledButton }
          onClick={ this.saveUser }
        >
          Entrar
        </button>
        {redirect && <Redirect to="/search" />}
      </>

    );
  }
}

export default Login;
