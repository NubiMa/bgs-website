export default function CTA() {
  return (
    <section id="join" className="relative group py-24 bg-[#1C1C1C] overflow-hidden">
      {/* Interactive Grid Overlay */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-20 md:opacity-0 md:group-hover:opacity-30 transition-opacity duration-700 z-0" 
        style={{ 
          backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)', 
          backgroundSize: '4rem 4rem', 
          backgroundPosition: 'center center' 
        }}
      ></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="bg-[#C59B1A] rounded-[2.5rem] p-12 md:p-20 text-center shadow-[0_20px_50px_rgb(197,155,26,0.3)] relative overflow-hidden group/card">
          
          {/* Subtle inner gradient to simulate the mockup's lighting */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#D8AB1D] to-[#A37F12] opacity-90 group-hover:opacity-100 transition-opacity duration-700"></div>

          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#111111] mb-6 leading-tight tracking-tight">
              Siap Menjadi Bagian <br className="hidden md:block"/> dari Perubahan?
            </h2>
            <p className="text-[#333333] text-[15px] font-medium mb-12 max-w-xl mx-auto leading-relaxed">
              Gabung bersama ratusan pemuda lainnya untuk menjaga tradisi perkeretaapian dan membangun kesadaran keselamatan transportasi.
            </p>

            {/* Buttons */}
            {/* <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://t.me/bgs_sidoarjo"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-white hover:bg-gray-50 text-gray-900 font-bold text-sm px-8 py-3.5 rounded-full shadow-sm transition-all duration-200 hover:shadow-md hover:-translate-y-0.5"
              >
                <svg className="w-5 h-5 shrink-0 text-[#229ED9]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L7.19 13.438l-2.967-.924c-.645-.203-.657-.645.136-.953l11.57-4.461c.537-.194 1.006.131.836.952l-.831-.831z"/>
                </svg>
                Telegram Group
              </a>
              <a
                href="https://discord.gg/bgs-sidoarjo"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-white hover:bg-gray-50 text-gray-900 font-bold text-sm px-8 py-3.5 rounded-full shadow-sm transition-all duration-200 hover:shadow-md hover:-translate-y-0.5"
              >
                <svg className="w-5 h-5 shrink-0 text-[#5865F2]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057.1 18.08.114 18.103.133 18.118a19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z"/>
                </svg>
                Discord Server
              </a>
            {/* Desktop CTA */}
            <div className="flex justify-center mt-6">
              <a
                href="#join"
                className="bg-white text-[#D1A71D] hover:bg-[#D1A71D] hover:text-white text-base font-bold px-10 py-4 rounded-full transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-1"
              >
                Join
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
