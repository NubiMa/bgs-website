'use client'

import { useState, useEffect, useRef } from 'react'

function useCountUp(target, trigger, duration = 2000) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!trigger) return
    let start = 0
    const increment = target / (duration / 16)
    const timer = setInterval(() => {
      start += increment
      if (start >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)
    return () => clearInterval(timer)
  }, [target, trigger, duration])

  return count
}

const stats = [
  { number: 500, suffix: '+', format: false, label: 'Anggota Terdaftar', desc: 'Menjadikan kami salah satu komunitas terbesar di Jawa Timur.' },
  { number: 45, suffix: '+', format: false, label: 'Kegiatan Pertahun', desc: 'Mewadahi tingginya desakan dan pengabdian banyak pejuang.' },
  { number: 2.5, suffix: 'k+', format: true, label: 'Arsip Dokumentasi', desc: 'Foto dan video perjalanan perkeretaapian seluruh stasiun.' },
]

export default function Stats() {
  const [inView, setInView] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const counts = stats.map(s => useCountUp(s.number, inView))

  return (
    <section id="stats" ref={sectionRef} className="py-24 bg-[#EBEBEB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Minimalist Stats grid - exact match to mockup (dark gold numbers) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center max-w-5xl mx-auto">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="flex items-end justify-center mb-2">
                <span className="text-6xl md:text-7xl font-bold text-[#A68212] tracking-tighter">
                  {stat.format && inView ? counts[i].toFixed(1) : (inView ? counts[i] : 0)}
                  {stat.suffix}
                </span>
              </div>
              <div className="font-bold text-sm text-gray-900 mb-2 mt-4">{stat.label}</div>
              <p className="text-xs text-gray-500 max-w-[200px] leading-relaxed">{stat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
