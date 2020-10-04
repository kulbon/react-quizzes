export const UPDATE = 'UPDATE';
export const UPDATE_STATUSES = 'UPDATE_STATUSES';

export const update = payload => {
  return {
    type: UPDATE,
    payload: payload,
  };
};
export const updateStatuses = payload => {
  return {
    type: UPDATE_STATUSES,
    payload: payload,
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
    case UPDATE_STATUSES: {
      const data = action.payload;
      return {
        ...state,
        statuses: [...state.statuses, data],
      };
    }
    default:
      return state;
  }
};
