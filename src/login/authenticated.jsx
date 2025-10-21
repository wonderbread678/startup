import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate, NavLink } from 'react-router-dom'
import './login.css'


export function Authenticated(props){
    const navigate = useNavigate();

    function logout(){
        localStorage.removeItem('userName')
        props.onLogout();
    }

    return (
        <main className='main'>
            <div className='body'>
                <h1>Welcome to Koob Home</h1>
                <h2>{props.userName}</h2>
                <button className="btn btn-primary" onClick={() => navigate('/entry_upload')}>Upload Entry</button>
                <button className="btn btn-primary" onClick={() => navigate('/list')}>View lists</button>
                <button className="btn btn-primary" onClick={() => logout()}>Logout</button>
            </div>
        </main>
    );
}