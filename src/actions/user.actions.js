import { userConstants } from '../_constants';
import LoginService from '../Service/LoginService'
import { alertActions } from './';
import {history} from '../history'
import {toast} from 'react-toastify'
toast.configure();
export const userActions = {
    login
};

function login(id, password) {
    return dispatch => {
        dispatch(request({ id }));

        LoginService.validate(id, password)
            .then(
                user => { 
//console.log(user.response.ok);
                    console.log(user.data)
                    console.log(user.status)
                    console.log(user.data.type)
                   if(user.status===200){
                     if(user.data.type==='customer' || user.data.type==='admin')
                    {
                    dispatch(success(user));
                    toast.success("login successfull",{position:toast.POSITION.TOP_CENTER,autoClose:false})
                    history.push({pathname:'/home',state:{data:user.data.type}});
                    }
                    }
                else
                    {
                dispatch(failure(user.data));
                        dispatch(alertActions.error('Enter Valid userId and password'));
                        toast.error("Enter Valid userId and password",{position:toast.POSITION.TOP_CENTER,autoClose:false})
                        //history.push({pathname:'/login',state:{data1:user.data}});
                     }
        },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                 }
            );
    };

    function request(user) { return { type: userConstants.LOGIN_REQUEST, user } }
    function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } }
    function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
}

