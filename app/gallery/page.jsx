'use client'

import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Image from 'next/image'
import LazyRender from '../components/LazyRender'
import { MasonrySkeleton } from '../components/Skeleton'

const galleryData = [
  {
    category: "Posko Stasiun",
    description: "Turut berpartisipasi menjaga kelancaran alur penumpang saat libur dan hari raya besar nasional.",
    images: [
      "/images/posko/posko-1.webp",
      "/images/posko/posko-2.webp",
      "/images/posko/posko-3.webp"
    ]
  },
  {
    category: "Fotografi",
    description: "Mengamati dan mengabadikan momen kereta api secara langsung sekaligus memperdalam wawasan perkeretaapian.",
    images: [
      "/images/fotografi/fotografi-1.webp",
      "/images/fotografi/fotografi-2.webp",
    ]
  },
  {
    category: "Sosialisasi & Edukasi",
    description: "Menggelar sosialisasi turun tangan di area perlintasan untuk meningkatkan kepedulian masyarakat.",
    images: [
      "/images/sosperka/sosperka-1.webp",
      "/images/sosperka/sosperka-2.webp",
      "/images/sosperka/sosperka-3.webp",
      "/images/sosperka/sosperka-4.webp",
      "/images/sosperka/sosperka-5.webp"
    ]
  },
  {
    category: "Dokumentasi Lainya",
    description: "Kumpulan berbagai kegiatan dan pengabdian Barisan Generasi Sepur Sidoarjo lainnya.",
    images: [
      "/images/dokumentasi-lain/dokumentasi-1.webp",
      "/images/dokumentasi-lain/dokumentasi-2.webp",
      "/images/dokumentasi-lain/dokumentasi-3.webp",
      "/images/dokumentasi-lain/dokumentasi-4.webp"
    ]
  }
]

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState(null)

  return (
    <main className="bg-[#F8F9FA] min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-grow pt-32 w-full">
        {/* Header section */}
        <section className="relative overflow-hidden mb-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center mt-8">
            <h1 className="text-5xl md:text-6xl font-extrabold text-[#111111] tracking-tight mb-6">
              Galeri <span className="text-[#D1A71D]">Komunitas</span>
            </h1>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
              Menelusuri jejak langkah nyata edukasi, kontribusi, dan persaudaraan Barisan Generasi Sepur Sidoarjo dari waktu ke waktu.
            </p>
          </div>
        </section>

        {/* Categories rendering */}
        <div className="w-full">
          {galleryData.map((section, index) => {
            const isCharcoal = index % 2 === 0;

            return (
              <section key={index} className={`relative group py-24 overflow-hidden ${isCharcoal ? 'bg-[#1C1C1C]' : 'bg-[#F8F9FA]'}`}>
                {/* Interactive Grid Overlay for Charcoal sections */}
                {isCharcoal && (
                  <div 
                    className="absolute inset-0 pointer-events-none opacity-20 md:opacity-0 md:group-hover:opacity-30 transition-opacity duration-700 z-0" 
                    style={{ 
                      backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)', 
                      backgroundSize: '4rem 4rem', 
                      backgroundPosition: 'center center' 
                    }}
                  ></div>
                )}
                
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                  <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12 border-b border-gray-200/10 pb-6">
                    <div>
                      <h2 className={`text-3xl font-extrabold tracking-tight ${isCharcoal ? 'text-white' : 'text-[#111111]'}`}>
                        {section.category}
                      </h2>
                      <p className={`mt-2 text-sm ${isCharcoal ? 'text-gray-400' : 'text-gray-500'}`}>
                        {section.description}
                      </p>
                    </div>
                    <div className="w-16 h-1 bg-[#D1A71D] rounded-full hidden md:block mb-2"></div>
                  </div>
                  
                  {/* Lazy Loaded Masonry Grid */}
                  <LazyRender 
                    threshold={0.05} 
                    fallback={
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-pulse">
                        {[1,2,3,4,5,6].map(i => (
                          <div key={i} className={`aspect-square rounded-3xl w-full ${isCharcoal ? 'bg-gray-800/50' : 'bg-gray-200/50'}`}></div>
                        ))}
                      </div>
                    }
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                      {section.images.map((src, i) => (
                        <div 
                          key={i} 
                          onClick={() => setSelectedImage(src)}
                          className={`relative aspect-square rounded-3xl overflow-hidden group shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgb(209,167,29,0.2)] transition-all duration-500 cursor-pointer border ${isCharcoal ? 'border-gray-800' : 'border-gray-100/50'}`}
                        >
                          <Image 
                            src={src}
                            alt={`${section.category} Image ${i + 1}`}
                            fill
                            loading="lazy"
                            className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                            unoptimized
                          />
                          {/* Hover Overlay */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none flex flex-col justify-end p-6">
                            <span className="text-white font-bold opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100">
                              {section.category}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </LazyRender>
                </div>
              </section>
            )
          })}
        </div>
      </div>

      <Footer />

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 sm:p-8 backdrop-blur-sm transition-opacity"
          onClick={() => setSelectedImage(null)}
        >
          {/* Close button */}
          <button 
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors bg-white/10 hover:bg-white/20 rounded-full p-2 z-[110]"
            onClick={(e) => {
              e.stopPropagation()
              setSelectedImage(null)
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          {/* Full Image */}
          <div className="relative w-full max-w-6xl h-full flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
            <Image 
              src={selectedImage}
              alt="Full size gallery image"
              fill
              className="object-contain"
              unoptimized
            />
          </div>
        </div>
      )}
    </main>
  )
}
