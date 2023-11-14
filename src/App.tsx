import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Card from "./components/Card";
import BlogForm from "./components/BlogForm";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Card/>}></Route>
        <Route path="/create-blog" element={<BlogForm/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
