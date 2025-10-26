import React from 'react';
import { useNavigate } from 'react-router-dom';

export function Profile_edit() {
    const storedProfile = JSON.parse(localStorage.getItem("userProfile"));
    const navigate = useNavigate();
    
    const [profilePic, setProfilePic] = React.useState(storedProfile.profilePic);
    const [accountType, setAccountType] = React.useState(storedProfile.accountType);
    const [favoriteMedia, setFavoriteMedia] = React.useState(storedProfile.bio.favoriteMedia);
    const [favoritePiece, setFavoritePiece] = React.useState(storedProfile.bio.favoritePiece);
    const [currentlyReading, setCurrentlyReading] = React.useState(storedProfile.bio.currentlyReading);
    const [bioMessage, setBioMessage] = React.useState(storedProfile.bio.bioMessage);

    const DEFAULT_IMAGE = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStltpfa69E9JTQOf5ZcyLGR8meBbxMFJxM0w&s";

    const handleImage = (event) => {
        const file = event.target.files[0];
        if (!file) {setProfilePic(DEFAULT_IMAGE);}
        else{
            const reader = new FileReader();
            reader.onload = () => {setProfilePic(reader.result)};
            reader.readAsDataURL(file);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const updatedProfile = {
            ...storedProfile,
            profilePic,
            accountType,
            bio: {
                favoriteMedia,
                favoritePiece,
                currentlyReading,
                bioMessage
            }
        }
        localStorage.setItem("userProfile", JSON.stringify(updatedProfile));
        navigate('/profile');
    };

  return (
    <main className="main">
    <div className="body">
    <form encType="multipart/form-data" style={{marginBottom:'75px'}} onSubmit={handleSubmit}>
      <div>
            <span>Choose a profile picture to upload: </span>
            <input type="file" id="fileUpload" name="myFile" onChange={handleImage}></input>
        <ul>
            <li>
                <label htmlFor="favoriteType">Favorite type of media: </label>
                <select id="type" name="typeSelect" value={favoriteMedia} onChange={(e) => setFavoriteMedia(e.target.value)}>
                    <option> -- </option>
                    <option>Book</option>
                    <option>Comic/Manga</option>
                    <option>Poem</option>
                    <option>E-book</option>
                    <option>Blog/Online article</option>
                    <option>Academic paper/Journal</option>
                    <option>Other</option>
                </select>
            </li>
            <li>
                <label htmlFor="favoriteMedia">Favorite piece of media</label>
                <input id="favoriteMedia" name="favoriteMedia" value={favoritePiece} onChange={(e) => setFavoritePiece(e.target.value)}/>
            </li>
            <li>
                <label htmlFor="currentRead">Currently reading: </label>
                <input id="currentRead" name="currentRead" value={currentlyReading} onChange={(e) => setCurrentlyReading(e.target.value)}/>
            </li>
            <li>
                <label htmlFor="bioMessage">Bio Description: </label>
                <input id="bioMessage" value={bioMessage} onChange={(e) => setBioMessage(e.target.value)}></input>
            </li>
            <li>
                <label htmlFor="accountType">Account Type: </label>
                <select id="accountType" name="accountType" value={accountType} onChange={(e) => setAccountType(e.target.value)}>
                    <option>Public</option>
                    <option>Private</option>
                </select>
            </li>
        </ul>
        </div>
        <button type="submit" className="btn btn-primary" id="submit" style={{backgroundColor:"#00674F", color:"lightgray", width:"105%"}}>Save</button>
    </form>
    </div>
    </main>
  );
}