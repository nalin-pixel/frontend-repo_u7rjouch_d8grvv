import React, { useEffect, useRef, useState } from 'react'

const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

function AutoScrollRow({ children, speed = 40 }) {
  const containerRef = useRef(null)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    let start = null
    let raf
    const step = (ts) => {
      if (!start) start = ts
      const dt = ts - start
      el.scrollLeft = (dt / speed) % el.scrollWidth
      raf = requestAnimationFrame(step)
    }
    raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [speed])

  return (
    <div ref={containerRef} className="overflow-x-auto whitespace-nowrap no-scrollbar [scrollbar-width:none] [-ms-overflow-style:none]" style={{scrollBehavior:'auto'}}>
      <div className="inline-flex gap-6 pr-6">
        {children}
        {children}
      </div>
    </div>
  )
}

export default function Testimonials() {
  const [items, setItems] = useState([])
  useEffect(() => { fetch(`${baseUrl}/content/testimonials`).then(r=>r.json()).then(setItems).catch(()=>{}) }, [])

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center">Testimonials</h2>
        <p className="text-white/70 text-center mt-3">What our clients say.</p>
        <div className="mt-10 rounded-2xl bg-white/5 border border-white/10 p-6">
          <AutoScrollRow>
            {items.map((t, i) => (
              <div key={i} className="w-[420px] shrink-0 p-5 rounded-xl bg-gradient-to-b from-slate-800/60 to-slate-900/60 border border-white/10 text-white">
                <p className="text-white/90">“{t.quote}”</p>
                <div className="mt-4 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-white/10" />
                  <div>
                    <p className="text-sm font-semibold">{t.name}</p>
                    <p className="text-xs text-white/60">{t.organization}</p>
                  </div>
                </div>
              </div>
            ))}
          </AutoScrollRow>
        </div>
      </div>
    </section>
  )
}
