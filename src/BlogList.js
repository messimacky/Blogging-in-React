import { Link } from "react-router-dom/cjs/react-router-dom.min";

const BlogList = (props) => {
    const title = props.title;
    const blogs = props.blogs;
    

    return (
        <div className="blog-list">
    
            <h2>{title}</h2>
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <Link to = {`/blogs/${blog.id}`}>
                    <h2>Title {blog.title}</h2>
                    <p>Written by {blog.author}</p>
                    </Link>
                 </div>
            ))}

        </div>
    );
}
 
export default BlogList;