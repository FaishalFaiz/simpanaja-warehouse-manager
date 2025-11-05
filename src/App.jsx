import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from '@/pages/Home.jsx'
import Dashboard from '@/pages/Dashboard.jsx'
import Navbar from '@/components/Navbar.jsx'
import Footer from '@/components/Footer.jsx'
import '@/main.css'

export default function App() {

  return (
    <Router className="bg-white">

      <Navbar />

      <div className="min-h-screen flex flex-col">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>

      <Footer />

    </Router>
  )
}
