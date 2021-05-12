import { GET_ERROR,GET_ERRORS } from './../actions/type';

const initialState={};
export default function errorReducer(state=initialState,action){
    switch(action.type){
        case GET_ERROR:
            return action.payload;
    
        case GET_ERRORS:
                return action.payload;
            default:
                return state;
    }
}
