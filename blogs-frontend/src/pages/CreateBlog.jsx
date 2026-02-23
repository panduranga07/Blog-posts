import { useState } from "react";
import API from "../api/axios";
import { useNavigate } from "react-router-dom";
import "./Auth.css";

const CreateBlog = () => {
  const [blog, setBlog] = useState({ title: "", content: "", image: "" });
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    await API.post("/blog", blog);
    navigate("/");
  };

  return (
    <div className="auth-container">
      <h2>Create Blog</h2>
      <form onSubmit={submitHandler}>
        <input
          placeholder="Title"
          onChange={(e) => setBlog({ ...blog, title: e.target.value })}
        />
        <textarea
          placeholder="Content"
          rows="4"
          onChange={(e) => setBlog({ ...blog, content: e.target.value })}
        />
        <input
          placeholder="Image URL"
          onChange={(e) => setBlog({ ...blog, image: e.target.value })}
        />
        <button>Create</button>
      </form>
    </div>
  );
};

export default CreateBlog;
