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
                <h3 id="description">See what users are up to!</h3>
                <div className='body' id="partyBox" style={{border:"gold 10px groove"}}>
                    <h3 id="thirdPartyTitle">Uploads: </h3>
                    <span>Ethan created an entry!</span>
                    <span>Ethan created an entry!</span>
                    <span>Caseoh created an entry!</span>
                    <span>Luffy created an entry!</span>
                </div>
            </div>
        </main>
    );
}