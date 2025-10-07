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

export default function App() {
  return (
    <BrowserRouter>
        <div className="body">
        <header className="container-fluid">
            <nav>
            <a className="navbar-brand" href="#"><h1>Koob<sup>&reg;</sup></h1></a>
                <menu className="navbar-nav">
                    <li className="nav-item">
                        <NavLink className="nav-link" style={{color:"white"}} to='login'>Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" style={{color:"white"}} to='entry_upload'>Upload</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" style={{color:"white"}} to='list'>List</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" style={{color:"white"}} to='profile'>Profile</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" style={{color:"white"}} to='about'>About</NavLink>
                    </li>
                </menu>
            </nav>
        </header>

        <main className="main">App components go here</main>

            <footer style={{color: "lightgray"}}>
                <div className="container-fluid" id="footerDiv">
                    <span className="text-reset">Author: Ethan Nielsen</span>
                    <a id="gitFooter" className="text-reset" href="https://github.com/wonderbread678/startup">GitHub</a>
                </div>
            </footer>
        </div>
    </BrowserRouter>
  );
}