import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate, NavLink } from 'react-router-dom'
import './login.css'


export function Authenticated(props){
    const navigate = useNavigate();

    function logout(){
        localStorage.removeItem('userName')
        localStorage.clear();
        props.onLogout();
    }

    return (
        <main className='main'>
            <div className='body'>
                <h2>{props.userName}</h2>
                <button className="btn btn-primary" onClick={() => navigate('/entry_upload')}>Upload Entry</button>
                <button className="btn btn-primary" onClick={() => navigate('/list')}>View lists</button>
                <button className="btn btn-primary" onClick={() => logout()}>Logout</button>
                <h3>See what users are up to!</h3>
                <div className='body' style={{border:"gold 10px groove"}}>
                    <h3>Uploads: </h3>
                    <span>Ethan created an entry!</span>
                    <span>Ethan created an entry!</span>
                    <span>Caseoh created an entry!</span>
                    <span>Luffy created an entry!</span>
                </div>
            </div>
        </main>
    );
}