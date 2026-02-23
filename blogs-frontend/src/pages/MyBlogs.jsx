import { useEffect, useState } from "react";
import API from "../api/axios";
import UpdateBlog from "./UpdateBlog";
import "./Blogs.css";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [updatePost, setUpdatePost] = useState(null);

  useEffect(() => {
    API.get("/blog/my").then((res) => setBlogs(res.data));
  }, [updatePost]);
  const handleDelete = (id) => {
    API.delete(`/blog/${id}`).then((res) => alert(res));
    setBlogs((prev) => prev.filter((blog) => blog._id !== id));
  };

  return (
    <div className="blogs-container">
      {blogs.map((blog) => (
        <div className="blog-card" key={blog._id}>
          <img
            src={blog.image || "https://source.unsplash.com/600x400/?nature"}
            alt={blog.title}
            className="blog-image"
          />

          <div className="blog-content">
            <span className="blog-category">TRAVEL</span>

            <h2>{blog.title}</h2>
            <p>{blog.content.substring(0, 120)}...</p>

            <small>✍ {blog.author?.name}</small>
            <div className="blog-actions">
              <button
                className="btn-update"
                onClick={() => setUpdatePost(blog)}
              >
                <span>✏️</span> Update
              </button>

              <button
                className="btn-delete"
                onClick={() => handleDelete(blog._id)}
              >
                <span>🗑</span> Delete
              </button>
            </div>
          </div>
        </div>
      ))}
      {updatePost && (
        <UpdateBlog blog={updatePost} setUpdatePost={setUpdatePost} />
      )}
    </div>
  );
};

export default Blogs;
