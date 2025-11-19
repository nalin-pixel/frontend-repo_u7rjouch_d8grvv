import React, { useState } from 'react'
import { MessageCircle } from 'lucide-react'

const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function Contact() {
  const [form, setForm] = useState({ name: '', mobile: '', email: '', service_required: '', message: '' })
  const [status, setStatus] = useState(null)

  const submit = async (e) => {
    e.preventDefault()
    setStatus('Submitting...')
    try {
      const res = await fetch(`${baseUrl}/lead/inquiry`, {
        method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ ...form, source: 'website' })
      })
      const data = await res.json()
      if (res.ok) setStatus('Thanks! We will call you shortly.')
      else setStatus(data?.detail || 'Something went wrong')
    } catch (e) { setStatus('Network error') }
  }

  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Contact Us</h2>
            <p className="text-white/70 mt-3">Tell us your requirement and we’ll call you.</p>
            <div className="mt-6 flex items-center gap-3 text-emerald-300">
              <MessageCircle size={20}/> <a className="underline" href="https://wa.me/">Chat on WhatsApp</a>
            </div>
          </div>
          <form onSubmit={submit} className="p-6 rounded-2xl bg-white/5 border border-white/10">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input required placeholder="Name" className="bg-white/10 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/50" value={form.name} onChange={e=>setForm({...form, name:e.target.value})}/>
              <input required placeholder="Mobile" className="bg-white/10 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/50" value={form.mobile} onChange={e=>setForm({...form, mobile:e.target.value})}/>
              <input type="email" placeholder="Email" className="bg-white/10 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/50" value={form.email} onChange={e=>setForm({...form, email:e.target.value})}/>
              <input required placeholder="Service Required" className="bg-white/10 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/50" value={form.service_required} onChange={e=>setForm({...form, service_required:e.target.value})}/>
              <textarea placeholder="Message" rows={4} className="sm:col-span-2 bg-white/10 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/50" value={form.message} onChange={e=>setForm({...form, message:e.target.value})}/>
            </div>
            <button className="mt-4 w-full px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-blue-600 text-white font-semibold">Send Inquiry</button>
            {status && <p className="mt-3 text-white/80">{status}</p>}
          </form>
        </div>
      </div>
    </section>
  )
}
