import AsyncStorage from '@react-native-async-storage/async-storage';
import createContext from './createContext';
import tracksApi from '../api/tracks';
import { navigate } from '../navigationRef';

const authReducer = (state, action) => {
    switch (action.type) {
        case 'add_error':
            return { ...state, errorMessage: action.payload}
        case 'signin':
            return {errorMessage: '' ,token: action.payload }
        case 'clear_error_message':
            return { ...state, errorMessage: '' }
        case 'signout':
            return { errorMessage: '', token: null}
        default:
            return state
    }
};

const tryLocalSignin = dispatch => async () => {
    const token = await AsyncStorage.getItem('token');
    if (token) {
        dispatch ({ type: 'signin', payload: token});
        navigate('TrackList');
    } else {
        navigate('Signup');
    }
};

const clearErrorMessage = dispatch => () => {
    dispatch ({ type: 'clear_error_message'});
}


const signup = dispatch =>  async ( email, password ) => {
    try {
        const response = await tracksApi.post('/signup', { email, password });
        await AsyncStorage.setItem('token', response.data.token);
        dispatch({ type: 'signin', payload: response.data.token });
        navigate('TrackList');
    } catch (err) {
        dispatch({ type: 'add_error', payload: 'Something went wrong'})
    }
};

const signin = dispatch =>  async ( email, password ) => {
    try {
        const response = await tracksApi.post('/signin', { email, password });
        await AsyncStorage.setItem('token', response.data.token);
        dispatch({ type: 'signin', payload: response.data.token });
        navigate('TrackList');
    } catch (err) {
        dispatch({ type: 'add_error', payload: 'Something went wrong'})
    }
};

const signout = dispatch => async () => {
    await AsyncStorage.removeItem('token');
    dispatch({ type: 'signout' });
    navigate('Signup');
}


export const { Provider, Context } = createContext(
    authReducer,
    { signup, signin, clearErrorMessage, tryLocalSignin, signout },
    { token: null, errorMessage: ""}
);