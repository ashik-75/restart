import Navbar from "./components/custom/navbar";
import { Route, Routes } from "react-router-dom";
import TestimonalCarousel from "./feature/tailwind/routes/testimonial-carousel/page";

function App() {
  return (
    <div className="h-full dark:bg-slate-950">
      <Navbar />

      <Routes>
        <Route element={<TestimonalCarousel />} path="/tailwind" />
      </Routes>
    </div>
  );
}

export default App;
