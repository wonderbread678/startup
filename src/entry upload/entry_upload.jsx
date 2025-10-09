import React from 'react';
import './entry_upload.css'
import '../app.css'

export function Entry_upload() {
  return (
    <main classNameName="main">
      <div className="body">
        <form action="/upload" method="post" encType="multipart/form-data">
                <span>Choose a photo to upload: </span>
                <input type="file" id="fileUpload" name="myFile"></input>
            </form>
            <ul>
                <li>
                    <label htmlFor="title">Title</label>
                    <input type="text" id="title" name="title" placeholder="Title"></input>
                </li>
                <li>
                    <label htmlFor="author">Author</label>
                    <input type="text" id="author" name="author" placeholder="Author"></input>
                </li>
                <li>
                    <label htmlFor="type">Type</label>
                    <select id="type" name="typeSelect">
                        <option selected> -- </option>
                        <option className="dropdown">Book</option>
                        <option className="dropdown">Comic/Manga</option>
                        <option className="dropdown">Poem</option>
                        <option className="dropdown">Fanfic</option>
                        <option className="dropdown">E-book</option>
                        <option className="dropdown">Blog/Online article</option>
                        <option className="dropdown">Academic paper/Journal</option>
                        <option className="dropdown">Other</option>
                    </select>
                </li>
                <li>
                    <label htmlFor="range">Rating: </label>
                    <input type="rating" name="rating" id="rating" min="1" max="10" value="1"/>
                </li>
                <li>
                    <label htmlFor="list">List</label>
                    <select id="list" name="listSelect">
                        <option selected> -- </option>
                        <option> *Existing list* </option>
                    </select>
                </li>
                <li>
                    <label htmlFor="listRank">List Rank: </label>
                    <input type="listRank" name="listRank" id="listRank" value="1" />
                </li>
                <li>
                    <label htmlFor="comment">Comment</label>
                    <input type="comment" name="comment" id="comment" placeholder="Optional" />
                </li>
            </ul>
            <button type="submit" className="btn btn-primary" id="submit">Create Entry</button>
            <hr style={{color:"#00674F"}}/>
            <h3 id="newListBlurb"> Don't have a list or want to make a new one?</h3>
            <button type="submit" className="btn btn-primary" id="newlistbutton">Create New List</button>
        </div>
    </main>
  );
}