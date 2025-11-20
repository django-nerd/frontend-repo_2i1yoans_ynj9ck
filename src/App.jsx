import Navbar from './components/Navbar'
import Hero from './components/Hero'
import UploadForm from './components/UploadForm'
import ExploreGrid from './components/ExploreGrid'
import Background3D from './components/Background3D'
import AnimatedIcons from './components/AnimatedIcons'
import { useState } from 'react'

function App() {
  const [refreshKey, setRefreshKey] = useState(0)
  return (
    <div className="min-h-screen bg-transparent">
      <Background3D />
      <Navbar />
      <main className="pt-14">
        <Hero />
        <AnimatedIcons />
        <div className="max-w-6xl mx-auto px-6 -mt-4 relative z-10">
          <UploadForm onCreated={() => setRefreshKey((k) => k + 1)} />
          <ExploreGrid refreshKey={refreshKey} />
        </div>
        <footer className="mt-16 py-8 text-center text-white/50 relative z-10">Built with Vibe Coding Tools</footer>
      </main>
    </div>
  )
}

export default App
