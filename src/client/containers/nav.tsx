import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  Alignment,
  Button,
  Navbar,
  NavbarDivider,
  NavbarGroup,
  NavbarHeading,
} from '@blueprintjs/core';

interface INav {
  handleClick: () => void;
  isLoggedIn: boolean;
}

class Nav extends React.PureComponent <INav> {

  public render () {
    const { isLoggedIn, handleClick } = this.props;

    return (
      <Navbar>
        {
          isLoggedIn
            ? ( // authorized user
              <NavbarGroup align={Alignment.LEFT}>
                <NavbarHeading>Admin Panel</NavbarHeading>
                <NavbarDivider />
                <Link to='/'>
                  <Button
                    className='pt-minimal'
                    icon='home'
                    text='Home'
                  />
                </Link>
                <Button
                  onClick={handleClick}
                  className='pt-minimal'
                  icon='log-out'
                  text='Logout'
                />
              </NavbarGroup>
            )
            : ( // unauthorized user
              <NavbarGroup align={Alignment.LEFT}>
                <NavbarHeading>Admin Panel</NavbarHeading>
                <NavbarDivider />
                <Link to='/login'>
                  <Button
                    className='pt-minimal'
                    icon='log-in'
                    text='Login'
                  />
                </Link>
                <Link to='/signup'>
                  <Button
                    className='pt-minimal'
                    text='Signup'
                  />
                </Link>
              </NavbarGroup>
            )
        }
      </Navbar>
    );
  }
}

const mapState = (state) => {
  return {
    isLoggedIn: !!state.user.id,
  };
};

const mapDispatch = (dispatch) => {
  return {
    handleClick (): void {
      // dispatch();
    },
  };
};

export default connect(mapState, mapDispatch)(Nav);
