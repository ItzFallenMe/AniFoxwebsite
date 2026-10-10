'use client'
import { useState } from 'react'

const faqs = [
  {
    q: 'What exactly is AniFox?',
    a: 'AniFox is a minimalist, open-source anime client for Android, Windows, Linux, and macOS. It acts as a unified dashboard synced with tracking platforms like AniList, MyAnimeList, and Simkl. It ships with 9 built-in providers and a full Mangayomi/Aniyomi extension runtime — zero pre-compiled pirated content. You own your data.',
  },
  {
    q: 'How does the Extension Runtime work?',
    a: 'AniFox uses flutter_qjs (QuickJS) to run Mangayomi/Aniyomi JavaScript extensions in isolated per-extension runtimes (LRU-4 pool). The bridge provides HTTP verbs (GET/POST/HEAD), DOM parsing (querySelector, innerHTML), Preferences API, and unpack_js for obfuscated code. Extensions are installed from repo indexes (default: m2k3a/mangayomi-extensions) and validated on install. 9 built-in providers work without any extensions.',
  },
  {
    q: 'Which platforms are supported?',
    a: 'Android (API 24+), Windows 10/11, Linux (GTK 4.1+, libsecret-1), macOS 11+ (unsigned, right-click → Open), Web (PWA), and iOS scaffolding. Linux runtime deps: `libwebkit2gtk-4.1-0` and `libsecret-1-0`. macOS builds require `xattr -cr AniFox.app` on first launch.',
  },
  {
    q: 'Is there telemetry or tracking?',
    a: 'Absolutely not. Zero telemetry. Zero analytics. Zero crash reporting unless you explicitly opt-in. Your library, watch history, and settings stay on your device. Sync only happens when you authenticate with AniList/MAL/Simkl using their official OAuth flows.',
  },
  {
    q: 'Can I use or fork the code?',
    a: 'Yes. AniFox is licensed under MIT. Fork it, audit it, build it, redistribute it. The only requirement is preserving the license notice. See github.com/ItzFallenMe/AniFox for the full source.',
  },
  {
    q: 'How do built-in providers differ from extensions?',
    a: 'Built-in providers are Dart implementations compiled into the app (AnimePahe, Gogoanime, AllAnime, AnimeKai, AniZone, Animegg, AnimeOnsen, AnimeParadise, Anikoto). Extensions are JavaScript sources loaded at runtime via QuickJS — community-maintained, unlimited count. Both appear identically in the source selector.',
  },
  {
    q: 'Does AniFox host any content?',
    a: 'No. AniFox does not host, upload, or store any video files. It only aggregates metadata from AniList/MAL/Simkl and provides a player interface for sources you choose. Extensions are user-installed. See the Legal section for details.',
  },
  {
    q: 'What\'s new in v2.0.0 "Eclipse"?',
    a: 'Full source in-repo (no private submodule), desktop builds (Windows/Linux/macOS), 9 hardened providers, QuickJS extension runtime, Discord Rich Presence, deep customization (accent, fonts, radius, grid), downloader with MKV remux, notification cover art, CI/CD with 4-platform parallel builds, and 50+ new settings.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="relative py-24 px-4 md:px-8 lg:px-16 bg-dark-card/50 border-y border-dark-border">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <p className="font-mono text-anifox-500 text-sm mb-4 tracking-widest uppercase">[ FREQUENTLY_QUERIED ]</p>
          <h2 className="font-mono text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">SYSTEM</span>
            <span className="text-anifox-500">_QUERY</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Common questions. Straight answers.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="group bg-dark-card border border-dark-border rounded-xl overflow-hidden transition-all duration-300 hover:border-anifox-500/30"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none focus:ring-2 focus:ring-anifox-500 focus:ring-offset-2 focus:ring-offset-dark-card"
              >
                <span className="font-mono text-sm text-white pr-4">{faq.q}</span>
                <div className="flex items-center gap-2">
                  <span className="font-mono text-anifox-500 text-xs">MODULE_{String(index + 1).padStart(2, '0')}</span>
                  <svg
                    className={`w-5 h-5 text-anifox-500 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-6 border-t border-dark-border bg-dark-bg/50">
                  <p className="text-gray-300 leading-relaxed font-mono text-sm">{faq.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}