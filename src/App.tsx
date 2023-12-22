import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./components/about/about";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import GetPost from "./components/get_post/GetPost";
import Contact from "./components/contact/contact";

function App() {
  return (
    <>
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/post/:postId" element={<GetPost/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
