import React from 'react';
import { connect } from 'react-redux';
import { Button, Label } from '@blueprintjs/core';
import { IStateUser } from '../store/user';

interface IAuthForm extends Pick<IStateUser, 'error'> {
  name: string;
  displayName: string;
  handleSubmit: () => void;
}

class AuthForm extends React.PureComponent<IAuthForm> {

  public render () {
    const { name, displayName, handleSubmit, error } = this.props;
    const errorExists = error && error.response;

    return (
      <form className='auth-form' onSubmit={handleSubmit} name={name}>
        <Label text='Email'>
          <input
            name='email'
            type='email'
            className='pt-input'
            placeholder='name@domain.com'
          />
        </Label>
        <Label text='Password'>
          <input
            name='password'
            type='password'
            className='pt-input'
            placeholder='**********'
          />
        </Label>
        <Button type='submit' text={displayName} />
        {
          errorExists
          && <div> {error.response.data} </div>
        }
      </form>
    );
  }
}

/*
 *  Note that we have two different sets of 'mapStateToProps' functions -
 *  one for Login, and one for Signup. However, they share the same 'mapDispatchToProps'
 *  function, and share the same Component.
 */

const mapLogin = (state) => {
  return {
    name: 'login',
    displayName: 'Login',
    error: state.user.error,
  };
};

const mapSignup = (state) => {
  return {
    name: 'signup',
    displayName: 'Sign Up',
    error: state.user.error,
  };
};

const mapDispatch = (dispatch) => {
  return {
    handleSubmit (event): void {
      event.preventDefault();
      const formName = event.target.name;
      const email = event.target.email.value;
      const password = event.target.password.value;
      // dispatch();
    },
  };
};

export const Login = connect(mapLogin, mapDispatch)(AuthForm);
export const Signup = connect(mapSignup, mapDispatch)(AuthForm);
