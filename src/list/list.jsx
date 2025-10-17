import React from 'react';
import './list.css'
import '../app.css'
import { NavLink } from 'react-router-dom';

export function List(props) {

    const [entries, setEntries]=React.useState(props.entries || [])
    const [category, setCategory]=React.useState('All')

    function entryItem(newEntry){
        setEntries([...entries, newEntry])
    }

    function listCategory(){

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
                                <button id="edit" className="btn btn-primary" type="submit"><NavLink to='/edit_entry' style={{color:'white'}}>Edit</NavLink></button>
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