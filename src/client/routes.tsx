import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Route, Switch, RouteComponentProps } from 'react-router-dom';
import { Login, Signup } from './containers';

interface IRoutes extends RouteComponentProps<any> {
  loadInitialData: () => void;
  isLoggedIn: boolean;
}

class Routes extends React.Component <IRoutes> {
  public componentDidMount () {
    this.props.loadInitialData();
  }

  public render () {
    const { isLoggedIn}  = this.props;
    return (
      <Switch>
        {/* Routes placed here are available to all visitors */}
        <div className='auth-form-container'>
          <Route path='/login' component={Login} />
          <Route path='/signup' component={Signup} />
        </div>
        {
          isLoggedIn &&
            <Switch>
              {/* Routes placed here are only available after logging in */}
            </Switch>
        }
        {/* Displays our Login component as a fallback */}
        <div className='auth-form-container'>
          <Route component={Login} />
        </div>
      </Switch>
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
    loadInitialData () {
      // dispatch();
    },
  };
};

// The `withRouter` wrapper makes sure that updates are not blocked when the url changes
export default withRouter(connect(mapState, mapDispatch)(Routes));
