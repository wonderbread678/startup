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
    const [lists, setLists] = React.useState(["--"]);

    const DEFAULT_IMAGE = "defbookcover-min.jpg"
    const userName = localStorage.getItem('userName');

    React.useEffect(() => {
        async function getLists(){
            try{
                const response = await fetch(`/api/lists/${userName}`, {credentials: 'include'})
                if (!response.ok){
                    alert("YOU GOOFY");
                }
                const body = await response.json();
                setLists(body.length ? body : ['--']);
                if (body.length) setList(body[0]);
            }
            catch(err){
                console.log(err)
            }
        }

        getLists();
    }, []);

    async function handleCreateList(){
        if (!list.includes(listName)){
            const updatedLists = [...lists, listName]
            setLists(updatedLists);
            createList();
            setListName(''); 
        }
        else {
            console.log('list already exists');
        }    
        setListName('');
    }

    async function createList() {
        try {
            const response = await fetch('/api/listName', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ 
                    listName: listName,
                    userName: userName
                 }),
                credentials: 'include',
            });

            console.log("Response status:", response.status);

            const body = await response.json();
            console.log("Updated lists from backend:", body);

            setLists(body);
            setListName('');

        } catch (error) {
            console.error('Error in createList:', error);
            alert(`Failed to create list: ${error.message}`);
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
            userName: userName,
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
        try {
            const response = await fetch('/api/entries', {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id: Date.now(),
                userName: userName,
                title,
                author,
                type,
                rating,
                list,
                listRank,
                comment,
                image,
                listName,
            }),
            });

            console.log("Response status:", response.status);
            const text = await response.text();
            console.log("Raw server response:", text);

            if (!response.ok) {
            throw new Error(`Invalid entry (status ${response.status})`);
            }

            const result = JSON.parse(text);
            console.log('Entry created:', result);
        } catch (error) {
            console.error('Error in createEntry:', error);
        }
    }


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