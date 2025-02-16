import React from "react";
import Navbar from "./components/Navbar";



import Sender from "./components/Sender";
import { Route, Routes } from "react-router";

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Sender />} />
      </Routes>
    </div>
  );
}

export default App;
