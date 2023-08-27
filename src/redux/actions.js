import { UPDATE_ORG_DETAILS, UPDATE_CLIENT_DETAILS } from './actionTypes';

export const updateOrgDetails = (data) => ({ type: UPDATE_ORG_DETAILS, payload: data });
export const updateClientDetails = (data) => ({ type: UPDATE_CLIENT_DETAILS, payload: data });
