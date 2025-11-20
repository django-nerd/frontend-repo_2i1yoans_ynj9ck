export default function ProjectCard({ project }) {
  const ai = project.ai || {}
  return (
    <div className="rounded-2xl bg-white/5 border border-white/10 p-4 flex flex-col justify-between">
      <div>
        <h4 className="text-white font-semibold text-lg">{project.name}</h4>
        <p className="text-white/70 text-sm mt-1 line-clamp-3">{ai.summary || project.description}</p>
        {project.category && (
          <span className="inline-block mt-3 text-xs text-white/80 bg-white/10 rounded-full px-2 py-1">{project.category}</span>
        )}
      </div>
      <div className="mt-4 flex items-center justify-between text-white/80 text-sm">
        <span>Readiness: {ai.readiness_score ?? '—'}</span>
        <span>Market-fit: {ai.market_fit_score ?? '—'}</span>
      </div>
    </div>
  )
}
