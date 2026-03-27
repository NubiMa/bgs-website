import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 bg-[#F8F9FA] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Content */}
          <div className="max-w-xl">
            {/* Badge */}
            {/* <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-100 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-red-600"></span>
              <span className="text-xs font-bold text-red-600 tracking-wider">DIAKUI OLEH PT KAI</span>
            </div> */}

            {/* Title */}
            <h1 className="text-6xl md:text-7xl font-extrabold text-[#111111] leading-[1.1] mb-6 tracking-tight">
              BGS <br />
              <span className="italic text-[#D1A71D] font-serif">Sidoarjo</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg text-gray-500 font-medium leading-relaxed max-w-md mb-10">
              Komunitas pecinta kereta api yang berdedikasi untuk edukasi keselamatan dan perkeretaapian di wilayah Sidoarjo. 
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#join"
                className="inline-flex justify-center items-center bg-[#D1A71D] hover:bg-[#A68212] text-white font-semibold text-sm px-8 py-3.5 rounded-xl transition-colors duration-200"
              >
                Join Komunitas
              </a>
              <a
                href="#gallery"
                className="inline-flex justify-center items-center bg-transparent border border-gray-300 hover:border-gray-400 text-gray-700 font-semibold text-sm px-8 py-3.5 rounded-xl transition-colors duration-200"
              >
                Lihat Galeri
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative h-[500px] w-full lg:h-[600px] rounded-[2rem] overflow-hidden shadow-2xl origin-bottom-right rotate-[-2deg] hover:rotate-0 transition-transform duration-500">
              {/* Fallback pattern if image is missing, but using a high quality photo to match mockup */}
              <Image 
                src="https://images.unsplash.com/photo-1474959783111-a5f50f22ff3a?auto=format&fit=crop&q=80&w=800&h=1200"
                alt="Stasiun Sidoarjo"
                fill
                className="object-cover"
                unoptimized
              />
            </div>
            
            {/* Floating Stats Box */}
            {/* <div className="absolute -bottom-8 -left-8 bg-white p-5 rounded-2xl shadow-xl flex items-center gap-4 animate-fade-in-up delay-500">
              <div>
                <div className="text-xs text-red-500 font-bold uppercase tracking-wider mb-1">Target</div>
                <div className="text-2xl font-black text-gray-900 leading-none">500+</div>
                <div className="text-xs text-gray-500 mt-1">Relawan Aktif<br/>Bergabung</div>
              </div>
            </div> */}
          </div>

        </div>
      </div>
    </section>
  )
}
