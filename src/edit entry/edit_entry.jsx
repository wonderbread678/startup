import React from 'react';
import '../app.css'
import { useNavigate } from 'react-router-dom';

export function Edit_entry() {
    const entryToEdit = JSON.parse(localStorage.getItem("entryToEdit"))
    const userName = localStorage.getItem("userName");
    const navigate = useNavigate();

    React.useEffect(() => {
        if (!entryToEdit) {
            navigate('/list');
        }
    }, [entryToEdit, navigate]);

    const [title, setTitle] = React.useState(entryToEdit.title);
    const [author, setAuthor] = React.useState(entryToEdit.author);
    const [type, setType] = React.useState(entryToEdit.type);
    const [rating, setRating] = React.useState(entryToEdit.rating);
    const [list, setList] = React.useState(entryToEdit.list);
    const [listRank, setListRank] = React.useState(entryToEdit.listRank);
    const [comment, setComment] = React.useState(entryToEdit.comment || '');
    const [image, setImage] = React.useState(entryToEdit.image || null);
    const [listName, setListName] = React.useState(entryToEdit.listName);
    const [lists, setLists] = React.useState([]);

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

    console.log({ title, author, type, rating, list, listRank, comment, image, listName });

    const DEFAULT_IMAGE = "https://www.google.com/url?sa=i&url=https%3A%2F%2Fdhmckee.com%2Farchives%2F2018%2F11%2Fpodcast-book-cover-design-tips-with-stuart-bache%2F&psig=AOvVaw2p_fOqAAo9rFQPK6WB5Lkx&ust=1760909196920000&source=images&cd=vfe&opi=89978449&ved=0CBYQjRxqFwoTCOj3yY3YrpADFQAAAAAdAAAAABAE";
    
    const handleImage = (event) => {
        const file = event.target.files[0];
        if (!file) {setImage(DEFAULT_IMAGE);}
        else{
            const reader = new FileReader();
            reader.onload = () => {setImage(reader.result)};
            reader.readAsDataURL(file);
        }
    }

    async function updateEntry(){
        try{
            const response = await fetch(`/api/updateEntry/${entryToEdit.id}`, {
                method:'put', 
                credentials:'include',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    id: entryToEdit.id,
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
            })
            });

            if (!response.ok){
                console.log("Failed to update");
                return;
            }
            const updatedEntry = await response.json();
            console.log(updatedEntry);
        }
        catch(err){
            console.log(err);
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        await updateEntry();
        navigate('/list');
    };

    const sortedLists = [...lists].sort((a, b) => a.localeCompare(b));


  return (
    <main className="main">
      <div className="body">
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
                    <input type="number" name="listRank" id="listRank" value={listRank} onChange={(e) => setListRank(Number(e.target.value))} required/>
                </li>
                <li>
                    <label htmlFor="comment">Comment</label>
                    <input type="text" name="comment" id="comment" placeholder="Optional" value={comment} onChange={(e) => setComment(e.target.value)}/>
                </li>
            </ul>
            <button type="submit" className="btn btn-primary" id="submit" style={{marginTop:'1px'}}>Update</button>
            <hr style={{color:"#00674F"}}/>
            </form>
        </div>
    </main>
  );
}