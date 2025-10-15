import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate, NavLink } from 'react-router-dom'
import './login.css'


export function Authenticated(props){

    function logout(){
        localStorage.removeItem('userName')
        props.onLogout();
    }

    return (
        <main className='main'>
            <div className='body'>
                <h1>Welcome to Koob Home</h1>
                <h2>{props.userName}</h2>
                <button><NavLink className="nav-link" style={{color:"white"}} to='list'>List</NavLink></button>
                <button onClick={() => useNavigate('/list')}>View lists</button>
                <button onClick={() => logout()}>Logout</button>
            </div>
        </main>
    );
}