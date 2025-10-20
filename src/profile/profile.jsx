import React from 'react';
import './Profile.css'

export function Profile() {
  return (
    <main className="main">
      <div className="body"><h3 id="blurb">~ Tell the world a little bit about yourself! ~</h3>
        <div>Profile Picture: </div>
        <img src="https://preview.redd.it/say-something-about-caseoh-thats-not-about-his-weight-v0-pua93f3bijad1.jpeg?auto=webp&s=b4cb8d552ea75d1ce5449482b4de3a7eb63e3c76" alt="profile pic" id="profilePic" style={{padding:"0.5em"}}/>
        <ul id="bioDetails">
            <li>
                <div className="bioEntry"><b>Username: </b>caseoh_games</div>
            </li>
            <li>
                <div className="bioEntry"><b>Favorite type of media: </b>Manga</div>
            </li>
            <li>
                <div className="bioEntry"><b>Favorite piece of media: </b> One Piece</div>
            </li>
            <li>
                <div className="bioEntry"><b>Currently reading: </b> The Book of Mormon</div>
            </li>
            <li>
                <div className="bioEntry"><b>Number of entries: </b>4</div>
            </li>
            <li>
                <div className="bioEntry"><b>Number of lists: </b>2</div>
            </li>
            <li>
                <div className="bioEntry"><b>Account type: </b>Public</div>
            </li>
        </ul>
        <form method="get" action="Profile_edit.html">
            <button type="submit" className="btn btn-primary" id="profileEdit">Edit</button>
        </form>
        <hr />
        </div>
    </main>
  );
}