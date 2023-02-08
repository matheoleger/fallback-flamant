import * as React from 'react'
import { useNavigate } from 'react-router-dom';
import "../assets/css/Register.css"

export const Register = () => {
    const navigate = useNavigate();

    const navigateTo = (id ?: number) => {
    String(id)
      navigate('/login');
    }
    return (
        <body>
            <div className='item'>
                <form action="Register">
                    <input type="textareaRegister" placeholder='E-mail'  required autoFocus/><br />
                    <input type="password" placeholder='Password' required /><br />
                    <input type="textareaRegister" placeholder='Name' required /><br />
                    <input type="textareaRegister" placeholder='LastName'required /><br />
                    <input type="submit" value='Register'/>
                </form>
                <input onClick={() => navigateTo()} type="submit" value='Connexion'/>
                
            </div>
            
            
            
        </body>        
    )
} 