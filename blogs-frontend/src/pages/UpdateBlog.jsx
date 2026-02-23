import { useState } from "react";
import API from "../api/axios";
import "./Auth.css";

const CreateBlog = ({ blog, setUpdatePost }) => {
  const [formData, setFormData] = useState({
    title: blog?.title || "",
    content: blog?.content || "",
    image: blog?.image || "",
  });

  const handleUpdate = async (e) => {
    e.preventDefault();

    console.log(blog._id);

    try {
      const res = await API.put(`/blog/${blog._id}`, formData);
      if (res) {
        alert("post updated succesfully");
        setUpdatePost(null);
      }
    } catch (error) {
      console.error(error.response?.data || error.message);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="auth-container">
          <h2>Update Blog</h2>

          <form onSubmit={handleUpdate}>
            <input
              name="title"
              placeholder="Title"
              value={formData.title}
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
              }
              required
            />

            <textarea
              name="content"
              placeholder="Content"
              rows="4"
              value={formData.content}
              onChange={(e) =>
                setFormData({ ...formData, content: e.target.value })
              }
              required
            />

            <input
              name="image"
              placeholder="Image URL"
              value={formData.image}
              onChange={(e) =>
                setFormData({ ...formData, image: e.target.value })
              }
            />

            <div style={{ display: "flex", gap: "10px" }}>
              <button
                type="button"
                onClick={() => setUpdatePost(null)}
                className="btn-cancel"
              >
                Cancel
              </button>

              <button type="submit" className="btn-update">
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateBlog;
