import React, { useEffect, useState } from 'react'

const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function Services() {
  const [services, setServices] = useState([])
  useEffect(() => {
    fetch(`${baseUrl}/content/services`).then(r=>r.json()).then(setServices).catch(()=>{})
  }, [])

  return (
    <section id="services" className="py-20 bg-slate-900/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center">Services</h2>
        <p className="text-white/70 text-center mt-3">Comprehensive protection and facility care for every need.</p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(s => (
            <div key={s.key} id={s.key} className="group rounded-2xl overflow-hidden bg-white/5 border border-white/10 hover:border-emerald-400/40 transition">
              <div className="h-44 bg-gradient-to-tr from-emerald-500/20 to-blue-500/20" />
              <div className="p-6">
                <h3 className="text-white font-semibold text-lg">{s.title}</h3>
                <p className="text-white/70 text-sm mt-2">{s.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
