import React from 'react';
import './list.css'
import '../app.css'
import { useNavigate } from 'react-router-dom';

export function List(props) {

    const [entries, setEntries]=React.useState(() => JSON.parse(localStorage.getItem("entries") || "[]"));
    const [category, setCategory]=React.useState('All');

    const navigate = useNavigate();

    React.useEffect(() =>{
        fetch('/api/list')
            .then(response => response.json())
            .then((entries) => {setEntries(entries)})
    }, []);


    const savedLists = JSON.parse(localStorage.getItem("lists") || "[]");

    function handleCategory(selectedCategory){
        setCategory(selectedCategory);
    };

    const groupedEntries = entries.reduce((groups, entry) => {
        const listName = entry.list || "Uncategorized";
        if (!groups[listName]) {
            groups[listName] = [];
        }
        groups[listName].push(entry);
        return groups;
    }, {});

    Object.keys(groupedEntries).forEach(listName => {
        groupedEntries[listName].sort((a,b) => a.listRank - b.listRank);
    });

     const filteredEntries = category === 'All' ? groupedEntries : { [category]: groupedEntries[category] || []};

    
    const handleEdit = (selectedEntry) => {
        const entryToEdit = entries.find((entry) => entry.id === selectedEntry.id);
        localStorage.setItem("entryToEdit", JSON.stringify(entryToEdit));
        navigate('/edit_entry');
    };

    const handleDelete = (deletedEntry) => {
        const updatedEntries = entries.filter((entry) => entry.id !== deletedEntry.id);
        setEntries(updatedEntries);
        localStorage.setItem("entries", JSON.stringify(updatedEntries));
    };


  return (
    <main className="main">
      <div className="body">
        {entries.length !== 0 ? (
        <div className="listBody">
        <label htmlFor="listSelection" style={{marginTop:"10px", marginBottom:"3px"}}>List selection: </label>
            <select id="listSelection" style={{marginBottom:"15px"}} onChange={(e) => handleCategory(e.target.value)}>
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
                            <button id="edit" className="btn btn-primary" type="button" onClick={() => handleEdit(entry)}>Edit</button>
                            <button id ="delete" className="btn btn-secondary" type="button" onClick={() => handleDelete(entry)}>Delete</button>
                        </li>
                        ))}
                    </ol>
                </li>
                ))} 
            </ul>
            </div>
            ) : (
                <h1>Head over to the entry upload to start making your own lists!</h1>
            )}
        </div>
    </main>
  );
}