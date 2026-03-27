import Image from 'next/image'

export default function About() {
  return (
    <section id="about" className="py-24 bg-[#F8F9FA] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-12 items-center">
          
          {/* Left Image Stack */}
          <div className="relative mx-auto lg:mx-0 max-w-md w-full">
            <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-2xl">
              <Image 
                src="https://images.unsplash.com/photo-1520607162513-77708c0f0e4c?auto=format&fit=crop&q=80&w=800&h=800"
                alt="Tentang BGS Sidoarjo"
                fill
                className="object-cover"
                unoptimized
              />
              <div className="absolute inset-0 bg-black/20 mix-blend-multiply"></div>
            </div>
            {/* Absolute Badge overlapping top right */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-[#D1A71D] rounded-full flex items-center justify-center text-white font-bold text-sm rotate-[15deg] shadow-lg border-4 border-[#F8F9FA]">
              Est. 2020
            </div>
          </div>

          {/* Right Content */}
          <div className="max-w-xl">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 tracking-tight">
              Tentang <span className="text-[#D1A71D]">BGS Sidoarjo</span>
            </h2>
            
            <div className="space-y-4 text-gray-500 leading-relaxed text-[15px]">
               <p>
                 Barisan Generasi Sepur (BGS) Sidoarjo bukanlah komunitas "train spotting" biasa. Kami adalah penggerak edukasi rel kereta api yang percaya bahwa keselamatan adalah hak setiap warga.
               </p>
               <p>
                 Berawal dari kebiasaan berkumpul di stasiun terdekat, kami bertransformasi menjadi mitra strategis dalam memberikan edukasi kepada masyarakat umum mengenai bahaya di perlintasan rel kereta dan etika bertransportasi umum.
               </p>
            </div>

            <div className="mt-10 pt-8 border-t border-gray-200 relative">
               <div className="absolute -top-3.5 left-0 right-0 flex justify-center">
                 <span className="bg-[#F8F9FA] px-4 text-xs font-bold tracking-widest text-[#A68212]">VISI KAMI</span>
               </div>
               
               <p className="text-center font-serif italic text-lg text-gray-800 leading-relaxed mt-4">
                 "Menyatukan pemuda railfans untuk berkontribusi, bersilaturahmi, dan mengabdi bagi masyarakat dan negara."
               </p>
            </div>
            
          </div>

        </div>
      </div>
    </section>
  )
}
