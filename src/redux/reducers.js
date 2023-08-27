import { UPDATE_ORG_DETAILS, UPDATE_CLIENT_DETAILS } from './actionTypes';

const initialState = { orgDetails: {}, clientDetails: {} };

export const detailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_ORG_DETAILS: return { ...state, orgDetails: action.payload };
    case UPDATE_CLIENT_DETAILS: return { ...state, clientDetails: action.payload };
    default: return state;
  }
};
