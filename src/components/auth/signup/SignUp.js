import React from 'react';
import { Link, Redirect } from 'react-router-dom';

import './SignUp.scss';

import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../../firebase/firebase';
import { connect } from 'react-redux';
import { signUpAction } from '../../../redux-store/actions/AuthAction';



const SignUp = (props) => {
    
    const [email,setEmail] = React.useState('');
    const [name,setName] = React.useState('');
    const [password,setPassword] = React.useState('');

    const [user, loading, error] = useAuthState(auth);

    if(user){
        return <Redirect to="/" />
    }

    const handlerSubmit = async (e) => {
        e.preventDefault();
        
        console.log(email,password);
        await props.signUpAction(name,email,password);

       return props.history.push("/");
       
        
    }
    return (
        <div className="signup">
            <form onSubmit={handlerSubmit}>
                <h1>SignUp</h1>
                <div className="">
                    <label htmlFor="nameIDSignUp">name</label>
                    <input onChange={(e) => setName(e.target.value)} type="name" value={name}  id="nameIDSignUp" />
                </div>
                <div className="">
                    <label htmlFor="emailIDSignUp">Email</label>
                    <input onChange={(e) => setEmail(e.target.value)} type="email" value={email}  id="emailIDSignUp" />
                </div>
                <div className="">
                    <label htmlFor="passwordIDSignUp">Password</label>
                    <input name="password" onChange={(e) => setPassword(e.target.value)} value={password} type="password"  id="passwordIDSignUp" />
                </div>

                <button type="submit" value={'submit'}>
                    SignUp
                </button>
                <Link to="/login" style={{textDecoration:'none',color:'white'}}>
                    <div className="">Have Account? Login!</div>
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
    signUpAction
}

export default connect(mapStateToProps,mapStateToDispatch)(SignUp);
