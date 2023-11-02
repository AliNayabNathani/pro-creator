import { createReducer } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  isAuthenticated: false,
  user: null,
  message: null,
  error: null,
};
export const userReducer = createReducer(initialState, {
  //   loginRequest: state => {
  //     state.loading = true;
  //   },
  //   loginSuccess: (state, action) => {
  //     state.loading = false;
  //     state.isAuthenticated = true;
  //     state.user = action.payload.user;
  //     state.message = action.payload.message;
  //   },
  //   loginFail: (state, action) => {
  //     state.loading = false;
  //     state.isAuthenticated = false;
  //     state.error = action.payload;
  //   },

  registerRequest: state => {
    state.loading = true;
  },
  registerSuccess: (state, action) => {
    state.loading = false;
    state.message = action.payload.message;
  },
  registerFail: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },

  //   loadUserRequest: state => {
  //     state.loading = true;
  //   },
  //   loadUserSuccess: (state, action) => {
  //     state.loading = false;
  //     state.isAuthenticated = true;
  //     state.user = action.payload;
  //   },
  //   loadUserFail: (state, action) => {
  //     state.loading = false;
  //     state.isAuthenticated = false;
  //     state.error = action.payload;
  //   },
  //   logoutRequest: state => {
  //     state.loading = true;
  //   },
  //   logoutSuccess: (state, action) => {
  //     state.loading = false;
  //     state.isAuthenticated = false;
  //     state.user = null;
  //     state.message = action.payload;
  //   },
  //   logoutFail: (state, action) => {
  //     state.loading = false;
  //     state.isAuthenticated = true;
  //     state.error = action.payload;
  //   },
  clearError: state => {
    state.error = null;
  },
  clearMessage: state => {
    state.message = null;
  },
});
