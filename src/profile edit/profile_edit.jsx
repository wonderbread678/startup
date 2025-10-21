import React from 'react';

export function Profile_edit() {
    const profile = localStorage.getItem("userProfile");
    const [profilePic, setProfilePic] = React.useState(profile.profilePic);
    const [accountType, setAccountType] = React.useState(profile.accountType);
    const [favoriteMedia, setFavoriteMedia] = React.useState(profile.bio.favoriteMedia);
    const [favoritePiece, setFavoritePiece] = React.useState(profile.bio.favoritePiece);
    const [currentlyReading, setCurrentlyReading] = React.useState(profile.bio.currentlyReading);
    const [bioMessage, setBioMessage] = React.useState(profile.bio.bioMessage);


  return (
    <main className="main">
      <div>
        <form action="/upload" method="post" enctype="multipart/form-data" style={{marginBottom:'75px'}}>
            <span>Choose a profile picture to upload: </span>
            <input type="file" id="fileUpload" name="myFile"></input>
        </form>
        <ul>
            <li>
                <label for="favoriteType">Favorite type of media: </label>
                <select id="type" name="typeSelect">
                    <option selected> -- </option>
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
                <label for="favoriteMedia">Favorite piece of media</label>
                <input id="favoriteMedia" name="favoriteMedia" />
            </li>
            <li>
                <label for="currentRead">Currently reading: </label>
                <input id="currentRead" name="currentRead" />
            </li>
            <li>
                <label for="accountType">Account Type: </label>
                <select id="accountType" name="accountType">
                    <option selected>Public</option>
                    <option>Private</option>
                </select>
            </li>
        </ul>
        </div>
        <button type="submit" class="btn btn-primary" id="submit" style={{backgroundColor:"#00674F", color:"lightgray", marginTop:'-400px'}}>Save</button>
    </main>
  );
}