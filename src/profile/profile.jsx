import React from 'react';
import './Profile.css'
import { Profile_list } from '../list/profile_list';
import { useNavigate } from 'react-router-dom';
import { resolveConfig } from 'vite';

export function Profile() {
    // const userProfile = JSON.parse(localStorage.getItem("userProfile"));
    // const navigate = useNavigate();

    // const entries = JSON.parse(localStorage.getItem("entries") || "[]");
    // const entryCount = entries.length;

    const userName = localStorage.getItem('userName');
    React.useEffect(() => {
        async function getProfile(username) {
            try{
                const response = await fetch(`/api/getProfile?userName=${encodeURIComponent(userName)}`, {credentials:'include'})
                if (!response.ok){
                    alert("OH NO");
                }
                const profile = await response.json();
                console.log("Fetched profile:", profile);
                return profile;
            }
            catch(err){
                console.log(err);
            }
        }
        getProfile(userName);
    }, []);

    
    

  return (
    <main className="main">
      <div className="body"><h3 id="blurb">~ Tell the world a little bit about yourself! ~</h3>
        <div>Profile Picture: </div>
        <img src={userProfile.profilePic} alt="profile pic" id="profilePic" style={{padding:"0.5em"}}/>
        <ul id="bioDetails">
            <li>
                <div className="bioEntry"><b>Username: </b>{userProfile.userName}</div>
            </li>
            <li>
                <div className="bioEntry"><b>Favorite type of media: </b>{userProfile.bio.favoriteMedia}</div>
            </li>
            <li>
                <div className="bioEntry"><b>Favorite piece of media: </b> {userProfile.bio.favoritePiece}</div>
            </li>
            <li>
                <div className="bioEntry"><b>Currently reading: </b> {userProfile.bio.currentlyReading}</div>
            </li>
            <li>
                <div className="bioEntry"><b>Number of entries: </b>{entryCount}</div>
            </li>
            <li>
                <div className="bioEntry"><b>Bio Message: </b>{userProfile.bio.bioMessage}</div>
            </li>
            <li>
                <div className="bioEntry"><b>Account type: </b>{userProfile.accountType}</div>
            </li>
        </ul>
        <button type="button" className="btn btn-primary" id="profileEdit" onClick={() => navigate('/profile_edit')}>Edit</button>
        <hr />
        {userProfile.accountType === 'Public' && (<Profile_list></Profile_list>)}
        </div>
    </main>
  );
}