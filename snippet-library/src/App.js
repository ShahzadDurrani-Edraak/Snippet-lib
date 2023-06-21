import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import AddSnippet from "./Components/Add-snippet";
import Single from "./Components/Single";
import Content from "./Components/Content";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Content />} />
          <Route path="/add" element={<AddSnippet />} />
          <Route path="/snippet/:id" element={<Single />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
