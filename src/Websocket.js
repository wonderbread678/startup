import React from 'react';
import ReactDOM from 'react-dom/client';

function Message ({webSocket}){

    function sendMsg(){
        webSocket.sendMesssage(userName, message);
        set
    }
}

function Uploads({ webSocket }){
    const[uploads, setUploads] = React.useState([]);
    React.useEffect(() => {
        webSocket.addObserver((upload) => {
            setChats((prevUploads) => [...prevUploads, upload]);
        });
    }, [webSocket])

    const uploadEls = uploads.map((upload, index) => (
        <div key={index}>
            <span className={upload.event}></span>
        </div>
    ));
}