export const UPDATE = 'UPDATE';
export const INCREASE_COUNTER = 'INCREASE_COUNTER';
export const ADD_ANSWER = 'ADD_ANSWER';
export const SET_COMPLETED = 'SET_COMPLETED';

export const update = payload => {
  return {
    type: UPDATE,
    payload: payload,
  };
};

export const increaseCounter = () => {
  return {
    type: INCREASE_COUNTER,
  };
};
export const addAnswear = payload => {
  return {
    type: ADD_ANSWER,
    payload: payload,
  };
};

export const setCompleted = () => {
  return {
    type: SET_COMPLETED,
  };
};

export const stateReducer = (state, action) => {
  switch (action.type) {
    case UPDATE: {
      const data = action.payload;
      return {
        ...state,
        ...data,
      };
    }
    case INCREASE_COUNTER: {
      return {
        ...state,
        counter: state.counter + 1,
      };
    }
    case ADD_ANSWER: {
      const answer = action.payload;
      return {
        ...state,
        userAnswers: [...state.userAnswers, answer],
      };
    }
    case SET_COMPLETED: {
      return {
        ...state,
        result: true,
      };
    }
    default:
      return state;
  }
};
