import axios from 'axios';
import setAuthToken from '../utils/setAuthToken';

import jwt_decode from 'jwt-decode';

// import {
//   GET_ERRORS,
//   SET_CURRENT_USER,
//   CLEAR_CURRENT_PROFILE
// } from '../constants';

import {
  GET_ERRORS,
  SET_CURRENT_USER,
  CLEAR_CURRENT_PROFILE,
  EDIT_USER,
  GET_TEAM,
  UPDATE_USER_LOC
} from '../constants';

import { axiosPost, axiosPut } from '../utils/axios';

const Axios = axios.create({
  baseURL: 'http://localhost:3001',
  timeout: 5000,
  headers: {
    'access-control-allow-origin': '*'
  }
});

export const registerUser = (userData, history) => dispatch => {
  axiosPost('/users/register', userData)
  .then(res => {

    if (res.data.status === 400 || res.data.status === 500) {
      if (res.data.email) {
        console.log("Email!");
        dispatch({
          type: GET_ERRORS,
          payload: res.data
        })
        return res.data.email
      }
      if (res.data.username) {
        console.log("username!");
        dispatch({
          type: GET_ERRORS,
          payload: res.data
        })
        return res.data.username
      }
      if (res.data.password) {
        console.log("password!");
        dispatch({
          type: GET_ERRORS,
          payload: res.data
        })
        return res.data.password
      }
    }
    return res;
  })
    .then(res => history.push('/users/login'))
    .catch(err => {
      console.log(err);
      
    });
};

export const loginUser = userData => dispatch => {

     axiosPost('/users/login', userData)
       .then(res => {

         if (res.data.status === 400 || res.data.status === 500) {
          if (res.data.email) {
            console.log("Email!");
            dispatch({
                type: GET_ERRORS,
                payload: res.data
            })
            return res.data.email
          }
          if (res.data.username) {
            console.log("username!");
            dispatch({
              type: GET_ERRORS,
              payload: res.data
            })
            return res.data.username
          }
          if (res.data.password) {
            console.log("password!");
            dispatch({
              type: GET_ERRORS,
              payload: res.data
            })
            return res.data.password
          }
        }
          return res;
       })
       .then(res => { 

          const { token } = res.data;
          localStorage.setItem('jwtToken', token);
          setAuthToken(token);
          const decoded = jwt_decode(token);
          dispatch(setCurrentUser(decoded));
       })
       .catch(err => {
        console.log(err);
       })
};

export const updateUserLoc = userLocation => dispatch => {
  axiosPut('/users/updateuserloc?_method=PUT', userLocation)
    .then(res => {
      dispatch({
        type: UPDATE_USER_LOC,
        payload: res
      });
    })
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err
      });
    });
};

// Set logged in user
export const setCurrentUser = decoded => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  };
};

// Log user out
export const logoutUser = () => dispatch => {
  // Remove token from localStorage
  localStorage.removeItem('jwtToken');
  // Remove auth header for future requests
  setAuthToken(false);
  // Set current user to {} which will set isAuthenticated to false
  dispatch(setCurrentUser({}));
};

export const clearCurrentProfile = () => {
  return {
    type: CLEAR_CURRENT_PROFILE
  };
};

//Edit User
export const editUser = user => dispatch => {
  Axios.put('/users/update-profile', user)
    .then(user => {
      dispatch({
        type: EDIT_USER,
        data: user
      });
    })
    .catch(err => {
      console.log(err);
    });
};

//Get all users
export const getTeam = team => dispatch => {
  Axios.get(`/teams/getteam?id=${team.id}`)
    .then(result => {
      dispatch({
        type: GET_TEAM,
        data: result
      });
    })
    .catch(err => {
      console.log(err);
    });
};
