import { auth } from "../../firebase/firebase";
import {SIGN_UP,SIGN_OUT,LOGIN} from '../../redux-store/actions/Types';
import store from "../store";

export const signUpAction = (username,email,password) => async dispatch => {
    const user = await auth.createUserWithEmailAndPassword(email,password);
    const editUser = await user.updateProfile({displayName:username});
    dispatch({
        type:SIGN_UP,
        payload:editUser
    });

} 

export const logOutAction = () => async dispatch => {
    const {user} = store.getState().auth;
    await auth.signOut();
    dispatch({
        type:SIGN_OUT
    })
}

export const loginAction = (email,password) => async dispatch => {
    const user  = await auth.signInWithEmailAndPassword(email,password);
    dispatch({
        type:LOGIN,
        payload:user
    });
}