import React from 'react';
import './list.css'
import '../app.css'
import { useNavigate } from 'react-router-dom';

export function List(props) {

    const [entries, setEntries]=React.useState([]);
    const [category, setCategory]=React.useState('All');
    const [lists, setLists]=React.useState([]);

    const userName = localStorage.getItem("userName");

    const navigate = useNavigate();

    React.useEffect(() => {
        async function getLists(){
            try{
                const response = await fetch(`/api/lists/${userName}`, {credentials: 'include'})
                if (!response.ok){
                    alert("YOU GOOFY");
                }
                const body = await response.json();
                setLists(body.length ? body : ['--']);
            }
            catch(err){
                console.log(err)
            }
        }

        getLists();
    }, []);


    React.useEffect(() =>{
        fetchEntries();
    }, []);

    async function fetchEntries(){
        const response = await fetch(`/api/entryList/${userName}`, {credentials: 'include'})
        const body = await response.json();
        console.log(body);
        setEntries(body);
        console.log(Array.isArray(entries));
        console.log(entries);
    }

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

    const handleDelete = async (entry) => {
        try {
            const response = await fetch(`/api/deleteEntry/${entry.id}/${entry.userName}`, {
                method: 'DELETE',
                credentials: 'include'
            });
            if (!response.ok) {
                const errMsg = await response.text();
                alert(`Error deleting entry: ${errMsg}`);
                return;
            }

            const updatedEntries = await response.json();
            setEntries(updatedEntries);

        } catch (err) {
            console.error("Error deleting entry:", err);
            alert("Something went wrong while deleting the entry.");
        }
    };



  return (
    <main className="main">
      <div className="body">
        {entries.length !== 0 ? (
        <div className="listBody">
        <label htmlFor="listSelection" style={{marginTop:"10px", marginBottom:"3px"}}>List selection: </label>
            <select id="listSelection" style={{marginBottom:"15px"}} value={category} onChange={(e) => handleCategory(e.target.value)}>
                <option>All</option>
                {lists.map((listName, index) => (
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