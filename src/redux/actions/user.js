import { server } from '../store';
import axios from 'axios';

export const registerUser = formData => async dispatch => {
  try {
    dispatch({ type: 'registerRequest' });

    const response = await axios.post(`${server}/user/register`, formData, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    dispatch({
      type: 'registerSuccess',
      payload: response.data,
    });
  } catch (error) {
    dispatch({ type: 'registerFail', payload: error.message });
  }
};

export const login = (username, password) => async dispatch => {
  try {
    dispatch({ type: 'loginRequest' });

    const { data } = await axios.post(
      `${server}/user/login`,
      { username, password },
      {
        headers: {
          'Content-type': 'application/json',
        },
      }
    );
    dispatch({ type: 'loginSuccess', payload: data });
  } catch (error) {
    dispatch({ type: 'loginFail', payload: error.response.data.message });
  }
};
