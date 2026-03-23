import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import BookRequest from "./pages/BookRequest";
import EventFeedback from "./pages/EventFeedback";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/bookrequest" element={<BookRequest />} />
        <Route path="/eventfeedback" element={<EventFeedback />} />
      </Routes>
    </>
  );
}

export default App;