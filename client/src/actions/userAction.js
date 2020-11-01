import { LOAD_USER, LOGIN_SUCCESS, LOGIN_FAILED, USER_LOADING } from './type';
import axios from 'axios';

// load user

export const loadUser = () => (dispatch, getState) => {
    // user loading
    dispatch({ type : USER_LOADING });
   
    axios.get('http://localhost:4040/api/auth/user',tokenConfig(getState))
    .then(res => dispatch({
        type: LOAD_USER,
        payload: res.data
    }))
    .catch(err => {
        console.log(err)
    })
}

// get token

export const tokenConfig = getState =>{
    // get token localStorage
    const token = getState().auth.token;

    //Header
    const config = {
        headers: {
            "Content-type":"application/json"
        }
    }
    // if token then add to headers
    if(token){
        config.headers['app-token'] = token;
    }
    return config;
}