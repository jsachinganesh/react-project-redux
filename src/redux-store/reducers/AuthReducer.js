import { SIGN_UP, SIGN_OUT, LOGIN } from "../actions/Types";

const initialState = {
    invoices: null
};

const AuthReducer = (state = initialState,action) => {
    switch (action.type) {
        case SIGN_UP:
            
            return{
                ...state,
                user:action.payload
            }

        case SIGN_OUT:
            return {
                ...state,
                user:null
            }
        
        case LOGIN:
            return {
                ...state,
                user:action.payload
            }
    
        default:
            return state;
    }
}

export default AuthReducer;