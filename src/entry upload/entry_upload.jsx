import React from 'react';
import './entry_upload.css'
import '../app.css'

export function Entry_upload() {
    const [title, setTitle] = React.useState('');
    const [author, setAuthor] = React.useState('');
    const [type, setType] = React.useState('');
    const [rating, setRating] = React.useState(1);
    const [list, setList] = React.useState('');
    const [listRank, setListRank] = React.useState(1);
    const [comment, setComment] = React.useState('');
    const [image, setImage] = React.useState(null);
    const [listName, setListName] = React.useState('');
    const [lists, setLists] = React.useState(['--'])

    const newEntry ={
        title,
        author,
        type,
        rating,
        list,
        listRank,
        comment,
        image,
        listName
    };

    function handleCreateList(){
        if (!list.includes(listName)){
            setLists([...lists, listName]);
            setListName(''); 
        }
        else {
            console.log('list already exists');
        }    
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const savedEntries = JSON.parse(localStorage.getItem("entries") || "[]");

        const updatedEntries = [...savedEntries, newEntry];
        
        localStorage.setItem("entries", JSON.stringify(updatedEntries));
        console.log(newEntry);

        setTitle('');
        setAuthor('');
        setType('');
        setRating(1);
        setList(lists[0]);
        setListRank(1);
        setComment('');
        setImage(null);
        setListName('');
    };


  return (
    <main className="main">
      <div className="body">
        <form onSubmit={handleSubmit} encType="multipart/form-data">
            <span>Choose a photo to upload: </span>
            <input type="file" id="fileUpload" name="myFile" onChange={(e) => setImage(e.target.files[0])} required></input>
            <ul>
                <li>
                    <label htmlFor="title">Title</label>
                    <input type="text" id="title" name="title" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required></input>
                </li>
                <li>
                    <label htmlFor="author">Author</label>
                    <input type="text" id="author" name="author" placeholder="Author" value={author} onChange={(e) => setAuthor(e.target.value)} required></input>
                </li>
                <li>
                    <label htmlFor="type">Type</label>
                    <select id="type" name="typeSelect" value={type} onChange={(e) => setType(e.target.value)} required>
                        <option> -- </option>
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
                    <label htmlFor="range">Rating</label>
                    <input type="number" name="rating" id="rating" min="1" max="10" value={rating} onChange={(e) => setRating(Number(e.target.value))} required/>
                </li>
                <li>
                    <label htmlFor="list">List</label>
                    <select id="list" name="listSelect" value={list} onChange={(e) => setList(e.target.value)} required>
                        <option> -- </option>
                        {lists.map((listName, index) => (<option key={index}>{listName}</option>))}
                    </select>
                </li>
                <li>
                    <label htmlFor="listRank">List Rank</label>
                    <input type="number" name="listRank" id="listRank" value={listRank} onChange={(e) => setListRank(Number(e.target.value))} required/>
                </li>
                <li>
                    <label htmlFor="comment">Comment</label>
                    <input type="text" name="comment" id="comment" placeholder="Optional" value={comment} onChange={(e) => setComment(e.target.value)}/>
                </li>
            </ul>
            <button type="submit" className="btn btn-primary" id="submit" style={{marginTop:'1px'}}>Create Entry</button>
            <hr style={{color:"#00674F"}}/>
            </form>
            
            <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
                <h3 id="newListBlurb"> Don't have a list or want to make a new one?</h3>
                <label htmlFor='listTitle'></label>
                <input type='text' name='listTitle' id='listTitle' placeholder='List Title' style={{marginTop:'10px'}} value={listName} onChange={(e) => setListName(e.target.value)}></input>
            </div>
            <button type="button" className="btn btn-primary" id="newlistbutton" onClick={handleCreateList}>Create New List</button>
        </div>
    </main>
  );
}