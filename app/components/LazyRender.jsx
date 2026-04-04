'use client'

import { useState, useEffect, useRef } from 'react'

export default function LazyRender({ children, fallback, threshold = 0.0, rootMargin = '500px', id }) {
  const [isRendered, setIsRendered] = useState(false)
  const ref = useRef()

  useEffect(() => {
    // If the browser doesn't support IntersectionObserver, render it immediately
    if (typeof window.IntersectionObserver === 'undefined') {
      setIsRendered(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsRendered(true)
          observer.disconnect()
        }
      },
      { rootMargin, threshold }
    )
    
    if (ref.current) {
      observer.observe(ref.current)
    }
    
    return () => {
      observer.disconnect()
    }
  }, [threshold, rootMargin])

  return (
    <div id={id} ref={ref} className="w-full relative transition-opacity duration-1000 ease-in-out">
      {isRendered ? (
        <div className="animate-fade-in">{children}</div>
      ) : (
        fallback
      )}
    </div>
  )
}
