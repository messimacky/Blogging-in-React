import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import useFetch from "./useFetch";
import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const BlogDetails = () => {
    const {id} = useParams();
    const {error, isPending, data:blog} = useFetch('http://localhost:8000/blogs/'+id);
    const history = useHistory();
      
  const handleDelete=()=>{
    fetch('http://localhost:8000/blogs/'+id, {
        method:"DELETE"
    })
    .then(() => {

        history.push('/');
    })
  }

    return (
        <div className="blog-details">
         {error && <div>{error}</div>}
         {isPending && <div> {isPending}</div>}
         {blog && (
            <article>
              <h2>  {blog.title} </h2>
               <p>Written by {blog.author} </p> 
               <div>{blog.body}</div>
            </article>
         )}
         <button onClick={handleDelete}>Delete</button>
        </div>
    );
}
 
export default BlogDetails;