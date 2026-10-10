'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Hero() {
  const [typedText, setTypedText] = useState('')
  const fullText = 'ANIFOX v2.0.0 // ECLIPSE'
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    let i = 0
    const typeInterval = setInterval(() => {
      if (i < fullText.length) {
        setTypedText(fullText.slice(0, i + 1))
        i++
      } else {
        clearInterval(typeInterval)
        setShowCursor(false)
      }
    }, 80)

    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev)
    }, 500)

    return () => {
      clearInterval(typeInterval)
      clearInterval(cursorInterval)
    }
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 pt-20 pb-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-anifox-900/20 via-transparent to-transparent pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-anifox-500/10 rounded-full blur-3xl animate-float pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-anifox-500/10 rounded-full blur-3xl animate-float pointer-events-none" style={{ animationDelay: '3s' }} />

      <div className="relative z-10 max-w-6xl w-full text-center">
        <div className="mb-8 flex items-center justify-center gap-3">
          <div className="flex items-center gap-2 px-4 py-1.5 bg-dark-card border border-dark-border rounded-full">
            <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
            <span className="text-xs font-mono text-gray-400">LIVE</span>
          </div>
          <div className="px-4 py-1.5 bg-dark-card border border-dark-border rounded-full">
            <span className="text-xs font-mono text-anifox-500">v2.0.0 Eclipse</span>
          </div>
        </div>

        <h1 className="font-mono text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 leading-[1.1]">
          <span className="text-white">ANIFOX</span>
          <span className="text-anifox-500">.</span>
        </h1>

        <p className="font-mono text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
          Minimalist Anime Client — No Ads · No Trackers · Pure Data Sovereignty
        </p>

        <div className="mb-12 flex items-center justify-center gap-4 flex-wrap">
          <Link
            href="#download"
            className="group px-8 py-4 bg-anifox-600 hover:bg-anifox-500 text-black font-semibold rounded-lg transition-all duration-200 flex items-center gap-2 border-2 border-anifox-600 hover:border-anifox-400 shadow-lg shadow-anifox-600/20"
          >
            <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Download v2.0.0
          </Link>
          <Link
            href="https://github.com/ItzFallenMe/AniFox"
            target="_blank"
            rel="noopener noreferrer"
            className="group px-8 py-4 bg-transparent hover:bg-dark-card text-white font-semibold rounded-lg transition-all duration-200 flex items-center gap-2 border-2 border-dark-border hover:border-anifox-500"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.305-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
            </svg>
            View Source
          </Link>
        </div>

        <div className="flex items-center justify-center gap-8 md:gap-16 text-sm text-gray-500 font-mono">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-anifox-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Open Source</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-anifox-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Zero Telemetry</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-anifox-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Cross Platform</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-anifox-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Extension Runtime</span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}