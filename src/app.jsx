import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './login/login';
import { Create_login } from './create login/create_login';
import { Edit_entry } from './edit entry/edit_entry';
import { Entry_upload } from './entry upload/entry_upload';
import { List } from './list/list';
import { Profile } from './profile/profile';
import { Profile_edit } from './profile edit/profile_edit';
import { About } from './about/about';
import { AuthState } from './login/authSet';

export default function App() {
    const [userName, setUserName] = React.useState(localStorage.getItem('userName') || '');
    const currentAuthState = userName ? AuthState.Authenticated : AuthState.Unauthenticated;
    const [authState, setAuthState] = React.useState(currentAuthState);



  return (
    <BrowserRouter>
        <div className="body">
            <header className="container-fluid">
                <nav>
                <a className="navbar-brand" id="titleWord" href="#"><h1>Koob<sup>&reg;</sup></h1></a>
                    <menu className="navbar-nav">
                        {authState === AuthState.Unauthenticated &&(                        
                        <li className="nav-item">
                            <NavLink className="nav-link" style={{color:"white"}} to='/'>Login</NavLink>
                        </li>)}
                        {authState === AuthState.Authenticated &&(                        
                        <li className="nav-item">
                            <NavLink className="nav-link" style={{color:"white"}} to='/'>Home</NavLink>
                        </li>)}
                        {authState === AuthState.Authenticated &&(
                            <li className="nav-item">
                                <NavLink className="nav-link" style={{color:"white"}} to='entry_upload'>Upload</NavLink>
                            </li>
                        )}
                        {authState === AuthState.Authenticated &&(
                            <li className="nav-item">
                                <NavLink className="nav-link" style={{color:"white"}} to='list'>List</NavLink>
                            </li>
                        )}
                        {authState === AuthState.Authenticated &&(
                            <li className="nav-item">
                                <NavLink className="nav-link" style={{color:"white"}} to='profile'>Profile</NavLink>
                            </li>
                        )}
                        <li className="nav-item">
                            <NavLink className="nav-link" style={{color:"white"}} to='about'>About</NavLink>
                        </li>

                    </menu>
                </nav>
            </header>

            <Routes>
                <Route path='/' element={
                    <Login 
                        userName={userName}
                        authState={authState}
                        onAuthChange={(userName, authState) => {
                            console.log(`im setting the authstate to ${authState.name}`)
                            setUserName(userName);
                            setAuthState(authState);
                        }}
                    />} exact />
                <Route path='/entry_upload' element={<Entry_upload />} />
                <Route path='/list' element={<List />} />
                <Route path='/about' element={<About />} />
                <Route path='/profile' element={<Profile />} />
                <Route path='/create_login' element={<Create_login />} />
                <Route path='/edit_entry' element={<Edit_entry />} />
                <Route path='/profile_edit' element={<Profile_edit />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
        </div>
        <footer style={{color: "lightgray"}} className="main">
            <div className="container-fluid" id="footerDiv">
                <span className="text-reset">Author: Ethan Nielsen</span>
                <a id="gitFooter" className="text-reset" href="https://github.com/wonderbread678/startup">GitHub</a>
            </div>
        </footer>
    </BrowserRouter>
  );
}

function NotFound() {
  return <main className="main">404: Return to sender. Address unknown.</main>;
}