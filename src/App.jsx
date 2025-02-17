import React from "react";
import Navbar from "./components/Navbar";



import Sender from "./components/Sender";
import { Route, Routes } from "react-router";
import Footer from "./components/Footer";

function App() {
  return (
    <div >
      <Navbar />

      <Routes>
        <Route path="/" element={<Sender />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
