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
                src="/images/bgs-rri.webp"
                alt="Anggota BGS Sidoarjo saat kegiatan bersama RRI"
                fill
                loading="lazy"
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
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
                 Barisan Generasi Sepur (BGS) Sidoarjo merupakan komunitas sosial penggemar kereta api yang berasal dari Kabupaten Sidoarjo, wilayah Daerah Operasi 8 Surabaya. BGS hadir sebagai wadah bagi para pemuda yang memiliki minat di dunia perkeretaapian sekaligus menjadi ruang untuk menjalin silaturahmi antar sesama railfans, baik di dalam maupun luar Sidoarjo.
              </p>
               <p>
                Berawal dari kebiasaan berkumpul di sekitar stasiun, BGS berkembang menjadi komunitas yang aktif dalam kegiatan edukasi, sosial, dan kolaborasi. Kami berkomitmen untuk berkontribusi secara positif melalui edukasi perkeretaapian, kegiatan sosial, serta kepedulian terhadap keselamatan dan lingkungan sekitar rel.
              </p>
              <p>
                BGS juga membuka ruang bagi generasi muda untuk berkembang sebagai relawan yang aktif, peduli, dan berdampak, baik dalam dunia perkeretaapian maupun di tengah masyarakat luas.
              </p>
            </div>

            <div className="mt-10 pt-8 border-t border-gray-200 relative">
               <div className="absolute -top-3.5 left-0 right-0 flex justify-center">
                 <span className="bg-[#F8F9FA] px-4 text-xs font-bold tracking-widest text-[#A68212]">MOTTO KAMI</span>
               </div>
               
               <p className="text-center font-serif italic text-lg text-gray-800 leading-relaxed mt-4">
                 "Menebar Manfaat dan Menjalin Silaturahim Sesama"
               </p>
            </div>
            
          </div>

        </div>
      </div>
    </section>
  )
}
