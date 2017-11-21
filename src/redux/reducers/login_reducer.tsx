import { USER_LOGIN } from '../actions/actionTypes';

interface IPayload {
  email: string,
  password: string
}

interface IAction {
  type: string,
  payload?: any
}

const initialState: IPayload = {
  email: '',
  password: ''
};

const login = (state = initialState, action: IAction) => {
  switch(action.type){
    case USER_LOGIN:
      return {
        ...state,
        email: action.payload.email,
        password: action.payload.password
      }
    default:
      return state
  }
}

export default login;