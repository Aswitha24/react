import {combineReducers} from 'redux';
import errorReducer from './errorReducer';
import registrationReducer from './registrationReducer';

export default combineReducers({
    errorReducer:errorReducer,
   logins:registrationReducer

});