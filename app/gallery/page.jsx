'use client'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Image from 'next/image'

const galleryData = [
  {
    category: "Posko Stasiun",
    description: "Turut berpartisipasi menjaga kelancaran alur penumpang saat libur dan hari raya besar nasional.",
    images: [
      "https://images.unsplash.com/photo-1474959783111-a5f50f22ff3a?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1541427468627-a365191ec591?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1563207153-f404bef584cc?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?auto=format&fit=crop&q=80&w=1000"
    ]
  },
  {
    category: "Train Spotting",
    description: "Mengabadikan setiap momen ikonik lokomotif dan momen bersejarah rel kereta api.",
    images: [
      "https://images.unsplash.com/photo-1552554625-728b9cc67a91?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1533269389785-5b432aeda551?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1520607162513-77708c0f0e4c?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1507208169223-bd79eb94c502?auto=format&fit=crop&q=80&w=800"
    ]
  },
  {
    category: "Sosialisasi & Edukasi",
    description: "Menggelar sosialisasi turun tangan di area perlintasan untuk meningkatkan kepedulian masyarakat.",
    images: [
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=800"
    ]
  }
]

export default function GalleryPage() {
  return (
    <main className="bg-[#F8F9FA] min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-grow pt-32 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Header section */}
        <div className="text-center mb-20 mt-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#FBEFA3] mb-6 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D1A71D]"></span>
            <span className="text-xs font-bold text-[#A68212] tracking-wider uppercase">DOKUMENTASI KAMI</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold text-[#111111] tracking-tight mb-6">
            Galeri <span className="text-[#D1A71D]">Komunitas</span>
          </h1>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
            Menelusuri jejak langkah nyata edukasi, kontribusi, dan persaudaraan Barisan Generasi Sepur Sidoarjo dari waktu ke waktu.
          </p>
        </div>

        {/* Categories rendering */}
        <div className="space-y-28">
          {galleryData.map((section, index) => (
            <div key={index} className="space-y-10 border-t border-gray-200 pt-16 first:border-0 first:pt-0">
              
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div>
                  <h2 className="text-3xl font-extrabold text-[#111111] tracking-tight">{section.category}</h2>
                  <p className="text-gray-500 mt-2 text-sm">{section.description}</p>
                </div>
                <div className="w-16 h-1 bg-[#D1A71D] rounded-full hidden md:block mb-2"></div>
              </div>
              
              {/* Masonry Layout */}
              <div className="columns-1 sm:columns-2 lg:columns-3 gap-6">
                {section.images.map((src, i) => (
                  <div 
                    key={i} 
                    className="mb-6 break-inside-avoid relative rounded-3xl overflow-hidden group shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgb(209,167,29,0.2)] transition-all duration-500 cursor-pointer border border-gray-100/50"
                  >
                    <Image 
                      src={src}
                      alt={`${section.category} Image ${i + 1}`}
                      width={800}
                      height={1000}
                      className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      unoptimized
                    />
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 element-animation pointer-events-none flex flex-col justify-end p-6">
                      <span className="text-white font-bold opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100">
                        {section.category}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>
      </div>

      <Footer />
    </main>
  )
}
