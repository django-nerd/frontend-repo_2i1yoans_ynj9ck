import { Menu, Search } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-30 border-b border-white/10 bg-slate-900/60 backdrop-blur">
      <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
        <div className="flex items-center gap-3 text-white">
          <Menu className="w-5 h-5 opacity-70" />
          <span className="font-semibold">Vibe Station</span>
        </div>
        <div className="hidden sm:flex items-center gap-2 bg-white/5 rounded-lg px-3 py-1.5 text-white/80">
          <Search className="w-4 h-4" />
          <input className="bg-transparent outline-none placeholder:text-white/50 w-64" placeholder="Search projects..." />
        </div>
        <a href="#upload" className="text-sm font-semibold text-white bg-indigo-500 hover:bg-indigo-400 px-3 py-1.5 rounded-lg">Upload</a>
      </div>
    </header>
  )
}
