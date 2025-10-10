import React from 'react';
import '../app.css'
import { NavLink } from 'react-router-dom';

export function Edit_entry() {
  return (
    <main className="main">
        <div className='body'>
            <form action="/upload" method="post" encType="multipart/form-data">
                <span>Choose a photo to upload: </span>
                <input type="file" id="fileUpload" name="myFile"></input>
            </form>
            <img src="https://m.media-amazon.com/images/I/91NxYvUNf6L._UF1000,1000_QL80_.jpg" className="listImage" alt="One Piece" style= {{width: "200px", height: "300px"}} />
            <ul>
                <li>
                    <label htmlFor="title">Title</label>
                    <input type="text" id="title" name="title" placeholder="One Piece"></input>
                </li>
                <li>
                    <label htmlFor="author">Author</label>
                    <input type="text" id="author" name="author" placeholder="Eiichiro Oda"></input>
                </li>
                <li>
                    <label htmlFor="type">Type</label>
                    <select id="type" name="typeSelect">
                        <option className="dropdown"> -- </option>
                        <option className="dropdown">Book</option>
                        <option selected className="dropdown">Comic/Manga</option>
                        <option className="dropdown">Poem</option>
                        <option className="dropdown">E-book</option>
                        <option className="dropdown">Blog/Online article</option>
                        <option className="dropdown">Academic paper/Journal</option>
                        <option className="dropdown">Other</option>
                    </select>
                </li>
                <li>
                    <label htmlFor="range">Rating: </label>
                    <input type="rating" name="rating" id="rating" min="1" max="10" value="10"/>
                </li>
                <li>
                    <label htmlFor="list">List</label>
                    <select id="list" name="listSelect">
                        <option> -- </option>
                        <option selected> Favorite Manga </option>
                        <option> Favorite Book </option>
                    </select>
                </li>
                <li>
                    <label htmlFor="listRank">List Rank: </label>
                    <input type="listRank" name="listRank" id="listRank" value="1" />
                </li>
                <li>
                    <label htmlFor="comment">Comment</label>
                    <input type="comment" name="comment" id="comment" placeholder="The best manga ever!" />
                </li>
            </ul>
            <form method="get" action="List.html">
                <button type="submit" className="btn btn-primary" id="submit" style={{margin:"10px"}}><NavLink to='./list'>Update Entry</NavLink>U</button>
            </form>
        </div>
    </main>
  );
}