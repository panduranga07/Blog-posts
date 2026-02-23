import { useEffect, useState } from "react";
import API from "../api/axios";
import "./Blogs.css";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    API.get("/blog").then((res) => setBlogs(res.data));
  }, []);

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
          </div>
        </div>
      ))}
    </div>
  );
};

export default Blogs;
