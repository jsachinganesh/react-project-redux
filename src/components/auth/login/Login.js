import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import './Login.scss';
import { useAuthState } from 'react-firebase-hooks/auth';

import {auth} from '../../../firebase/firebase'
import { connect } from 'react-redux';
import { loginAction } from '../../../redux-store/actions/AuthAction';


const Login = (props) => {
    
    const [email,setEmail] = React.useState('');
    const [password,setPassword] = React.useState('');
    // eslint-disable-next-line no-unused-vars
    const [user, loading, error] = useAuthState(auth);

    if(user){
        return <Redirect to="/" />
    }
    const handlerSubmit = async (e) => {
        e.preventDefault();
        
        await props.loginAction(email,password);

       return props.history.push("/signup");
       
        
    }

    return (
        <div className="signup">
            <form onSubmit={handlerSubmit}>
                <h1>Login</h1>
                <div className="">
                    <label htmlFor="emailIDLogin">Email</label>
                    <input onChange={(e) => setEmail(e.target.value)} type="email" value={email}  id="emailIDLogin" />
                </div>
                <div className="">
                    <label htmlFor="passwordIDLogin">Password</label>
                    <input name="password" onChange={(e) => setPassword(e.target.value)} value={password} type="password"  id="passwordIDLogin" />
                </div>

                <button type="submit" value={'submit'}>
                    Login
                </button>
                <Link to="/signup" style={{textDecoration:'none',color:'white'}}>
                    <div className="">No Account? Sign Up!</div>
                </Link>
            </form>
            
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        auth:state.auth
    }
}

const mapStateToDispatch = {
    loginAction
}


export default connect(mapStateToProps,mapStateToDispatch)(Login);
