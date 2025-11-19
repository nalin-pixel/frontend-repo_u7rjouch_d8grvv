import React, { useState } from 'react'

const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function Careers(){
  const [form, setForm] = useState({ full_name:'', mobile:'', email:'', role:'', experience_years:'', location:'', message:'' })
  const [status, setStatus] = useState(null)

  const submit = async (e) => {
    e.preventDefault()
    setStatus('Submitting...')
    try {
      const res = await fetch(`${baseUrl}/lead/career`, { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({ ...form, experience_years: form.experience_years ? parseFloat(form.experience_years) : null }) })
      const data = await res.json()
      if (res.ok) setStatus('Application received. We will contact you soon.')
      else setStatus(data?.detail || 'Something went wrong')
    } catch(e) { setStatus('Network error') }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold">Careers</h1>
        <p className="mt-3 text-white/80">Grow with a disciplined, compassionate team. Apply below.</p>
        <form onSubmit={submit} className="mt-8 p-6 rounded-2xl bg-white/5 border border-white/10">
          <div className="grid sm:grid-cols-2 gap-4">
            <input required placeholder="Full Name" className="bg-white/10 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/50" value={form.full_name} onChange={e=>setForm({...form, full_name:e.target.value})}/>
            <input required placeholder="Mobile" className="bg-white/10 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/50" value={form.mobile} onChange={e=>setForm({...form, mobile:e.target.value})}/>
            <input type="email" placeholder="Email" className="bg-white/10 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/50" value={form.email} onChange={e=>setForm({...form, email:e.target.value})}/>
            <input required placeholder="Role (e.g., Armed Guard)" className="bg-white/10 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/50" value={form.role} onChange={e=>setForm({...form, role:e.target.value})}/>
            <input placeholder="Experience (years)" className="bg-white/10 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/50" value={form.experience_years} onChange={e=>setForm({...form, experience_years:e.target.value})}/>
            <input placeholder="Location" className="bg-white/10 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/50" value={form.location} onChange={e=>setForm({...form, location:e.target.value})}/>
            <textarea placeholder="Message" rows={4} className="sm:col-span-2 bg-white/10 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/50" value={form.message} onChange={e=>setForm({...form, message:e.target.value})}/>
          </div>
          <button className="mt-4 w-full px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-blue-600 text-white font-semibold">Submit Application</button>
          {status && <p className="mt-3 text-white/80">{status}</p>}
        </form>
      </div>
    </div>
  )
}
