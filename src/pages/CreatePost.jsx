import React, { useState, useContext, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
const CreatePost = () => {
  const { currentUser } = useContext(UserContext);
  const token = currentUser?.token;
  const navigate = useNavigate();
  //redirect to login page for any user who is not logged in
  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, []);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Uncategorized");
  const [description, setDescription] = useState("");
  const [thumbnail, setThumbnail] = useState("");

  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image"],
      ["clean"],
    ],
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
  ];

  const POST_CATEGORIES = [
    "Agriculture",
    "Business",
    "Education",
    "Entertainment",
    "Art",
    "Investment",
    "Uncategorized",
    "Weather",
  ];
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(title, "title");
    console.log(category, "category");
    console.log(description, "description");
    console.log(thumbnail.name, "files");
  };
  return (
    <section className="max-w-4xl mx-auto px-4 py-12">
      <div className="bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Create New Post
        </h2>

        {/* Error message placeholder */}
        <p className="mb-4 text-sm text-red-500">
          {/* Error message goes here */}
        </p>

        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Title */}
          <input
            type="text"
            placeholder="Post title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            autoFocus
            className="w-full px-4 py-3 border rounded-lg outline-none focus:ring-2 focus:ring-indigo-500"
          />

          {/* Category */}
          <select
            name="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full px-4 py-3 border rounded-lg bg-white outline-none focus:ring-2 focus:ring-indigo-500"
          >
            {POST_CATEGORIES.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>

          {/* Editor */}
          <div className="border rounded-lg overflow-hidden">
            <ReactQuill
              modules={modules}
              formats={formats}
              value={description}
              onChange={setDescription}
              placeholder="Write your post content here..."
            />
          </div>

          {/* Thumbnail */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Post Thumbnail
            </label>
            <input
              type="file"
              accept="png, jpg, jpeg"
              onChange={(e) => setThumbnail(e.target.files[0])}
              className="block w-full text-sm text-gray-500
                file:mr-4 file:py-2 file:px-4
                file:rounded-lg file:border-0
                file:text-sm file:font-semibold
                file:bg-indigo-50 file:text-indigo-600
                hover:file:bg-indigo-100"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition"
          >
            Create Post
          </button>
        </form>
      </div>
    </section>
  );
};

export default CreatePost;
