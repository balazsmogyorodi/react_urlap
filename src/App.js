import './App.css';
import Layout from "./Layout.js";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Urlap from './Pages/Urlap.js';
import Kezdolap from './Pages/Kezdolap.js';
import Adatok from './Pages/Adatok.js';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Kezdolap />} />
          <Route path="urlap" element={<Urlap />} />
          <Route path="adatok" element={<Adatok />} />
       
        </Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
