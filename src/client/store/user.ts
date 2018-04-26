import axios from 'axios';

export interface IStateUser {
  id: number;
  name: string;
  error: {
    response?: {
      data?: string;
    };
  };
}

// INITIAL STATE
const defaultState: IStateUser = {
  id: 0,
  name: '',
  error: {},
};

// ACTION TYPES
const SET_USER = 'SET_USER';

// ACTION CREATORS
const setUser = (user: IStateUser) => ({ type: SET_USER, user });

// THUNK CREATORS
export const me = () => (dispatch) => {
  return axios.get('/auth/me')
    .then((res) => {
      const user = res.data || defaultState;
      dispatch(setUser(user));
    })
    .catch((err) => console.log(err));
};

// REDUCER
export default function (state: IStateUser = defaultState, action) {
  switch (action.type) {
    case SET_USER:
      return action.user;
    default:
      return state;
  }
}
