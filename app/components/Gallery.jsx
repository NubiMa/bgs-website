import Image from 'next/image'

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-[#F8F9FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
            Jejak <span className="text-[#D1A71D]">Langkah Kami</span>
          </h2>
        </div>

        {/* Bento Box Layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 md:gap-6 h-auto md:h-[600px]">
          
          {/* Bento Item 1: Large Left (Spans 2 cols, 2 rows) */}
          <div className="md:col-span-2 md:row-span-2 relative rounded-3xl overflow-hidden group shadow-md h-[400px] md:h-full">
            <Image 
              src="/images/posko/posko-3.webp" 
              alt="Posko Stasiun" 
              fill
              loading="lazy"
              className="object-cover group-hover:scale-105 transition-transform duration-700" 
              unoptimized
            />
            {/* Hover Content */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
              <h3 className="text-white font-bold text-2xl mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">Posko Stasiun</h3>
              <p className="text-gray-200 text-sm translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">Membantu penumpang di masa libur Lebaran dan Tahun baru.</p>
            </div>
          </div>

          {/* Bento Item 2: Top Right Wide (Spans 2 cols, 1 row) */}
          <div className="md:col-span-2 md:row-span-1 relative rounded-3xl overflow-hidden group shadow-md h-[250px] md:h-full">
            <Image 
              src="/images/sosperka/sosperka-1.webp" 
              alt="Sosialisasi & Edukasi" 
              fill
              loading="lazy"
              className="object-cover group-hover:scale-105 transition-transform duration-700" 
              unoptimized
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
              <h3 className="text-white font-bold text-xl mb-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">Sosialisasi & Edukasi</h3>
              <p className="text-gray-200 text-sm translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">Menggelar sosialisasi turun tangan di area perlintasan untuk meningkatkan kepedulian masyarakat.</p>
            </div>
          </div>

          {/* Bento Item 3: Bottom Center (Spans 1 col, 1 row) */}
          <div className="md:col-span-1 md:row-span-1 relative rounded-3xl overflow-hidden group shadow-md h-[250px] md:h-full">
            <Image 
              src="/images/dokumentasi-lain/dokumentasi-2.webp" 
              alt="Dokumentasi Lain" 
              fill
              loading="lazy"
              className="object-cover group-hover:scale-105 transition-transform duration-700" 
              unoptimized
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
              <h3 className="text-white font-bold text-lg mb-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">Dokumentasi Lainya</h3>
            </div>
          </div>

          {/* Bento Item 4: Bottom Right (Action Card - Spans 1 col, 1 row) */}
          <div className="md:col-span-1 md:row-span-1 rounded-3xl overflow-hidden shadow-md h-[250px] md:h-full bg-gray-50 border border-gray-100 flex flex-col items-center justify-center p-6 text-center group hover:bg-white transition-colors duration-300">
            <div className="w-12 h-12 rounded-full bg-[#D1A71D]/10 text-[#D1A71D] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-gray-900 font-bold text-lg mb-2">Foto Lengkap</h3>
            <p className="text-sm text-gray-500 mb-4">Eksplorasi dokumentasi lengkap komunitas</p>
            <a href="/gallery" className="text-[#D1A71D] text-sm font-semibold hover:text-[#A68212] transition-colors inline-flex items-center gap-1 group-hover:gap-2">
              Lihat Keseluruhan Galeri <span>&rarr;</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}
