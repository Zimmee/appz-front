
import { AUTHENTICATE, LOGOUT } from '../actions/appslice';


const initialState = {
  token: null,
  user: null,
  allUsers: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case AUTHENTICATE:
      return {
        ...state,
        user: action.user,
      };
    case LOGOUT:
      return {
        ...initialState,
        didTryAutoLogin: true,
      };
    default:
      return state;
  }
};