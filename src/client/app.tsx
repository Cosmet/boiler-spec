import React from 'react';
import { Nav } from './containers';
import Routes from './routes';

// App must be Component not PureComponent to unblock router
class App extends React.Component {
  public render () {
    return (
      <div>
        <Nav />
        <div className='main'>
          <Routes />
        </div>
      </div>
    );
  }
}

export default App;
