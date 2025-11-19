import React from 'react'
import { ShieldCheck, HeartHandshake, Award, Users, BadgeCheck } from 'lucide-react'

const values = [
  { icon: HeartHandshake, title: 'Compassion', desc: 'People-first approach with respect and empathy.' },
  { icon: BadgeCheck, title: 'Commitment', desc: 'Relentless dedication to safety and service.' },
  { icon: Award, title: 'Excellence', desc: 'Training, discipline and continuous improvement.' },
  { icon: Users, title: 'Teamwork', desc: 'Coordinated, communicative and accountable teams.' },
  { icon: ShieldCheck, title: 'Value', desc: 'Premium quality with measurable ROI.' },
]

export default function Values() {
  return (
    <section className="py-20 bg-slate-900/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center">Our Values</h2>
        <p className="text-white/70 text-center mt-3">The principles that drive every assignment.</p>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {values.map((v) => (
            <div key={v.title} className="group p-6 rounded-2xl bg-gradient-to-b from-white/5 to-white/0 border border-white/10 hover:border-white/20 transition">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-300 grid place-items-center group-hover:scale-105 transition">
                <v.icon size={26} />
              </div>
              <h3 className="mt-4 text-white font-semibold">{v.title}</h3>
              <p className="mt-1 text-white/70 text-sm">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
