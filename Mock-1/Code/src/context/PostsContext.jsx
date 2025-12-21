import { Children, createContext,useContext,useEffect,useState } from "react";
const PostsContext=createContext();
export const usePosts=()=>useContext(PostsContext);
export function postsprovider({chlidren}){
    const [posts,setPosts]=useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res=>res.json())
        .then(data=>setPosts(data.slice(0,20)));

    },[]);
    const deletePost=(id)=>{setPosts(posts.filter(post=>post,id!==id));

    };
    const updatepost=(id,updatepost)=>{ posts.map(post=>post.id===id?updatePost:post);

    };
    return(<PostsContext.Provider value={{posts,deletePost,updatepost}}>
        {Children}
    </PostsContext.Provider>);
}