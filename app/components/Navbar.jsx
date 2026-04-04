'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

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

  const pathname = usePathname()

  const navLinks = [
    { href: '/#about', label: 'Tentang BGS' },
    { href: '/#activities', label: 'Kegiatan' },
    { href: '/#gallery', label: 'Galeri' },
    { href: '/#contact', label: 'Kontak' },
  ]

  const T = 'all 600ms cubic-bezier(0.4, 0, 0.2, 1)'

  return (
    <nav
      className="fixed w-full z-50"
      style={{ paddingLeft: isScrolled ? '16px' : '0', paddingRight: isScrolled ? '16px' : '0', top: isScrolled ? '12px' : '0', transition: T }}
    >
      <div
        className="mx-auto"
        style={{
          maxWidth: isScrolled ? '960px' : '100%',
          background: isScrolled ? 'rgba(255,255,255,0.75)' : '#1C1C1C',
          backdropFilter: isScrolled ? 'blur(14px)' : 'none',
          WebkitBackdropFilter: isScrolled ? 'blur(14px)' : 'none',
          borderRadius: isScrolled ? '9999px' : '0',
          padding: isScrolled ? '10px 24px' : '18px 32px',
          boxShadow: isScrolled ? '0 4px 30px rgba(0,0,0,0.08)' : 'none',
          border: isScrolled ? '1px solid rgba(229,231,235,0.4)' : '1px solid transparent',
          transition: T,
        }}
      >
        <div className="flex justify-between items-center">
          {/* Brand — scrolls to top on homepage */}
          <Link
            href="/"
            className="flex items-center gap-3 group"
            onClick={(e) => {
              if (pathname === '/') {
                e.preventDefault()
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }
            }}
          >
            <Image
              src="/images/bgs-logo.png"
              alt="BGS Sidoarjo Logo"
              width={36}
              height={36}
              className="object-contain"
            />
            <span style={{ color: isScrolled ? '#1C1C1C' : '#ffffff', transition: T }} className="text-xl font-extrabold tracking-tight">
              BGS Sidoarjo
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm font-bold hover:text-[#D1A71D]"
                style={{ color: isScrolled ? '#1C1C1C' : '#ffffff', transition: T }}
                onClick={(e) => {
                  if (pathname === '/') {
                    e.preventDefault()
                    const targetId = link.href.replace('/#', '#')
                    document.querySelector(targetId)?.scrollIntoView({ behavior: 'smooth' })
                  }
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center">
            <Link
              href="/#contact"
              onClick={(e) => {
                if (pathname === '/') {
                  e.preventDefault()
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
                }
              }}
              className="bg-[#D1A71D] hover:bg-[#A68212] text-white text-sm font-semibold px-7 py-2.5 rounded-full transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5"
            >
              Kontak
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? 'Tutup menu navigasi' : 'Buka menu navigasi'}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              className="p-2 rounded-md hover:bg-white/10 focus:outline-none"
              style={{ color: isScrolled ? '#1C1C1C' : '#ffffff', transition: T }}
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
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
      <div 
        id="mobile-menu"
        className={`md:hidden absolute left-0 right-0 mt-2 transition-all duration-300 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
        style={{ marginLeft: isScrolled ? '-16px' : '0', marginRight: isScrolled ? '-16px' : '0' }}
      >
        <div className="bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-lg px-4 pt-2 pb-6 flex flex-col space-y-2 rounded-b-3xl">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="block px-3 py-2 rounded-md font-bold text-[#1C1C1C] hover:text-[#D1A71D] hover:bg-gray-50"
              onClick={(e) => {
                if (pathname === '/') {
                  e.preventDefault()
                  const targetId = link.href.replace('/#', '#')
                  document.querySelector(targetId)?.scrollIntoView({ behavior: 'smooth' })
                }
                setIsOpen(false)
              }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/#contact"
            className="block px-3 py-3 mt-4 text-center rounded-xl font-semibold text-white bg-[#D1A71D]"
            onClick={(e) => {
              if (pathname === '/') {
                e.preventDefault()
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
              }
              setIsOpen(false)
            }}
          >
            Kontak Kami
          </Link>
        </div>
      </div>
    </nav>
  )
}
