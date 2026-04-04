'use client'

import { useState } from 'react'

export default function CTA() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState('')

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMsg('')
    try {
      const res = await fetch('/api/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Gagal mengirim.')
      setStatus('success')
      setForm({ name: '', email: '', message: '' })
    } catch (err) {
      setErrorMsg(err.message)
      setStatus('error')
    }
  }
  return (
    <section id="contact" className="relative group py-32 bg-[#1C1C1C] overflow-hidden">
      {/* Interactive Grid Overlay */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-20 md:opacity-0 md:group-hover:opacity-30 transition-opacity duration-700 z-0" 
        style={{ 
          backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)', 
          backgroundSize: '4rem 4rem', 
          backgroundPosition: 'center center' 
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left: Contact Info */}
          <div>
            <div className="text-xs font-bold tracking-widest text-[#D1A71D] uppercase mb-3">TETAP TERHUBUNG</div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight tracking-tight">
              Punya Pertanyaan <br className="hidden md:block"/> atau Masukan?
            </h2>
            <p className="text-gray-400 text-[15px] font-medium mb-12 leading-relaxed max-w-md">
              Kami sangat menghargai setiap masukan, kritik, dan dukungan Anda. Silakan kirimkan pesan melalui form di samping atau hubungi kami melalui kontak di bawah ini.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-5 group/item cursor-default">
                <div className="w-12 h-12 rounded-full bg-[#111111] border border-gray-800 flex items-center justify-center text-[#D1A71D] shrink-0 group-hover/item:scale-110 transition-transform duration-300 shadow-md">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Email Komunitas</h4>
                  <a href="mailto:komunitasbgs.sidoarjo@gmail.com" className="text-gray-400 text-sm hover:text-[#D1A71D] transition-colors">komunitasbgs.sidoarjo@gmail.com</a>
                </div>
              </div>

              <div className="flex items-start gap-5 group/item cursor-default">
                <div className="w-12 h-12 rounded-full bg-[#111111] border border-gray-800 flex items-center justify-center text-[#D1A71D] shrink-0 group-hover/item:scale-110 transition-transform duration-300 shadow-md">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.79a8.18 8.18 0 004.78 1.52V6.85a4.85 4.85 0 01-1.01-.16z"/>
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">TikTok</h4>
                  <a href="https://www.tiktok.com/@bgs.sidoarjo" target="_blank" rel="noopener noreferrer" className="text-gray-400 text-sm hover:text-[#D1A71D] transition-colors">@bgs.sidoarjo</a>
                </div>
              </div>

              <div className="flex items-start gap-5 group/item cursor-default">
                <div className="w-12 h-12 rounded-full bg-[#111111] border border-gray-800 flex items-center justify-center text-[#D1A71D] shrink-0 group-hover/item:scale-110 transition-transform duration-300 shadow-md">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Instagram</h4>
                  <a href="https://www.instagram.com/bgs.sidoarjo/" target="_blank" rel="noopener noreferrer" className="text-gray-400 text-sm hover:text-[#D1A71D] transition-colors">@bgs.sidoarjo</a>
                </div>
              </div>

              <div className="flex items-start gap-5 group/item cursor-default">
                <div className="w-12 h-12 rounded-full bg-[#111111] border border-gray-800 flex items-center justify-center text-[#D1A71D] shrink-0 group-hover/item:scale-110 transition-transform duration-300 shadow-md">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.125.553 4.12 1.52 5.854L0 24l6.335-1.502A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.001-1.366l-.36-.214-3.722.882.944-3.618-.235-.372A9.777 9.777 0 012.182 12C2.182 6.578 6.578 2.182 12 2.182S21.818 6.578 21.818 12 17.422 21.818 12 21.818z"/>
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">WhatsApp</h4>
                  <a href="https://wa.me/6281559691087" target="_blank" rel="noopener noreferrer" className="text-gray-400 text-sm hover:text-[#D1A71D] transition-colors">+62 815-5969-1087</a>
                </div>
              </div>

              <div className="flex items-start gap-5 group/item cursor-default">
                <div className="w-12 h-12 rounded-full bg-[#111111] border border-gray-800 flex items-center justify-center text-[#D1A71D] shrink-0 group-hover/item:scale-110 transition-transform duration-300 shadow-md">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Sekretariat</h4>
                  <p className="text-gray-400 text-sm">Jalan Balai Desa, RT 12 RW 04, Dusun Buduran, Desa Buduran, Kecamatan Buduran, Kabupaten Sidoarjo, Jawa Timur</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Feedback Form Card */}
          <div className="bg-white rounded-3xl p-8 md:p-10 shadow-2xl relative">
<h3 className="text-2xl font-extrabold text-[#111111] mb-8">Kirim Tanggapan</h3>

            {status === 'success' ? (
              <div className="flex flex-col items-center justify-center py-14 text-center gap-4">
                <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mb-2">
                  <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h4 className="text-lg font-extrabold text-gray-900">Pesan Terkirim!</h4>
                <p className="text-gray-500 text-sm max-w-xs">Terima kasih atas tanggapannya. Kami akan segera menghubungi Anda.</p>
                <button
                  onClick={() => setStatus('idle')}
                  className="mt-2 text-xs font-bold text-[#D1A71D] hover:text-[#A68212] transition-colors"
                >
                  Kirim pesan lagi →
                </button>
              </div>
            ) : (
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-2 pl-1">Nama Lengkap</label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    className="w-full bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-xl focus:ring-[#D1A71D] focus:border-[#D1A71D] outline-none focus:bg-white transition-colors px-4 py-3.5"
                    placeholder="Masukkan nama Anda"
                    required
                    disabled={status === 'loading'}
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-2 pl-1">Alamat Email</label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    className="w-full bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-xl focus:ring-[#D1A71D] focus:border-[#D1A71D] outline-none focus:bg-white transition-colors px-4 py-3.5"
                    placeholder="emailanda@contoh.com"
                    required
                    disabled={status === 'loading'}
                  />
                </div>
                <div>
                  <label htmlFor="contact-message" className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-2 pl-1">Kritik & Saran</label>
                  <textarea
                    id="contact-message"
                    rows="4"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    className="w-full bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-xl focus:ring-[#D1A71D] focus:border-[#D1A71D] outline-none focus:bg-white transition-colors px-4 py-3.5 resize-none"
                    placeholder="Tuliskan pesan atau saran Anda untuk BGS..."
                    required
                    disabled={status === 'loading'}
                  ></textarea>
                </div>

                {status === 'error' && (
                  <p className="text-red-500 text-xs font-semibold bg-red-50 px-4 py-3 rounded-xl border border-red-100">
                    ⚠ {errorMsg}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full bg-[#111111] hover:bg-[#D1A71D] disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold text-sm px-6 py-4 rounded-xl transition-all duration-300 shadow-md hover:shadow-xl flex justify-center items-center gap-2 group/btn"
                >
                  {status === 'loading' ? (
                    <>
                      <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
                      </svg>
                      Mengirim...
                    </>
                  ) : (
                    <>
                      Kirim Pesan
                      <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  )
}
