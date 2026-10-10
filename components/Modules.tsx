'use client'

const modules = [
  {
    id: 'omni-sync',
    title: 'OMNI_SYNC',
    subtitle: 'Your Data. Your Rules.',
    desc: 'Native bidirectional sync with AniList, MyAnimeList, and Simkl. OAuth2 authentication with secure token storage via flutter_secure_storage. Conflict resolution with last-write-wins and manual merge options. Background sync with configurable intervals. Offline queue with automatic replay on reconnect.',
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&h=450&fit=crop',
    features: ['AniList GraphQL API', 'MyAnimeList REST v2', 'Simkl OAuth2', 'Conflict Resolution', 'Background Sync', 'Offline Queue'],
    stats: { platforms: 3, endpoints: 47, uptime: '99.9%' },
  },
  {
    id: 'reader-player',
    title: 'READER_PLAYER',
    subtitle: 'Zero Latency. Pure Flow.',
    desc: 'Custom video player built on better_player + fvp with hardware decoding. HDR10/HLG support on capable devices. Picture-in-Picture on Android, Windows, Linux, macOS. Gesture controls: swipe for seek, volume, brightness. Sleep timer with persistent notification. OP/ED auto-skip via AniSkip integration. Screenshot capture to Pictures/AniFox. Orientation lock per-session.',
    image: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?w=800&h=450&fit=crop',
    features: ['HDR Playback', 'PiP Mode', 'Gesture Controls', 'Sleep Timer', 'OP/ED Skip', 'Screenshots', 'Orientation Lock'],
    stats: { codecs: 12, latency: '<50ms', formats: 'MKV/MP4/WebM' },
  },
  {
    id: 'offline-first',
    title: 'OFFLINE_FIRST',
    subtitle: 'Take It Anywhere.',
    desc: 'Multi-threaded downloader with resume support. Configurable retry logic with exponential backoff. MKV remuxing with embedded subtitles (ASS/SRT). Progress notifications with cover art. Cancel all downloads. Storage management with auto-cleanup. Episode batch download with quality selection.',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=450&fit=crop',
    features: ['Multi-threaded', 'MKV Remux', 'Subtitle Embed', 'Progress Notif', 'Batch Download', 'Auto Cleanup'],
    stats: { threads: 4, retry: 3, formats: 'MKV/MP4' },
  },
  {
    id: 'extension-runtime',
    title: 'EXTENSION_RUNTIME',
    subtitle: 'Limitless Sources.',
    desc: 'Real QuickJS (flutter_qjs) engine running Mangayomi/Aniyomi JavaScript extensions. Per-extension isolated runtimes with LRU-4 cache. HTTP/DOM/Preferences/unpack_js bridges. 9 built-in providers + unlimited community extensions. Source validation on install. Auto-update checks from repo indexes. Default anime repo: m2k3a/mangayomi-extensions.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=450&fit=crop',
    features: ['QuickJS Engine', 'Isolated Runtimes', 'Mangayomi Bridge', 'Source Validation', 'Auto Updates', '9 Built-in'],
    stats: { providers: 9, runtime: 'QuickJS', bridge: 'Complete' },
  },
  {
    id: 'performance',
    title: 'PERFORMANCE',
    subtitle: 'Native & Fast.',
    desc: 'Flutter 3.24 with Impeller rendering engine. 60fps UI on all platforms. AOT compilation on mobile/desktop. JIT for development. Tree-shaking + R8 optimization. Memory-efficient image caching with cached_network_image. Lazy-loaded routes. Isolate-based background work. Zero bloat, pure content focus.',
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=450&fit=crop',
    features: ['Impeller Engine', '60fps UI', 'AOT Compiled', 'R8 Optimized', 'Isolate Workers', 'Lazy Routes'],
    stats: { fps: 60, size: '<50MB', startup: '<2s' },
  },
  {
    id: 'customization',
    title: 'CUSTOMIZATION',
    subtitle: 'Make It Yours.',
    desc: 'Material 3 dynamic theming with custom accent color picker (full spectrum). Font selection: Inter, JetBrains Mono, Noto Sans, system. Card radius: 0-24px. Grid columns: 2-6 per row. Home sections toggle (Continue Watching, Popular, Seasonal, Genres). Startup tab selection. Player: autoplay next, remember position, preferred audio. Haptic feedback. NSFW filter. Filler badges.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=450&fit=crop',
    features: ['Custom Accent', 'Font Selection', 'Card Radius', 'Grid Density', 'Home Sections', 'Player Prefs', 'Haptics'],
    stats: { settings: '50+', themes: '∞', fonts: 4 },
  },
]

export default function Modules() {
  return (
    <section id="modules" className="relative py-24 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="font-mono text-anifox-500 text-sm mb-4 tracking-widest uppercase">[ WHY_IT_EXISTS ]</p>
          <h2 className="font-mono text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">MODULE</span>
            <span className="text-anifox-500">_BREAKDOWN</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Started as a personal project. Now an open-source alternative to cluttered anime sites.
          </p>
        </div>

        <div className="space-y-24">
          {modules.map((module, index) => (
            <div
              key={module.id}
              className={`relative flex flex-col md:flex-row gap-12 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
            >
              <div className="relative w-full md:w-1/2">
                <div className="aspect-video bg-dark-card border border-dark-border rounded-xl overflow-hidden relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-anifox-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <img
                    src={module.image}
                    alt={module.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 z-10">
                    <div className="font-mono text-anifox-500 text-xs mb-2">{module.id.toUpperCase()}</div>
                    <h3 className="font-mono text-2xl md:text-3xl font-bold text-white mb-2">{module.title}</h3>
                    <p className="text-anifox-300 text-sm font-medium">{module.subtitle}</p>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-1/2">
                <p className="text-gray-300 leading-relaxed mb-6 text-base">{module.desc}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {module.features.map((feature) => (
                    <span
                      key={feature}
                      className="px-3 py-1 bg-dark-card border border-dark-border rounded-full text-xs font-mono text-gray-300 hover:border-anifox-500/50 transition-colors"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                <div className="grid grid-cols-3 gap-4 pt-4 border-t border-dark-border">
                  {Object.entries(module.stats).map(([key, value]) => (
                    <div key={key} className="text-center">
                      <div className="font-mono text-2xl font-bold text-anifox-500">{value}</div>
                      <div className="font-mono text-xs text-gray-500 uppercase">{key}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}