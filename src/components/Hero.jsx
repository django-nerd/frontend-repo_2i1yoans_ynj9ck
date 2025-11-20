import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative min-h-[70vh] w-full overflow-hidden bg-slate-900">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/LU2mWMPbF3Qi1Qxh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-24 pb-16">
        <div className="max-w-2xl">
          <span className="inline-flex items-center text-xs font-semibold tracking-wider uppercase text-white/70 bg-white/10 rounded-full px-3 py-1 backdrop-blur">Vibe Station</span>
          <h1 className="mt-4 text-4xl sm:text-6xl font-extrabold leading-tight text-white drop-shadow-xl">
            A hive where builders and buyers connect through AI
          </h1>
          <p className="mt-4 text-lg text-white/80">
            Upload MVPs, templates, and automations. Let AI polish, tag, score, and match them with the right partners.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#upload" className="inline-flex items-center px-5 py-3 rounded-xl bg-white text-slate-900 font-semibold hover:bg-slate-100 transition">Upload your MVP</a>
            <a href="#explore" className="inline-flex items-center px-5 py-3 rounded-xl bg-slate-800/80 text-white font-semibold hover:bg-slate-800 transition">Explore projects</a>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/10 to-transparent" />
    </section>
  )
}
