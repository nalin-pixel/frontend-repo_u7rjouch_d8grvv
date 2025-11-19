import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, Phone, ChevronDown, Instagram, Facebook, Linkedin, MessageCircle } from 'lucide-react'

const services = [
  { key: 'armed-guards', label: 'Armed Guards' },
  { key: 'unarmed-guards', label: 'Unarmed Guards' },
  { key: 'bouncers', label: 'Bouncers' },
  { key: 'valet', label: 'Valet Drivers' },
  { key: 'housekeeping', label: 'Housekeeping' },
  { key: 'vip-protection', label: 'VIP Protection' },
  { key: 'facility-security', label: 'Facility Security' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-slate-900/70 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-tr from-emerald-400 to-blue-500 shadow-lg" />
            <span className="font-semibold text-white tracking-wide">Right Track Corporate Services</span>
          </Link>

          <nav className="hidden md:flex items-center gap-6 text-sm">
            <div className="relative">
              <button onClick={() => setOpen(v => !v)} className="inline-flex items-center gap-1 text-white/90 hover:text-white transition">
                Services <ChevronDown size={16} className="opacity-70" />
              </button>
              {open && (
                <div onMouseLeave={() => setOpen(false)} className="absolute mt-2 w-[340px] grid grid-cols-1 md:grid-cols-1 bg-slate-800/90 border border-white/10 rounded-xl p-2 shadow-2xl">
                  {services.map(s => (
                    <Link key={s.key} to={`/services#${s.key}`} className="px-3 py-2 rounded-lg text-white/90 hover:bg-white/10 hover:text-white transition">
                      {s.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <NavLink to="/about" className={({isActive})=>`hover:text-white transition ${isActive? 'text-white':'text-white/90'}`}>About</NavLink>
            <NavLink to="/industries" className={({isActive})=>`hover:text-white transition ${isActive? 'text-white':'text-white/90'}`}>Industries</NavLink>
            <NavLink to="/testimonials" className={({isActive})=>`hover:text-white transition ${isActive? 'text-white':'text-white/90'}`}>Testimonials</NavLink>
            <NavLink to="/careers" className={({isActive})=>`hover:text-white transition ${isActive? 'text-white':'text-white/90'}`}>Careers</NavLink>
            <NavLink to="/contact" className="text-emerald-300 hover:text-emerald-200">Contact</NavLink>
            <div className="flex items-center gap-3 ml-2">
              <a href="https://www.linkedin.com" target="_blank" className="text-white/70 hover:text-white"><Linkedin size={18}/></a>
              <a href="https://www.instagram.com" target="_blank" className="text-white/70 hover:text-white"><Instagram size={18}/></a>
              <a href="https://www.facebook.com" target="_blank" className="text-white/70 hover:text-white"><Facebook size={18}/></a>
              <a href="https://wa.me/" target="_blank" className="text-white/70 hover:text-white"><MessageCircle size={18}/></a>
            </div>
            <Link to="/contact" className="ml-2 inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-emerald-500 to-blue-600 text-white font-medium shadow">
              <Phone size={16}/> Request a Call
            </Link>
          </nav>

          <button className="md:hidden text-white/90"><Menu/></button>
        </div>
      </div>
    </header>
  )
}
