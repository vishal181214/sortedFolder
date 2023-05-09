import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import LogInAxios  from '../Axios/LogInAxios';


function LogIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const logIn  = async () => {
        const data = await LogInAxios({email,password});
        console.log(data);
        if(data){
            navigate('/welcome');
        }        
    }
    return (
        <>
            <div className='HomeMainDiv'>
                <div className='formDiv'>
                    <h4 className='mainLabel'>LogIn</h4>
                    <div className='inputGroup'>
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className='inputBox' placeholder='UserName' />
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className='inputBox' placeholder='Password' />
                        <button className='bttn btnlogin' onClick={()=>logIn()}>LogIn</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LogIn
