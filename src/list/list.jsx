import React from 'react';
import './list.css'
import '../app.css'

export function List(props) {

    const [entries, setEntries]=React.useState(() => JSON.parse(localStorage.getItem("entries") || "[]"));
    const [category, setCategory]=React.useState('All');

    const filteredEntries = category === 'All' ? entries : entries.filter(entry => entry.list === category);

    function listCategory(selectedCategory){
        setCategory(selectedCategory);
    }

    function handleCategory(){

    }
    
    function handleEdit(){

    }

    function handleDelete(){

    }


  return (
    <main className="main">
      <div className="body">
        <label htmlFor="listSelection" style={{marginTop:"10px", marginBottom:"3px"}}>List selection: </label>
            <select id="listSelection" style={{marginBottom:"15px", float:"left"}} onChange={(e) => listCategory(e.target.value)}>
                <option>All</option>
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
                    </ol>
                </li>
            </ul>
        </div>
    </main>
  );
}