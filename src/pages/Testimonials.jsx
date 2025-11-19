import React, { useEffect, useState } from 'react'

const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function TestimonialsPage() {
  const [items, setItems] = useState([])
  useEffect(() => { fetch(`${baseUrl}/content/testimonials`).then(r=>r.json()).then(setItems).catch(()=>{}) }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold">Testimonials</h1>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((t, i) => (
            <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <p className="text-white/90">“{t.quote}”</p>
              <p className="mt-3 text-sm font-semibold">{t.name}</p>
              <p className="text-xs text-white/60">{t.organization}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
