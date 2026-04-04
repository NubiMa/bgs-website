export default function Footer() {
  return (
    <footer className="bg-[#F8F9FA] text-gray-500 py-10 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Left Side */}
        <div className="text-center md:text-left">
          <div className="text-[13px] font-extrabold text-gray-900 mb-1 tracking-tight">BGS Sidoarjo</div>
          <p className="text-[11px] leading-relaxed">
            © 2026 Barisan Generasi Sepur. Hak Cipta Dilindungi.<br/>
            Menjaga Tradisi, Membangun Negeri.
          </p>
        </div>

        {/* Right Side Links */}
        <div className="flex items-center gap-6 font-medium text-[11px] text-gray-600">
          <a href="https://www.instagram.com/bgs.sidoarjo/" target="_blank" rel="noopener noreferrer" aria-label="Instagram BGS Sidoarjo" className="hover:text-[#D1A71D] transition-colors">Instagram</a>
          <a href="https://www.facebook.com/bgs.sidoarjo" target="_blank" rel="noopener noreferrer" aria-label="Facebook BGS Sidoarjo" className="hover:text-[#D1A71D] transition-colors">Facebook</a>
          <a href="https://www.tiktok.com/@bgs.sidoarjo" target="_blank" rel="noopener noreferrer" aria-label="TikTok BGS Sidoarjo" className="hover:text-[#D1A71D] transition-colors">Tiktok</a>
          <a href="https://wa.me/6281559691087" target="_blank" rel="noopener noreferrer" aria-label="Hubungi BGS Sidoarjo via WhatsApp" className="hover:text-[#D1A71D] transition-colors">Hubungi Kami</a>
        </div>
      </div>
    </footer>
  )
}
