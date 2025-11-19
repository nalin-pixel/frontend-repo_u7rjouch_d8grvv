import React, { useEffect, useState } from 'react'

const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function Clientele() {
  const [logos, setLogos] = useState([])
  useEffect(() => { fetch(`${baseUrl}/content/client-logos`).then(r=>r.json()).then(setLogos).catch(()=>{}) }, [])

  return (
    <section className="py-16 bg-slate-900/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-white/70 text-center">Trusted by leading organizations</p>
        <div className="mt-8 relative overflow-hidden">
          <div className="flex gap-16 animate-[scroll_20s_linear_infinite]" style={{whiteSpace:'nowrap'}}>
            {logos.concat(logos).map((c, i) => (
              <div key={i} className="h-12 w-32 bg-white/10 rounded-md flex items-center justify-center text-white/60 text-sm">
                {c.name}
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>{`@keyframes scroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }`}</style>
    </section>
  )}
