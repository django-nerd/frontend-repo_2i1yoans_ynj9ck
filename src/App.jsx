import Navbar from './components/Navbar'
import Hero from './components/Hero'
import UploadForm from './components/UploadForm'
import ExploreGrid from './components/ExploreGrid'
import { useState } from 'react'

function App() {
  const [refreshKey, setRefreshKey] = useState(0)
  return (
    <div className="min-h-screen bg-slate-900">
      <Navbar />
      <main className="pt-14">
        <Hero />
        <div className="max-w-6xl mx-auto px-6 -mt-16 relative z-10">
          <UploadForm onCreated={() => setRefreshKey((k) => k + 1)} />
          <ExploreGrid refreshKey={refreshKey} />
        </div>
        <footer className="mt-16 py-8 text-center text-white/50">Built with Vibe Coding Tools</footer>
      </main>
    </div>
  )
}

export default App
