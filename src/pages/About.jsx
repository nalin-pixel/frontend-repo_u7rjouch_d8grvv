import React from 'react'

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold">About Us</h1>
        <p className="mt-4 text-white/80 max-w-3xl">We are a premium security and facility management company delivering armed and unarmed guards, bouncers, valet drivers, housekeeping and VIP protection. Our philosophy is built on discipline, compassion and transparent reporting.</p>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10">Founded in 2012</div>
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10">Leadership with 20+ years domain experience</div>
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10">Recognized for excellence and reliability</div>
        </div>
      </div>
    </div>
  )
}
