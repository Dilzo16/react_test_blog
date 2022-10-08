import { useEffect } from "react";
import { useParams ,Link} from "react-router-dom";
const EditPost=({posts,handleEdit,editBody,setEditBody,editTitle,setEditTitle})=>{
    const {id}=useParams();
    const post=posts.find(post=>(post.id).toString()===id);
    
    useEffect(()=>{
        if(post){
            setEditTitle(post.title);
            setEditBody(post.body);
        }
    },[post,setEditTitle,setEditBody])
    return (
        <main className="NewPost">
            
            {editTitle && 
                <>
                <h1>Edit Post</h1>
                <form className="newPostForm" onSubmit={(e)=>e.preventDefault()}>
                    <label htmlFor="postTitle">Title</label>
                    <input 
                    id="postTitle"
                    type="text"
                    required
                    value={editTitle}
                    onChange={(e)=>setEditTitle(e.target.value)} 
                    />
                    <label htmlFor="postBody">Post:</label>
                    <textarea 
                    id="postBody"
                    required 
                    value={editBody}
                    onChange={(e)=>setEditBody(e.target.value)
                    }></textarea>

                    <button 
                    type="submit"
                    onClick={()=>handleEdit(post.id)}
                    >
                        Submit

                    </button>
                </form>
            </>
            
            }
            {!editTitle &&
                <>
                <h2>Post Not found</h2>
                <p>So dissapointing!</p>
                <p>
                    <Link to='/'>Visit home page</Link>
                </p>
                </>
            }
        </main>
            
    )
}

export default EditPost;