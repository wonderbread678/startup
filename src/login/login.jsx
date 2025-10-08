import React from 'react';
import './login.css'
import '../app.css'

export function Login() {
  return (
    <main className="main">
      <div>
        <div>
            <form method="get" action="List.html">
                <h1>Welcome to Koob</h1>
                <h3>~ The only rating site you'll ever need ~</h3>
                <div className="input">
                    <span className="inputText">Username: </span>
                    <input type="text" className="form-control" placeholder="Username"></input>
                </div>
                <div className="input">
                    <span className="inputText">Password: </span>
                    <input type="password" className="form-control" placeholder="Password"></input>
                </div>
                <button type="submit" className="btn btn-primary" id="primaryButton">Login</button>
            </form>
            <form method="get" action="Create_login.html">
                <button type="submit" className="btn btn-secondary">Create</button>
            </form>
        </div>
      </div>
    </main>
  );
}