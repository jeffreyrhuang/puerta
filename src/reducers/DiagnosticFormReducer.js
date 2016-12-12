import {
  UPDATE_DIAGNOSTIC,
  SHOW_VALIDATION_ERRORS
} from '../actions/types';

const INITIAL_STATE = {
  errors: [],
  diag1: {
    value: '',
    isFilled: false,
    isValid: false,
  },
  diag2: {
    value: '',
    isFilled: false,
    isValid: false
  }
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_DIAGNOSTIC:
      let prop = action.payload.prop;
      return {
        ...state, [action.payload.prop]: { ...state.prop, value: action.payload.value, isFilled: action.payload.isFilled }
      };
    case SHOW_VALIDATION_ERRORS:
      return { ...state, errors: action.payload };
    default:
      return state;
  }
};
