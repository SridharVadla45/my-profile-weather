import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import MyTown from "./components/MyTown";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen bg-gray-50">
        {/* Fixed Navbar */}
        <Navbar />

        {/* Main Content Area */}
        <main className="flex-1 flex flex-col justify-center items-center px-6 sm:px-10 lg:px-20 pt-24 w-full">
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/mytown" element={<MyTown />} />
          </Routes>
        </main>

        {/* Footer (always visible) */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
