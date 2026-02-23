import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Blogs from "./pages/Blogs";
import CreateBlog from "./pages/CreateBlog";
import Navbar from "./components/Navbar";
import MyBlogs from "./pages/MyBlogs";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Blogs />} />
        <Route path="/my" element={<MyBlogs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/create" element={<CreateBlog />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
