import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './login.css'



export function Unauthenticated(props) {
    const [userName, setUsername]= React.useState();
    const [password, setPassword]= React.useState();

    async function loginUser(){
        localStorage.setItem('userName', userName);
        props.onLogin(userName);
    }

    async function createUser(){
        localStorage.setItem('userName', userName);
        props.onLogin(userName);

        const userProfile ={
          userName: {userName},
          profilePic: null,
          entriesCount: 0,
          listCount: 0,
          accountType: 'Public',
          bio: {
            favoriteMedia: "",
            favoritePiece: "",
            currentlyReading: "",
            bioMessage: ""
          }
        }
    };

  return (
    <main className="main">
      <div className="body">
        <div>
            <h1 id='welcomeTitle'>Welcome to Koob</h1>
            <h3>~ The only rating site you'll ever need ~</h3>
            <div className="input">
                <span className="inputText">Username: </span>
                <input type="text" className="form-control" onChange={(e) => setUsername(e.target.value)} placeholder="Username"></input>
            </div>
            <div className="input">
                <span className="inputText">Password: </span>
                <input type="password" className="form-control" onChange={(e) => setPassword(e.target.value)} placeholder="Password"></input>
            </div>
            <button type="submit" className="btn btn-primary" id="primaryButton" style={{width:"500px"}} onClick={() => loginUser()} disabled={!userName || !password}>Login</button>
            <button type="submit" className="btn btn-secondary" style={{width:"500px"}} onClick={() => createUser()} disabled={!userName || !password}>Create User</button>
        </div>
      </div>
    </main>
  );
}