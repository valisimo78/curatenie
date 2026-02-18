import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "@/pages/HomePage";
import ContactPage from "@/pages/ContactPage";
import GalleryPage from "@/pages/GalleryPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/galerie" element={<GalleryPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
