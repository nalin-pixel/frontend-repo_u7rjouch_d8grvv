import React from 'react'

export default function Excellence() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 items-start">
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
            <p className="text-5xl font-extrabold bg-gradient-to-r from-emerald-300 to-blue-300 text-transparent bg-clip-text">12+</p>
            <p className="text-white/80 mt-2">Years safeguarding people, places and reputations.</p>
          </div>
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
            <p className="text-white font-semibold text-lg">Philosophy</p>
            <p className="text-white/70 mt-2">A disciplined, compassionate approach backed by rigorous training and transparent reporting.</p>
          </div>
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
            <p className="text-white font-semibold text-lg">Staffing Expertise</p>
            <p className="text-white/70 mt-2">From high-profile events to sensitive facilities—we staff the right team for every scenario.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
