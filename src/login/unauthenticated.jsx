import React from 'react';


export function Unauthenticated(props) {
    const [userName, setUsername]= React.useState();
    const [password, setPassword]= React.useState();

    async function onLogin(){

    }

    async function 

  return (
    <main className="main">
      <div className="body">
        <div>
            {/* <form method="get" action="List.html"> */}
              <h1 id='welcomeTitle'>Welcome to Koob</h1>
              <h3>~ The only rating site you'll ever need ~</h3>
              <div className="input">
                  <span className="inputText">Username: </span>
                  <input type="text" className="form-control" placeholder="Username"></input>
              </div>
              <div className="input">
                  <span className="inputText">Password: </span>
                  <input type="password" className="form-control" placeholder="Password"></input>
              </div>
              <button type="submit" className="btn btn-primary" id="primaryButton" style={{width:"500px"}}>
                <NavLink to='/list' className="loginButton" style={{color:'white'}}>Login</NavLink>
              </button>
          {/* </form> */}
          {/* <form method="get" to="/create_login"> */}
              <button type="submit" className="btn btn-secondary" style={{width:"500px"}}>
                <NavLink to='/create_login' className="loginButton" style={{color:'white'}}>Create</NavLink>
              </button>
          {/* </form> */}
        </div>
      </div>
    </main>
  );
}