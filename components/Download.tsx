'use client'

const platforms = [
  {
    name: 'Android',
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M6 0a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H6zm10 1.5v3h-4v-3h4zm-4 12.5h4v-3h-4v3zM4 10v3h4v-3H4zm0 5v3h4v-3H4z"/>
      </svg>
    ),
    file: 'app-release.apk',
    desc: 'Install directly (enable Install Unknown Apps), or grab a split APK for your ABI',
    cta: 'Download APK',
    color: 'from-green-500 to-green-600',
  },
  {
    name: 'Windows',
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M21 2H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h5v2h8v-2h5c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H3V4h18v12z"/>
      </svg>
    ),
    file: 'windows.zip',
    desc: 'Extract → run anifox.exe',
    cta: 'Download ZIP',
    color: 'from-blue-500 to-blue-600',
  },
  {
    name: 'Linux',
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M4 15h16c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.14-.33.05-.7-.2-.93l-1.45-1.45c-.29-.29-.77-.29-1.06 0l-1.98 1.97V5H4v8.24l-1.97-1.97c-.29-.29-.77-.29-1.06 0L.36 7.73c-.25.23-.34.6-.2.93l3.02 7.05C3.46 14.5 4.17 15 5 15z"/>
      </svg>
    ),
    file: 'linux.zip',
    desc: 'Extract → ensure system dependencies → run ./anifox',
    cta: 'Download ZIP',
    color: 'from-orange-500 to-orange-600',
  },
  {
    name: 'macOS',
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20 3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h4v-2H4V5h16v14h-4v2h4c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H4V5h16v14z"/>
      </svg>
    ),
    file: 'macos.zip',
    desc: 'Extract → drag AniFox.app into Applications → right-click → Open (unsigned)',
    cta: 'Download ZIP',
    color: 'from-purple-500 to-purple-600',
  },
]

const linuxDeps = [
  { distro: 'Ubuntu / Debian', cmd: 'sudo apt update && sudo apt install -y libwebkit2gtk-4.1-0 libsecret-1-0' },
  { distro: 'Fedora', cmd: 'sudo dnf install -y webkit2gtk4.1 libsecret' },
  { distro: 'Arch Linux', cmd: 'sudo pacman -S webkit2gtk-4.1 libsecret' },
  { distro: 'openSUSE', cmd: 'sudo zypper install webkit2gtk-4.1 libsecret-1-0' },
]

export default function Download() {
  return (
    <section id="download" className="relative py-24 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="font-mono text-anifox-500 text-sm mb-4 tracking-widest uppercase">[ BINARY_DISTRIBUTION ]</p>
          <h2 className="font-mono text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">GET THE APP</span>
            <span className="text-anifox-500">.FREE_FOREVER</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Downloaded securely from official GitHub releases. All builds are reproducible.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {platforms.map((platform, index) => (
            <div
              key={platform.name}
              className="relative group p-6 bg-dark-card border border-dark-border rounded-xl transition-all duration-300 hover:border-anifox-500/50 hover:shadow-[0_0_40px_rgba(249,115,22,0.1)]"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-anifox-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl pointer-events-none" />
              <div className="relative z-10">
                <div className={`w-16 h-16 rounded-xl flex items-center justify-center mb-4 ${platform.color}`}>
                  {platform.icon}
                </div>
                <h3 className="font-mono text-xl font-bold text-white mb-2">{platform.name}</h3>
                <p className="text-gray-400 text-sm mb-4">{platform.desc}</p>
                <a
                  href={`https://github.com/ItzFallenMe/AniFox/releases/latest/download/${platform.file}`}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-anifox-600 hover:bg-anifox-500 text-black font-semibold rounded-lg transition-colors text-sm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {platform.cta}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="terminal-window rounded-xl overflow-hidden">
          <div className="terminal-header px-4 py-3 flex items-center gap-2 border-b border-dark-border">
            <div className="flex gap-1.5">
              <div className="terminal-button bg-red-500" />
              <div className="terminal-button bg-yellow-500" />
              <div className="terminal-button bg-green-500" />
            </div>
            <div className="flex-1 text-center">
              <span className="font-mono text-xs text-gray-400">QUICK_INSTALL // LINUX_DEPENDENCIES</span>
            </div>
            <div className="w-36" />
          </div>

          <div className="p-6 font-mono text-sm">
            <div className="text-anifox-500 mb-4"># The Linux build requires these system libraries at runtime:</div>
            {linuxDeps.map((dep, index) => (
              <div key={index} className="mb-4">
                <div className="text-gray-400 mb-1"># {dep.distro}</div>
                <div className="bg-dark-bg border border-dark-border rounded px-3 py-2 text-anifox-300 overflow-x-auto">
                  {dep.cmd}
                </div>
              </div>
            ))}
            <div className="text-anifox-500 mb-2"># Quick dependency check:</div>
            <div className="bg-dark-bg border border-dark-border rounded px-3 py-2 text-anifox-300 overflow-x-auto">
              ldd ./anifox | grep -E "webkit2gtk|secret"
            </div>
            <div className="text-gray-500 mt-2"># Should show both libraries found</div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-400 mb-4 font-mono text-sm">Stable · Pre-release · Nightly builds available</p>
          <a
            href="https://github.com/ItzFallenMe/AniFox/releases"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-transparent hover:bg-dark-card text-white font-semibold rounded-lg transition-all duration-200 border-2 border-dark-border hover:border-anifox-500"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.305-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
            </svg>
            View All Releases
          </a>
        </div>
      </div>
    </section>
  )
}