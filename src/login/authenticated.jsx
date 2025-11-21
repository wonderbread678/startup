import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom'
import './authenticated.css'

export function Authenticated(props){
    const navigate = useNavigate();

    function logout(){
        fetch(`/api/auth/logout`, {
        method: 'delete',
    })
        .catch(() => {
        })
        .finally(() => {
        localStorage.removeItem('userName');
        props.onLogout();
    });
}

    return (
        <main className='main'>
            <div className='body'>
                <h2 id="userDisplay">{props.userName}</h2>
                <div id="buttonContainer">
                    <button className="btn btn-primary" id="primaryButton" onClick={() => navigate('/entry_upload')}>Upload Entry</button>
                    <button className="btn btn-primary" id="primaryButton" onClick={() => navigate('/list')}>View lists</button>
                    <button className="btn btn-primary" id="secondaryButton" onClick={() => logout()}>Logout</button>
                </div>
            </div>
        </main>
    );
}