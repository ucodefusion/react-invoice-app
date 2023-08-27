#!/bin/sh

# Create a folder named redux (assuming it doesn't exist)
mkdir -p redux

# Navigate to the folder
cd redux

# Create the actionTypes, actions, and reducers files
echo "export const UPDATE_ORG_DETAILS = 'UPDATE_ORG_DETAILS';" > actionTypes.js
echo "export const UPDATE_CLIENT_DETAILS = 'UPDATE_CLIENT_DETAILS';" >> actionTypes.js

echo "import { UPDATE_ORG_DETAILS, UPDATE_CLIENT_DETAILS } from './actionTypes';" > actions.js
echo "" >> actions.js
echo "export const updateOrgDetails = (data) => ({ type: UPDATE_ORG_DETAILS, payload: data });" >> actions.js
echo "export const updateClientDetails = (data) => ({ type: UPDATE_CLIENT_DETAILS, payload: data });" >> actions.js

echo "import { UPDATE_ORG_DETAILS, UPDATE_CLIENT_DETAILS } from './actionTypes';" > reducers.js
echo "" >> reducers.js
echo "const initialState = { orgDetails: {}, clientDetails: {} };" >> reducers.js
echo "" >> reducers.js
echo "export const detailsReducer = (state = initialState, action) => {" >> reducers.js
echo "  switch (action.type) {" >> reducers.js
echo "    case UPDATE_ORG_DETAILS: return { ...state, orgDetails: action.payload };" >> reducers.js
echo "    case UPDATE_CLIENT_DETAILS: return { ...state, clientDetails: action.payload };" >> reducers.js
echo "    default: return state;" >> reducers.js
echo "  }" >> reducers.js
echo "};" >> reducers.js
