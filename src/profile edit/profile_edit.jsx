import React from 'react';

export function Profile_edit() {
    const storedProfile = JSON.parse(localStorage.getItem("userProfile"));
    
    const [profilePic, setProfilePic] = React.useState(storedProfile.profilePic);
    const [accountType, setAccountType] = React.useState(storedProfile.accountType);
    const [favoriteMedia, setFavoriteMedia] = React.useState(storedProfile.bio.favoriteMedia);
    const [favoritePiece, setFavoritePiece] = React.useState(storedProfile.bio.favoritePiece);
    const [currentlyReading, setCurrentlyReading] = React.useState(storedProfile.bio.currentlyReading);
    const [bioMessage, setBioMessage] = React.useState(storedProfile.bio.bioMessage);

    const DEFAULT_IMAGE = "https://www.google.com/url?sa=i&url=https%3A%2F%2Fdhmckee.com%2Farchives%2F2018%2F11%2Fpodcast-book-cover-design-tips-with-stuart-bache%2F&psig=AOvVaw2p_fOqAAo9rFQPK6WB5Lkx&ust=1760909196920000&source=images&cd=vfe&opi=89978449&ved=0CBYQjRxqFwoTCOj3yY3YrpADFQAAAAAdAAAAABAE";

    const handleImage = (event) => {
        const file = event.target.files[0];
        if (!file) {setImage(DEFAULT_IMAGE);}
        else{
            const reader = new FileReader();
            reader.onload = () => {setImage(reader.result)};
            reader.readAsDataURL(file);
        }
    }

  return (
    <main className="main">
      <div>
        <form action="/upload" method="post" enctype="multipart/form-data" style={{marginBottom:'75px'}}>
            <span>Choose a profile picture to upload: </span>
            <input type="file" id="fileUpload" name="myFile" onChange={(e) => e.target.files[0]}></input>
        <ul>
            <li>
                <label for="favoriteType">Favorite type of media: </label>
                <select id="type" name="typeSelect" onChange={(e) => setFavoriteMedia(e.target.value)}>
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
                <input id="favoriteMedia" name="favoriteMedia" onChange={(e) => setFavoritePiece(e.target.value)}/>
            </li>
            <li>
                <label for="currentRead">Currently reading: </label>
                <input id="currentRead" name="currentRead" onChange={(e) => setCurrentlyReading(e.target.value)}/>
            </li>
            <li>
                <label for="accountType">Account Type: </label>
                <select id="accountType" name="accountType" onChange={(e) => setAccountType(e.target.value)}>
                    <option>Public</option>
                    <option>Private</option>
                </select>
            </li>
        </ul>
        </form>
        </div>
        <button type="submit" class="btn btn-primary" id="submit" style={{backgroundColor:"#00674F", color:"lightgray", marginTop:'-400px'}}>Save</button>
    </main>
  );
}