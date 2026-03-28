'use client'

import { useRef, useState, useEffect } from 'react'

export default function TiltedCard({ children, rotateAmplitude = 10, scaleOnHover = 1.05 }) {
  const ref = useRef(null)
  const [rotation, setRotation] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  // Disable tilt on mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.matchMedia('(max-width: 768px)').matches)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const handleMouseMove = (e) => {
    if (isMobile || !ref.current) return

    const rect = ref.current.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const centerX = rect.left + width / 2
    const centerY = rect.top + height / 2

    const mouseX = e.clientX
    const mouseY = e.clientY

    // Calculate rotation between -1 and 1
    const rotateX = ((mouseY - centerY) / (height / 2)) * -rotateAmplitude
    const rotateY = ((mouseX - centerX) / (width / 2)) * rotateAmplitude

    setRotation({ x: rotateX, y: rotateY })
  }

  const handleMouseEnter = () => {
    if (!isMobile) setIsHovered(true)
  }

  const handleMouseLeave = () => {
    if (!isMobile) {
      setIsHovered(false)
      setRotation({ x: 0, y: 0 })
    }
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: 'preserve-3d',
        perspective: '1000px'
      }}
      className="w-full h-full"
    >
      <div
        style={{
          transform: isHovered 
            ? `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) scale3d(${scaleOnHover}, ${scaleOnHover}, ${scaleOnHover})`
            : 'rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
          transition: isHovered ? 'transform 0.1s ease-out' : 'transform 0.6s cubic-bezier(0.23, 1, 0.32, 1)',
          transformStyle: 'preserve-3d',
        }}
        className="w-full h-full will-change-transform"
      >
        {children}
      </div>
    </div>
  )
}
