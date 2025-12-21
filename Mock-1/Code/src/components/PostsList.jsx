import { usePosts } from "../context/PostsContext";
import PostCard from"./PostCard";
function PostsLists(){
    const {Posts}=usePosts();
    return(<div>
        {Posts.map(post=>(<PostCard key={post.id}
        post={post}/>
        ))}
    </div>);
}
export default PostsLists;