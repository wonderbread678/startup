import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

export default function App() {
  return (
    <div className="body">
      <header className="container-fluid">
        <nav>
        <a className="navbar-brand" href="#"><h1>Koob<sup>&reg;</sup></h1></a>
            <menu className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link active" style={{color:"white"}} href="index.html">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link active" style={{color:"white"}} href="Entry_upload.html">Upload</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link active" style={{color:"white"}} href="List.html">List</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link active" style={{color:"white"}} href="Profile.html">Profile</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link active" style={{color:"white"}} href="About.html">About</a>
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
  );
}