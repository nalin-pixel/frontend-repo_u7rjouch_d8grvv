import React, { useEffect, useState } from 'react'

const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function ServicesPage() {
  const [services, setServices] = useState([])
  useEffect(() => { fetch(`${baseUrl}/content/services`).then(r=>r.json()).then(setServices).catch(()=>{}) }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold">Services</h1>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(s => (
            <div key={s.key} id={s.key} className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <h3 className="text-xl font-semibold">{s.title}</h3>
              <p className="text-white/70 mt-2">{s.description}</p>
              {s.benefits && (
                <ul className="mt-4 list-disc list-inside text-white/80 text-sm">
                  {s.benefits.map((b,i)=>(<li key={i}>{b}</li>))}
                </ul>
              )}
              {s.use_cases && (
                <div className="mt-3 text-white/60 text-sm">Use cases: {s.use_cases.join(', ')}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
