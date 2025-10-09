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
        <h2>Lists</h2>
        <hr />
        <ul className="biggerNumbers list-group">
            <li>
                <h3> Favorite Manga</h3>
                <hr />
                <ol className="bigNumbers">
                    <li>
                        <img src="https://m.media-amazon.com/images/I/91NxYvUNf6L._UF1000,1000_QL80_.jpg" className="listImage" alt="One Piece" style= {{width: "200px", height: "300px"}} />
                        <div className="entryTitle"><b>Title:</b> One Piece</div>
                        <div className="entryAuthor"><b>Author:</b> Eiichiro Oda</div>
                        <div className="entryType"><b>Type:</b> Manga</div>
                        <div className="entryRating"><b>Rating:</b> 10</div>
                        <div className="entryComment">
                            <p><b>Comment:</b> The best manga ever!</p>
                        </div>
                        <button id="edit" className="btn btn-primary" type="submit">Edit</button>
                        <button id ="delete" className="btn btn-secondary" type="submit">Delete</button>
                    </li>
                    <li>
                        <img src="https://mangavagabond.com/wp-content/uploads/2025/06/vagabond-01-taschenbuch-takehiko-inoue.webp" className="listImage" alt="Vagabond" style= {{width: "200px", height: "300px"}} />
                        <div className="entryTitle"><b>Title:</b> Vagabond</div>
                        <div className="entryAuthor"><b>Author:</b> Takehiko Inoue</div>
                        <div className="entryType"><b>Type:</b> Manga</div>
                        <div className="entryRating"><b>Rating:</b> 10</div>
                        <div className="entryComment">
                            <p><b>Comment:</b> Really got me thinking!</p>
                        </div>
                        <button id="edit" className="btn btn-primary" type="submit">Edit</button>
                        <button id ="delete" className="btn btn-secondary" type="submit">Delete</button>
                    </li>
                    <li>
                        <img src="https://upload.wikimedia.org/wikipedia/en/thumb/d/d9/Kingdom_%28manga%29_1.png/250px-Kingdom_%28manga%29_1.png" className="listImage" alt="Kingdom" style= {{width: "200px", height: "300px"}} />                               
                        <div className="entryTitle"><b>Title:</b> Kingdom</div>
                        <div className="entryAuthor"><b>Author:</b> Yasuhisa Hara</div>
                        <div className="entryType"><b>Type:</b> Manga</div>
                        <div className="entryRating"><b>Rating:</b> 10</div>
                        <div className="entryComment">
                            <p><b>Comment:</b> None</p>
                        </div>
                        <button id="edit" className="btn btn-primary" type="submit">Edit</button>
                        <button id ="delete" className="btn btn-secondary" type="submit">Delete</button>
                    </li>
                </ol>
            </li>
            <hr />
            <li>
                <h3>Favorite Books</h3>
                <ol>
                  <li>
                        <img src="https://m.media-amazon.com/images/I/71ZnTIMfLBL._UF1000,1000_QL80_.jpg" className="listImage" alt="Vagabond" style= {{width: "200px", height: "300px", padding: "0.5em"}} />
                        <div className="entryTitle"><b>Title:</b> The Book of Mormon</div>
                        <div className="entryAuthor"><b>Author:</b> Prophets of the ancient Americas</div>
                        <div className="entryType"><b>Type:</b> Book</div>
                        <div className="entryRating"><b>Rating:</b> 10</div>
                        <div className="entryComment">
                            <p><b>Comment:</b> Really felt the Spirit while reading!</p>
                        </div>
                        <button id="edit" className="btn btn-primary" type="submit">Edit</button>
                        <button id ="delete" className="btn btn-secondary" type="submit">Delete</button>
                    </li>
                </ol>
            </li>
        </ul>
        </div>
    </main>
  );
}