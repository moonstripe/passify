import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  logins: [],
  selectedLogin: null
};

const loginSlice = createSlice({
  name: 'logins',
  initialState: INITIAL_STATE,
  reducers: {
    getLogins: (state, action) => ({
      ...state,
      logins: action.payload
    }),
    getLogin: (state, action) => ({
      ...state,
      selectedLogin: action.payload
    }),
  },
});

export const {
  getLogins,
  getLogin,
} = loginSlice.actions;

export const loginReducer = loginSlice.reducer;
