import React from 'react';
import './list.css'
import '../app.css'

export function List() {
  return (
    <main className="main">
      <div className="body">
        <label htmlFor="listSelection" style={{marginTop:"10px", marginBottom:"3px"}}>List selection: </label>
            <select htmlFor="listSelection" name="listSelection" style={{marginBottom:"15px", float:"left"}}>
                <option selected>All</option>
                <option>Favorite Manga</option>
                <option>Favorite Books</option>
            </select>
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
                            <form method="get" action="Edit_entry.html">
                                <button id="edit" className="btn btn-primary" type="submit">Edit</button>
                            </form>
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
                            <form method="get" action="Edit_entry.html">
                                <button id="edit" className="btn btn-primary" type="submit">Edit</button>
                            </form>
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
                            <form method="get" action="Edit_entry.html">
                                <button id="edit" className="btn btn-primary" type="submit">Edit</button>
                            </form>
                            <button id ="delete" className="btn btn-secondary" type="submit">Delete</button>
                        </li>
                    </ol>
                </li>
                <hr />
                <li>
                    <h3>Favorite Books</h3>
                    <ol>
                    <li>
                            <img src="https://m.media-amazon.com/images/I/71ZnTIMfLBL._UF1000,1000_QL80_.jpg" className="listImage" alt="Vagabond" style={{width: "200px", height: "300px", padding: "0.5em"}} />
                            <div className="entryTitle"><b>Title:</b> The Book of Mormon</div>
                            <div className="entryAuthor"><b>Author:</b> Prophets of the ancient Americas</div>
                            <div className="entryType"><b>Type:</b> Book</div>
                            <div className="entryRating"><b>Rating:</b> 10</div>
                            <div className="entryComment">
                                <p><b>Comment:</b> Really felt the Spirit while reading!</p>
                            </div>
                            <form method="get" action="Edit_entry.html">
                                <button id="edit" className="btn btn-primary" type="submit">Edit</button>
                            </form>
                            <button id ="delete" className="btn btn-secondary" type="submit">Delete</button>
                        </li>
                    </ol>
                </li>
            </ul>
        </div>
    </main>
  );
}