import React from 'react'

export default function Industries() {
  const items = [
    { key: 'temples', title: 'Temples', desc: 'Compassionate security for high-footfall religious spaces.' },
    { key: 'hotels', title: 'Hotels', desc: 'Premium guest experience with discreet protection.' },
    { key: 'events', title: 'Events', desc: 'Crowd management, access control, backstage security.' },
    { key: 'corporate', title: 'Corporate', desc: 'Office security, reception, parking and protocols.' },
    { key: 'residences', title: 'Residences', desc: 'Gated communities, towers and private estates.' },
    { key: 'broadcasting', title: 'Broadcasting', desc: 'Studio security and talent protection.' },
    { key: 'malls', title: 'Malls', desc: 'Retail floor vigilance and incident response.' }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold">Industries We Serve</h1>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(i => (
            <div key={i.key} className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <h3 className="text-xl font-semibold">{i.title}</h3>
              <p className="text-white/70 mt-2">{i.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
