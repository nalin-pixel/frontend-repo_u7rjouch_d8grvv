import React from 'react'
import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/DtQLjBkD1UpownGS/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-slate-900/60 to-slate-900 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white drop-shadow-xl"
        >
          Trusted Security & Facility Management
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: .1 }}
          className="mt-6 text-lg sm:text-xl text-white/80 max-w-2xl"
        >
          Armed and unarmed guards, bouncers, valet drivers, housekeeping, and VIP protection — delivered with compassion, commitment and excellence.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: .2 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a href="#contact" className="px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-blue-600 text-white font-semibold shadow-lg shadow-emerald-500/20">Request a Call</a>
          <a href="#services" className="px-6 py-3 rounded-xl border border-white/20 text-white/90 hover:text-white">Explore Services</a>
        </motion.div>
      </div>
    </section>
  )
}
