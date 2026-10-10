'use client'

const architectureItems = [
  { name: 'core_engine', size: '2.4MB', desc: 'Provider abstraction layer + Hive storage + QuickJS runtime pool', icon: '⚙️' },
  { name: 'provider_layer', size: '1.8MB', desc: '9 hardened providers: AnimePahe, Gogoanime, AllAnime, AnimeKai, AniZone, Animegg, AnimeOnsen, AnimeParadise, Anikoto', icon: '🌐' },
  { name: 'extension_bridge', size: '1.2MB', desc: 'flutter_qjs Mangayomi/Aniyomi bridge — HTTP, DOM, Prefs, unpack_js bridges', icon: '🔌' },
  { name: 'player_stack', size: '3.1MB', desc: 'better_player + fvp | HDR | PiP | Sleep timer | Screenshot | OP/ED skip | Gesture controls', icon: '▶️' },
  { name: 'downloader', size: '890KB', desc: 'Multi-threaded | Retry logic | MKV remux | Subtitle embed | Progress notifications', icon: '⬇️' },
  { name: 'sync_layer', size: '650KB', desc: 'AniList GraphQL | MAL REST | Simkl OAuth | Bidirectional | Conflict resolution', icon: '☁️' },
  { name: 'discord_rpc', size: '210KB', desc: 'dart_discord_presence | Rich presence | Episode progress | Deep links | Cover art', icon: '🎮' },
  { name: 'theme_system', size: '420KB', desc: 'Material 3 | Dynamic color | Custom accent | Fonts | Radius | Grid | 50+ settings', icon: '🎨' },
]

export default function Architecture() {
  return (
    <section className="relative py-24 px-4 md:px-8 lg:px-16 bg-dark-card/50 border-y border-dark-border">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="font-mono text-anifox-500 text-sm mb-4 tracking-widest uppercase">[ SYSTEM_HIERARCHY ]</p>
          <h2 className="font-mono text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">ARCHITECTURE</span>
            <span className="text-anifox-500">_PREVIEW</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Flutter 3.24 · Dart 3.4 · Material 3 · Impeller · Hive · Provider · QuickJS
          </p>
        </div>

        <div className="terminal-window rounded-xl overflow-hidden">
          <div className="terminal-header px-4 py-3 flex items-center gap-2 border-b border-dark-border">
            <div className="flex gap-1.5">
              <div className="terminal-button bg-red-500" />
              <div className="terminal-button bg-yellow-500" />
              <div className="terminal-button bg-green-500" />
            </div>
            <div className="flex-1 text-center">
              <span className="font-mono text-xs text-gray-400">ROOT // ANIFOX_V2.0.0_ECLIPSE</span>
            </div>
            <div className="w-36" />
          </div>

          <div className="p-6">
            <div className="font-mono text-sm text-anifox-500 mb-6 flex items-center gap-2">
              <span>></span>
              <span>ls -la core_modules/</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {architectureItems.map((item, index) => (
                <div
                  key={item.name}
                  className="group relative p-4 bg-dark-bg border border-dark-border rounded-lg transition-all duration-300 hover:border-anifox-500/50 hover:bg-dark-card"
                  style={{ animationDelay: `${index * 80}ms` }}
                >
                  <div className="flex items-start gap-3 mb-3">
                    <span className="text-2xl">{item.icon}</span>
                    <div className="flex-1">
                      <div className="font-mono text-sm text-white">{item.name}</div>
                      <div className="font-mono text-xs text-anifox-500">{item.size}</div>
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed font-mono">{item.desc}</p>
                  <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="font-mono text-xs text-anifox-500/70">[DIR]</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: 'PLATFORMS', items: ['Android (API 24+)', 'Windows 10/11', 'Linux (GTK 4.1+)', 'macOS 11+ (unsigned)', 'Web (PWA)', 'iOS (scaffold)'] },
            { title: 'BUILT-IN PROVIDERS', items: ['AnimePahe', 'Gogoanime', 'AllAnime', 'AnimeKai', 'AniZone', 'Animegg', 'AnimeOnsen', 'AnimeParadise', 'Anikoto'] },
            { title: 'TECH STACK', items: ['Flutter 3.24', 'Dart 3.4', 'Material 3', 'Impeller', 'Hive 2.2', 'Provider 6.1', 'flutter_qjs', 'better_player', 'fvp', 'pointycastle'] },
          ].map((section, index) => (
            <div key={section.title} className="bg-dark-card border border-dark-border rounded-xl p-6">
              <h4 className="font-mono text-anifox-500 text-sm mb-4 tracking-widest uppercase">{section.title}</h4>
              <ul className="space-y-2">
                {section.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-gray-300 font-mono">
                    <span className="w-1.5 h-1.5 bg-anifox-500 rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}