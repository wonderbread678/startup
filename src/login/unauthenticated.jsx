import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './login.css'



export function Unauthenticated(props) {
    const [userName, setUsername]= React.useState();
    const [password, setPassword]= React.useState();


    async function newProfile(userName){
      try{
        const response = await fetch('/api/createProfile', {
          method:'post',
          credentials:'include', 
          headers: {'Content-type': 'application/json; charset=UTF-8'},
          body: JSON.stringify({
            userName,
            profilePic: null,
            accountType: 'Public',
            bio: {
                favoriteMedia: '',
                favoritePiece: '',
                currentlyReading: '',
                bioMessage: ''
            }
          })
        })

      }
      catch(err){
        console.log(err);
      }
    }

    async function loginOrCreate(endpoint) {
      const response = await fetch(endpoint, {
        method: 'post',
        body: JSON.stringify({ email: userName, password: password }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
      if (response?.status === 200) {
        localStorage.setItem('userName', userName);
        props.onLogin(userName);
      } else {
        alert("UNAUTHORIZED")
      }
    }

  const handleLogin = async () => {
    await loginOrCreate('/api/auth/login');
  };

  const handleCreate = async () => {
    await loginOrCreate('/api/auth/create');
    await newProfile(userName);
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
            <button type="submit" className="btn btn-primary" id="primaryButton" style={{width:"500px"}} onClick={() => handleLogin()} disabled={!userName || !password}>Login</button>
            <button type="submit" className="btn btn-secondary" style={{width:"500px"}} onClick={() => handleCreate()} disabled={!userName || !password}>Create User</button>
        </div>
      </div>
    </main>
  );
}