import * as React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../assets/css/Login.css"

export const Login = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigateTo = (id ?: number) => {
        String(id)
      navigate('/register');
    }

    const navigateToHome = (id ?: number) => {
        String(id)
        navigate('/');
    }
    return (
        <body>
            <div className='item'>
                <form action="Login">
                    <input type="textarea" placeholder='E-mail' required autoFocus value={email} onChange={(e) => setEmail(e.target.value)}/><br />
                    <input type="password" placeholder='Password' required value={password} onChange={(e) => setPassword(e.target.value)}/><br />
                    <input onClick={() => navigateToHome()} type="submit" value='Login'/>
                </form>
                <input onClick={() => navigateTo() } type="submit" value='New account'/>
                
            </div>
            
            
            
        </body>        
    )
} 
