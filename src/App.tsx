import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Card from "./components/Card";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Card/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
