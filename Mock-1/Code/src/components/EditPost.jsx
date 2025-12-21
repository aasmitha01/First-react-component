import { useState } from "react";
import { usePosts } from "../context/PostsContext";
function Editpost({post,setEdit}){
    const{updatepost}=usePosts();
    const [title,setTitle]=useState(post.title);
    const [body,setBody]=useState(post.body);
    const handleSave=()=>{
        updatepost(post.id,{...post,title,body});
        setEdit(false);
    };
    return(
        <div>
            <input value={title}onChange={e=>setTitle(e.target.value)}/>
            <textarea value={body} onChange={e=>setBody(e.target.value)}/>
            <button onClick={handleSave}>Save</button> 
        </div>
    );
}