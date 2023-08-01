import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from "./pages/Home";
import About from "./pages/About";
import Vans from './vans/Vans';
import Login from "./pages/Login"
import Signup from "./pages/Signup"



// import Contact from './pages/Contact';
import VanDetail from './vans/VanDetail';
import "./style/style.css";
import Layout from './component/Layout';
import HostLayout from './component/HostLayout';
import Dashboard from './host/Dashboard';
import Income from './host/Income';
import Reviews from './host/Reviews';
import HostVans from './host/HostVans';
import HostVanDetail from './host/HostVansDetail';
import { requireAuth } from "./Utils"


// import "./pages/server"

function App() {
  return (
    <BrowserRouter>
  <Routes>
    <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="vans" element={<Vans />} />
          <Route path="/vans/:id" element={<VanDetail />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />



          <Route path="/host" element={<HostLayout />}>
             <Route index element={<Dashboard />}  
            loader={async () => {
              await requireAuth()
              
              return null
             }}
             
             
             
             />
             <Route path="income" element={<Income />} />
             <Route path="vans" element={<HostVans />} />
             <Route path="vans/:id" element={<HostVanDetail />} />

             <Route path="reviews" element={<Reviews />} />


          </Route>
        </Route>
      </Routes>
  </BrowserRouter>
  )
}

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(<App />);