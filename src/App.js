import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// pages
import Landing from "./pages/landing";
import NotFound from "./pages/notfound";
import Andre from "./pages/andre"   //added code
import Earl from "./pages/earl"   //added code

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/andre" element={<Andre />} />   //added code
        <Route path="/earl" element={<Earl />} />   //added code
      </Routes>
    </Router>
  );
}

export default App;
