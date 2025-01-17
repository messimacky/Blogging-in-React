import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Create = () => {
    const [title,setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('yoshi');
    const [adding, setAdding] = useState(false);
    const history = useHistory();



    const handleSubmit=(e)=> {
        e.preventDefault();
        const blog = {title, body, author};
        setAdding(true);
        fetch('http://localhost:8000/blogs', {
            method:'POST',
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(blog)
        })
        .then(() => {
            console.log("New blog added!")
            setAdding(false);
            // history.go(-1);
            history.push("/");
        })
    }



    return (
        <div className="create">
            <h2>Add a New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog Title</label>
                <input 
                  type="text" 
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required />

                <label>Blog body</label>
                <textarea
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                ></textarea>
                <label>Blog Author</label>
                <select value={author} onChange={(e) => setAuthor(e.target.value)}>
                    <option value="mario">mario</option>
                    <option value="yoshi">yoshi</option>
                </select>
                 {!adding ? <button>Add Blog</button> : <div><p>Adding new blog</p></div>}
                 
            </form>
        </div>
    );
}
 
export default Create;