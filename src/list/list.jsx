import React from 'react';
import './list.css'
import '../app.css'

export function List(props) {

    const [entries, setEntries]=React.useState(() => JSON.parse(localStorage.getItem("entries") || "[]"));
    const [category, setCategory]=React.useState('All');


    const savedLists = JSON.parse(localStorage.getItem("lists") || "[]");

    function handleCategory(selectedCategory){
        setCategory(selectedCategory);
    }

    const groupedEntries = entries.reduce((groups, entry) => {
        const listName = entry.list || "Uncategorized";
        if (!groups[listName]) {
            groups[listName] = [];
        }
        groups[listName].push(entry);
        return groups;
    }, {});

     const filteredEntries = category === 'All' ? groupedEntries : { [category]: groupedEntries[category] || []};

    
    function handleEdit(){

    }

    function handleDelete(entry){

    }


  return (
    <main className="main">
      <div className="body">
        <label htmlFor="listSelection" style={{marginTop:"10px", marginBottom:"3px"}}>List selection: </label>
            <select id="listSelection" style={{marginBottom:"15px", float:"left"}} onChange={(e) => handleCategory(e.target.value)}>
                <option>All</option>
                {savedLists.map((listName, index) => (
                    <option key={index} value={listName}>{listName}</option>
                ))}
            </select>
            <ul className="biggerNumbers list-group">
            {Object.entries(filteredEntries).map(([listName, entries]) => (
                <li key={(listName)}>
                    <h3>{listName}</h3>
                    <hr />
                    <ol className="bigNumbers">
                        {entries.map((entry, index) => (
                        <li key={index}>
                            <img src={entry.image} className="listImage" style= {{width: "200px", height: "300px"}} />
                            <div className="entryTitle"><b>Title:</b> {entry.title}</div>
                            <div className="entryAuthor"><b>Author:</b> {entry.author}</div>
                            <div className="entryType"><b>Type:</b> {entry.type}</div>
                            <div className="entryRating"><b>Rating:</b> {entry.rating}</div>
                            <div className="entryComment">
                                <p><b>Comment:</b> {entry.comment}</p>
                            </div>
                            <form method="get" action="Edit_entry.html">
                                <button id="edit" className="btn btn-primary" type="submit">Edit</button>
                            </form>
                            <button id ="delete" className="btn btn-secondary" type="submit" onClick={() => handleDelete(entry)}>Delete</button>
                        </li>
                        ))}
                    </ol>
                </li>
                ))} 
            </ul>
        </div>
    </main>
  );
}