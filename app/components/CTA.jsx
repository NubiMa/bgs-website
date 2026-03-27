'use client'

export default function CTA() {
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
              Kami sangat menghargai setiap masukan, kritik, dan dukungan Anda. Silakan kirimkan pesan melalui form di samping atau hubungi kami melalui saluran resmi komunitas.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-5 group/item cursor-default">
                <div className="w-12 h-12 rounded-full bg-[#111111] border border-gray-800 flex items-center justify-center text-[#D1A71D] shrink-0 group-hover/item:scale-110 transition-transform duration-300 shadow-md">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Email Komunitas</h4>
                  <p className="text-gray-400 text-sm">komunitasbgs.sidoarjo@gmail.com</p>
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
                  <p className="text-gray-400 text-sm">Jalan Balai Desa, RT 12 RW 04, Dusun Buduran, Desa Buduran, Kecamatan
Buduran, Kabupaten Sidoarjo, Jawa Timur</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Feedback Form Card */}
          <div className="bg-white rounded-3xl p-8 md:p-10 shadow-2xl relative">
            <h3 className="text-2xl font-extrabold text-[#111111] mb-8">Kirim Tanggapan</h3>
            <form 
              className="space-y-6"
              onSubmit={(e) => { e.preventDefault(); alert('Terima kasih! Pesan Anda telah dikirim.'); }}
            >
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-2 pl-1">Nama Lengkap</label>
                <input 
                  type="text" 
                  className="w-full bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-xl focus:ring-[#D1A71D] focus:border-[#D1A71D] outline-none focus:bg-white transition-colors px-4 py-3.5" 
                  placeholder="Masukkan nama Anda" 
                  required
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-2 pl-1">Alamat Email</label>
                <input 
                  type="email" 
                  className="w-full bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-xl focus:ring-[#D1A71D] focus:border-[#D1A71D] outline-none focus:bg-white transition-colors px-4 py-3.5" 
                  placeholder="emailanda@contoh.com" 
                  required
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-2 pl-1">Kritik & Saran</label>
                <textarea 
                  rows="4" 
                  className="w-full bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-xl focus:ring-[#D1A71D] focus:border-[#D1A71D] outline-none focus:bg-white transition-colors px-4 py-3.5 resize-none" 
                  placeholder="Tuliskan pesan atau saran Anda untuk BGS..."
                  required
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full bg-[#111111] hover:bg-[#D1A71D] text-white font-bold text-sm px-6 py-4 rounded-xl transition-all duration-300 shadow-md hover:shadow-xl flex justify-center items-center gap-2 group/btn"
              >
                Kirim Pesan
                <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  )
}
