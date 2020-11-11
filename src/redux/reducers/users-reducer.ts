import {GET_USERS} from '../types';

export type InitialStateType = {
  users: Array<any>,
  loading: boolean,
  error: string | null,
};

const initialState: InitialStateType = {
  users: [],
  loading: false,
  error: null,
};

export default function usersReducer(state = initialState, action: any): InitialStateType {
  switch (action.type) {
    case GET_USERS.REQUESTED:
      return {
        ...state,
        loading: true,
      };
    case GET_USERS.SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.users
      };
    case GET_USERS.FAILED:
      return {
        ...state,
        loading: false,
        error: action.message,
      };
    default:
      return state;
  }
}
