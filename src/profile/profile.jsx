import React from 'react';
import './Profile.css'
import { Profile_list } from '../list/profile_list';
import { useNavigate } from 'react-router-dom';

export function Profile() {

    const [userProfile, setUserProfile] = React.useState(null);
    const [entryCount, setEntryCount] = React.useState(0);
    const navigate = useNavigate();

    const userName = localStorage.getItem('userName');

    React.useEffect(() => {
        async function getProfile(userName) {
            try{
                const response = await fetch(`/api/getProfile/${userName}`, {credentials:'include'})
                if (!response.ok){
                    alert("OH NO");
                }
                const profile = await response.json();
                setUserProfile(profile);
                localStorage.setItem("userProfile", JSON.stringify(profile))
            }
            catch(err){
                console.log(err);
            }
        }
        getProfile(userName);
    }, []);

    React.useEffect(() => {
        async function getCounts(userName){
            try{
                const response = await fetch(`/api/entryCount/${userName}`, {credentials:'include'})
                if (!response.ok){
                    alert("OH NO")
                }
                const count = await response.json();
                setEntryCount(count);
            }
            catch(err){
                console.log(err);
            }
        }

        getCounts(userName);
    }, [])

    
  if (!userProfile) {
    return <main className="main"><div className="body">Loading profile...</div></main>;
  }

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