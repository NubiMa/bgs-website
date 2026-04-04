import Image from 'next/image'
import TiltedCard from './TiltedCard'

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 bg-[#F8F9FA] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Content */}
          <div className="max-w-xl">

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
                href="#contact"
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
            <TiltedCard rotateAmplitude={3} scaleOnHover={1.02}>
              <div className="relative h-[500px] w-full lg:h-[600px] rounded-[2rem] overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] origin-bottom-right transition-all duration-700 pointer-events-none">
                {/* Fallback pattern if image is missing, but using a high quality photo to match mockup */}
                <Image 
                  src="/images/bgs-profile.webp"
                  alt="Anggota BGS Sidoarjo berfoto di area stasiun kereta api"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </TiltedCard>
          </div>

        </div>
      </div>
    </section>
  )
}
