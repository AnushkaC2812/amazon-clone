import React from 'react';
import './Login.css';
import {auth} from './firebase';
import {Link, useHistory} from 'react-router-dom';

function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const SignIn = e => {               //const SignIn takes an event e 
        e.preventDefault();

        auth
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
                history.push('/')
            })
            .catch(error => alert(error.message))
    }

    const register = e => {               
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email, password).then((auth) => {
            //it successfully created a user with new email and password
            if (auth) {
                history.push('/')
            }
            
        })
        .catch(error => alert(error.message))
    }

    return (
        <div className='login'>
            <Link to='/'>
                   <img className='login_logo'
                   src =''
                  />
            </Link>

        <div className='login_container'>
            <h1>Sign In</h1>
            <form>
                <h5>Email</h5>
                <input type='text' value={email} onChange = {e => setEmail(e.target.value)}/>

                <h5>Sign In</h5>
                <input type='password' value={email} onChange = {e => setEmail(e.target.value)}/>

                <button type = 'submit' onClick = {SignIn}
                className='login_signinButton'>Sign In</button>

            </form>

            <p>
                    By signing in bla bla
            </p>

            <button onClick={register}
            className='login_regButton'>Create New Account</button>
        </div>
        </div>
    )
}

export default Login
