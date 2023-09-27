import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { VideoHandler } from "./ServeVideo";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<VideoHandler />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
