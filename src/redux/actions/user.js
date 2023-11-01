import { server } from '../store';
import axios from 'axios';

export const registerUser = formData => async dispatch => {
  try {
    dispatch({ type: 'registerRequest' });

    const response = await axios.post(`${server}/user/register`, formData, {
      withCredentials: true,
    });

    dispatch({
      type: 'registerSuccess',
      payload: response.data,
    });
  } catch (error) {
    dispatch({ type: 'registerFail', payload: error.message });
  }
};
