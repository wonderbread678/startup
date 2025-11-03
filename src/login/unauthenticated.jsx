import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './login.css'



export function Unauthenticated(props) {
    const [userName, setUsername]= React.useState();
    const [password, setPassword]= React.useState();

      async function loginOrCreate(endpoint, profile = null) {
    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: userName,
          password,
          profile,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem('userName', data.username);
        localStorage.setItem('userProfile', JSON.stringify(data.profile));
        props.onLogin(data.username);
        setDisplayError('');
      } else {
        const body = await response.json();
        setDisplayError(`⚠ Error: ${body.msg}`);
      }
    } catch (err) {
      setDisplayError(`⚠ Network error: ${err.message}`);
    }
  }

  const handleLogin = async () => {
    await loginOrCreate('/api/auth/login');
  };

  const handleCreate = async () => {
    await loginOrCreate('/api/auth/create', defaultProfile);
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