import { useEffect, useState } from 'react'
import { listProjects } from '../lib/api'
import ProjectCard from './ProjectCard'

export default function ExploreGrid({ refreshKey }) {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let mounted = true
    const run = async () => {
      setLoading(true)
      try {
        const data = await listProjects()
        if (mounted) setItems(data)
      } finally {
        if (mounted) setLoading(false)
      }
    }
    run()
    return () => { mounted = false }
  }, [refreshKey])

  return (
    <section id="explore" className="mt-8">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-white text-xl font-semibold">Explore</h3>
        <a href="/test" className="text-white/60 text-sm underline">Backend Test</a>
      </div>
      {loading ? (
        <p className="text-white/70">Loading...</p>
      ) : items.length === 0 ? (
        <p className="text-white/60">No projects yet. Be the first to upload!</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      )}
    </section>
  )
}
