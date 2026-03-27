'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  // Handle scroll to transform navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '#about', label: 'Tentang BGS' },
    { href: '#activities', label: 'Kegiatan' },
    { href: '#gallery', label: 'Galeri' },
    // { href: '#stats', label: 'Kampus' },
  ]

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'px-4 top-4' : 'px-0 top-0'}`}>
      <div className={`mx-auto transition-all duration-500 ${
        isScrolled 
          ? 'max-w-5xl bg-white/70 backdrop-blur-md shadow-lg border border-gray-200/50 rounded-full px-6 py-3' 
          : 'max-w-7xl px-4 sm:px-6 lg:px-8 py-5 bg-transparent'
      }`}>
        <div className="flex justify-between items-center">
          {/* Brand */}
          <Link href="/" className="flex items-center gap-3 group">
            <Image 
              src="/images/bgs-logo.png" 
              alt="BGS Sidoarjo Logo" 
              width={36} 
              height={36} 
              className="object-contain"
            />
            <span className="text-xl font-extrabold text-[#1C1C1C] tracking-tight">
              BGS Sidoarjo
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm font-bold text-[#1C1C1C] hover:text-[#D1A71D] transition-colors"
                onClick={(e) => {
                  e.preventDefault()
                  document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center">
            <a
              href="#join"
              className="bg-[#D1A71D] hover:bg-[#A68212] text-white text-sm font-semibold px-7 py-2.5 rounded-full transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5"
            >
              Join
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-[#1C1C1C] hover:bg-black/5 focus:outline-none transition-colors"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden absolute w-full left-0 mt-2 transition-all duration-300 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        <div className="bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-lg px-4 pt-2 pb-6 flex flex-col space-y-2 rounded-b-3xl">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="block px-3 py-2 rounded-md font-bold text-[#1C1C1C] hover:text-[#D1A71D] hover:bg-gray-50"
              onClick={(e) => {
                e.preventDefault()
                setIsOpen(false)
                document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="#join"
            className="block px-3 py-3 mt-4 text-center rounded-xl font-semibold text-white bg-[#D1A71D]"
            onClick={() => setIsOpen(false)}
          >
            Join Komunitas
          </a>
        </div>
      </div>
    </nav>
  )
}
