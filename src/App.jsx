import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from '@/pages/Home.jsx'
import Dashboard from '@/pages/Dashboard.jsx'
import '@/main.css'

export default function App() {

  return (
    <Router className="bg-white">


      <div className="min-h-screen flex flex-col">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>



    </Router>
  )
}
