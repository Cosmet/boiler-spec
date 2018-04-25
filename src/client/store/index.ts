import {
  createStore,
  combineReducers,
  applyMiddleware,
} from 'redux';
import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
// import user from './user'

const reducer = combineReducers({
  // user,
});

const logger = createLogger({
  collapsed: true,
  diff: true,
});

const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware,logger)
);

const store = createStore(reducer, middleware);

export default store
// export * from './user'
