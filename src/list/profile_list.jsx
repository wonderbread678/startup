import React from 'react';
import './list.css'
import '../app.css'
import { useNavigate } from 'react-router-dom';

export function Profile_list(props) {

    const [entries, setEntries]=React.useState(() => JSON.parse(localStorage.getItem("entries") || "[]"));
    const [category, setCategory]=React.useState('All');

    const userName = localStorage.getItem("userName");

    React.useEffect(() =>{
        fetchEntries();
    }, []);

    async function fetchEntries(){
        const response = await fetch(`/api/entryList/${userName}`, {credentials: 'include'})
        const body = await response.json();
        setEntries(body);
    }

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


  return (
    <main className="main">
      <div className="body">
        <h1><b>LISTS</b></h1>
            {entries.length !== 0 ? (
            <div>
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
                        </li>
                        ))}
                    </ol>
                </li>
                ))} 
            </ul>
            </div>
            ) : (<h1>User has no lists</h1>)}
        </div>
    </main>
  );
}