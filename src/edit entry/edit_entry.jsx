import React from 'react';

export function Edit_entry() {
  return (
    <main className="main">
        <div>
            <form action="/upload" method="post" enctype="multipart/form-data">
                <span>Choose a photo to upload: </span>
                <input type="file" id="fileUpload" name="myFile"></input>
            </form>
            <img src="https://m.media-amazon.com/images/I/91NxYvUNf6L._UF1000,1000_QL80_.jpg" class="listImage" alt="One Piece" style= "width: 200px; height: 300px" />
            <ul>
                <li>
                    <label for="title">Title</label>
                    <input type="text" id="title" name="title" placeholder="One Piece"></input>
                </li>
                <li>
                    <label for="author">Author</label>
                    <input type="text" id="author" name="author" placeholder="Eiichiro Oda"></input>
                </li>
                <li>
                    <label for="type">Type</label>
                    <select id="type" name="typeSelect">
                        <option class="dropdown"> -- </option>
                        <option class="dropdown">Book</option>
                        <option selected class="dropdown">Comic/Manga</option>
                        <option class="dropdown">Poem</option>
                        <option class="dropdown">E-book</option>
                        <option class="dropdown">Blog/Online article</option>
                        <option class="dropdown">Academic paper/Journal</option>
                        <option class="dropdown">Other</option>
                    </select>
                </li>
                <li>
                    <label for="range">Rating: </label>
                    <input type="rating" name="rating" id="rating" min="1" max="10" value="10"/>
                </li>
                <li>
                    <label for="list">List</label>
                    <select id="list" name="listSelect">
                        <option> -- </option>
                        <option selected> Favorite Manga </option>
                        <option> Favorite Book </option>
                    </select>
                </li>
                <li>
                    <label for="listRank">List Rank: </label>
                    <input type="listRank" name="listRank" id="listRank" value="1" />
                </li>
                <li>
                    <label for="comment">Comment</label>
                    <input type="comment" name="comment" id="comment" placeholder="The best manga ever!" />
                </li>
            </ul>
            <form method="get" action="List.html">
                <button type="submit" class="btn btn-primary" id="submit" style="margin:10px;">Update Entry</button>
            </form>
        </div>
    </main>
  );
}