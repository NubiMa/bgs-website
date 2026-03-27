const activities = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    title: 'Relawan Posko Stasiun',
    description: 'Membantu pengaturan penumpang selama masa angkutan Lebaran dan Natal/Tahun Baru.',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
    ),
    title: 'Sosialisasi Perlintasan',
    description: 'Edukasi langsung ke pelintas rel kereta tentang bahaya melanggar aturan perlintasan.',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'Train Spotting',
    description: 'Merekam dan melestarikan sejarah perkeretaapian melalui lensa dan dokumentasi visual.',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
      </svg>
    ),
    title: 'Diskusi & Edukasi',
    description: 'Forum rutin membahas perkembangan teknologi dan meningkatkannya perkeretaapian.',
  },
]

export default function Activities() {
  return (
    <section id="activities" className="relative group py-24 bg-[#1C1C1C] overflow-hidden">
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
        {/* Header - Asymmetric Split */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-xl">
            <div className="text-xs font-bold tracking-widest text-red-500 uppercase mb-3">ACTION</div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight flex items-end">
              Kegiatan Rutin Kami
            </h2>
          </div>
          {/* <div className="max-w-xs md:text-right">
            <p className="text-sm text-gray-400 leading-relaxed border-l-2 md:border-l-0 md:border-r-2 border-[#D1A71D] pl-4 md:pl-0 md:pr-4 py-1">
              Bukan hanya hobi, rupa kontribusi nyata aksi nyata setiap hari secara ikhlas dan swadaya.
            </p>
          </div> */}
        </div>

        {/* Minimalist Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {activities.map((act, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-8 flex flex-col h-full shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_40px_rgb(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 border border-gray-100/50"
            >
              <div className="text-[#A68212] bg-[#FBEFA3] w-10 h-10 rounded flex items-center justify-center mb-6">
                {act.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3 leading-snug">{act.title}</h3>
              <p className="text-xs text-gray-500 leading-relaxed flex-grow">{act.description}</p>
              
              <div className="w-8 h-1 bg-[#D1A71D] mt-8 rounded-full"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
