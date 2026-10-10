'use client'

const features = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    title: '100% OPEN SOURCE',
    desc: 'Every line of code is visible. MIT licensed. Fork it, audit it, build it yourself.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'NO ADS · NO TRACKERS',
    desc: 'Zero telemetry. Zero analytics. Your watching habits belong to you alone.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
      </svg>
    ),
    title: 'DATA SOVEREIGNTY',
    desc: 'Local-first architecture. Your library, progress, and settings never leave your device unless you choose to sync.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
      </svg>
    ),
    title: 'ANILIST · MAL · SIMKL SYNC',
    desc: 'Native integration with all major tracking platforms. Bidirectional sync with conflict resolution.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
      </svg>
    ),
    title: 'OFFLINE FIRST',
    desc: 'Download episodes for offline viewing. MKV remuxing with embedded subtitles. Background downloads with notifications.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
      </svg>
    ),
    title: 'EXTENSION RUNTIME',
    desc: 'Real QuickJS engine running Mangayomi/Aniyomi extensions. Per-extension isolated runtimes. 9 built-in providers.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'HARDWARE ACCELERATED',
    desc: 'Flutter 3.24 + Impeller. 60fps UI on all platforms. HDR playback support with better_player + fvp.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
    title: 'DEEP CUSTOMIZATION',
    desc: 'Custom accent colors, fonts, card radius, grid density, home sections, startup tab. 50+ settings.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: 'DISCORD RICH PRESENCE',
    desc: 'Show what you\'re watching on Discord. Episode progress, cover art, and deep links to open in AniFox.',
  },
]

export default function Features() {
  return (
    <section id="features" className="relative py-24 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="font-mono text-anifox-500 text-sm mb-4 tracking-widest uppercase">[ FEATURES ]</p>
          <h2 className="font-mono text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">MODULE</span>
            <span className="text-anifox-500">_SPEC</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Built for the culture. Every feature exists because a fan needed it.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group relative p-6 bg-dark-card border border-dark-border rounded-xl transition-all duration-300 hover:border-anifox-500/50 hover:shadow-[0_0_40px_rgba(249,115,22,0.1)] card-glow"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-anifox-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl pointer-events-none" />
              <div className="relative z-10">
                <div className="w-12 h-12 bg-anifox-500/10 border border-anifox-500/20 rounded-lg flex items-center justify-center mb-4 text-anifox-500 group-hover:bg-anifox-500 group-hover:text-black transition-all duration-300">
                  {feature.icon}
                </div>
                <h3 className="font-mono text-lg font-bold mb-2 text-white">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed text-sm">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}