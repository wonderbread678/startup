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
    const [image, setImage] = React.useState("public/defbookcover-min.jpg");
    const [listName, setListName] = React.useState('');
    const [lists, setLists] = React.useState(() => {
        return JSON.parse(localStorage.getItem("lists") || '["--"]');
    });

    const DEFAULT_IMAGE = "defbookcover-min.jpg"

    function handleCreateList(){
        if (!list.includes(listName)){
            const updatedLists = [...lists, listName]
            setLists(updatedLists);
            localStorage.setItem("lists", JSON.stringify(updatedLists));
            setListName(''); 
        }
        else {
            console.log('list already exists');
        }    
    }
        const handleImage = (event) => {
            const file = event.target.files[0];
            if (!file) {setImage(DEFAULT_IMAGE);}
            else{
                const reader = new FileReader();
                reader.onload = () => {setImage(reader.result)};
                reader.readAsDataURL(file);
            }
        }
        
    const handleSubmit = (e) => {
        e.preventDefault();

        const newEntry ={
            id: Date.now(),
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

        createEntry();
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

    async function createEntry() {
        const response = await fetch(`/api/entries`, {
            method: 'post', 
            body: JSON.stringify({
                id: Date.now(),
                title: title,
                author: author,
                type: type,
                rating: rating,
                list: list,
                listRank: listRank,
                comment: comment,
                image: image,
                listName: listName
                }),
            });
            if (!response.ok){
                throw new Error("Invalid entry");
            }
            const result = await response.json();
            console.log('Entry created: ', {result});
    };

    const sortedLists = [...lists].sort((a, b) => a.localeCompare(b));


  return (
    <main className="main">
      <div className="body">
        <div className='submitPart'>
        <form onSubmit={handleSubmit} encType="multipart/form-data">
            <span>Choose a photo to upload: </span>
            <input type="file" id="fileUpload" name="myFile" onChange={handleImage}></input>
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
                        <option>Book</option>
                        <option>Comic</option>
                        <option>Manga</option>
                        <option>Manhwa</option>
                        <option>Manhua</option>
                        <option>Poem</option>
                        <option>E-book</option>
                        <option>Fanfic</option>
                        <option>Other</option>
                    </select>
                </li>
                <li>
                    <label htmlFor="range">Rating</label>
                    <input type="number" name="rating" id="rating" min="1" max="10" value={rating} onChange={(e) => setRating(Number(e.target.value))} required/>
                </li>
                <li>
                    <label htmlFor="list">List</label>
                    <select id="list" name="listSelect" value={list} onChange={(e) => setList(e.target.value)} required>
                        {sortedLists.map((listName, index) => (<option key={index}>{listName}</option>))}
                    </select>
                </li>
                <li>
                    <label htmlFor="listRank">List Rank</label>
                    <input type="number" name="listRank" id="listRank" min="1" value={listRank} onChange={(e) => setListRank(Number(e.target.value))} required/>
                </li>
                <li>
                    <label htmlFor="comment">Comment</label>
                    <input type="text" name="comment" id="comment" placeholder="Optional" value={comment} onChange={(e) => setComment(e.target.value)}/>
                </li>
            </ul>
            <button type="submit" className="btn btn-primary" id="submitButton" style={{marginTop:'1px'}}>Create Entry</button>
            <hr style={{color:"#00674F"}}/>
            </form>
            </div>
            
            <div id="createList" style={{display:'flex', flexDirection:'column', alignItems:'center', marginTop: '90px'}}>
                <h3 id="newListBlurb"> Don't have a list or want to make a new one?</h3>
                <label htmlFor='listTitle'></label>
                <input type='text' name='listTitle' id='listTitle' placeholder='List Title' style={{marginTop:'10px'}} value={listName} onChange={(e) => setListName(e.target.value)}></input>
            </div>
            <button type="button" className="btn btn-primary" id="newlistbutton" onClick={handleCreateList}>Create New List</button>
        </div>
    </main>
  );
}