import { combineReducers } from 'redux';
import {
  CREATE_COURSE,
  FETCH_COURSES,
  FETCH_COURSE,
  CREATE_TRANSACTION,
  UPLOAD_FILE,
  USER_SIGNUP,
  USER_LOGIN,
  FETCH_TRANSACTION,
  FETCH_TRANSACTIONS
} from './actionTypes';

const initialState = {
  courses: [],
  course: {},
  transactions: [],
  transaction: {},
  user: {}
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_COURSE:
      return { ...state, courses: [...state.courses, action.payload] };
    case FETCH_COURSES:
      return { ...state, courses: action.payload };
    case FETCH_COURSE:
      return { ...state, course: action.payload };
    case CREATE_TRANSACTION:
      return { ...state, transactions: [...state.transactions, action.payload] };
    case UPLOAD_FILE:
      return { ...state };
    case USER_SIGNUP:
      return { ...state, user: action.payload };
    case USER_LOGIN:
      return { ...state, user: action.payload };
    case FETCH_TRANSACTION:
      return { ...state, transaction: action.payload };
    case FETCH_TRANSACTIONS:
      return { ...state, transactions: action.payload };
    default:
      return state;
  }
};

export default rootReducer;