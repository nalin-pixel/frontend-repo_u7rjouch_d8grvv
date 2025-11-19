import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Hero from './components/Hero'
import Values from './components/Values'
import Excellence from './components/Excellence'
import Services from './components/Services'
import Testimonials from './components/Testimonials'
import Clientele from './components/Clientele'
import Contact from './components/Contact'

import About from './pages/About'
import ServicesPage from './pages/Services'
import Industries from './pages/Industries'
import TestimonialsPage from './pages/Testimonials'
import ContactPage from './pages/Contact'
import Careers from './pages/Careers'

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <Header />
      <Hero />
      <Values />
      <Excellence />
      <Services />
      <Testimonials />
      <Clientele />
      <Contact />
      <a href="#contact" className="fixed bottom-6 right-6 px-4 py-3 rounded-full bg-gradient-to-r from-emerald-500 to-blue-600 text-white font-semibold shadow-lg">Request a Call</a>
    </div>
  )
}

export default function App(){
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<><Header/><About/></>} />
      <Route path="/services" element={<><Header/><ServicesPage/></>} />
      <Route path="/industries" element={<><Header/><Industries/></>} />
      <Route path="/testimonials" element={<><Header/><TestimonialsPage/></>} />
      <Route path="/contact" element={<><Header/><ContactPage/></>} />
      <Route path="/careers" element={<><Header/><Careers/></>} />
    </Routes>
  )
}
