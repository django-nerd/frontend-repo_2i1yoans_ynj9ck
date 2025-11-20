export const API_BASE = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export async function listProjects(query = {}) {
  const params = new URLSearchParams()
  if (query.category) params.set('category', query.category)
  if (query.tech) params.set('tech', query.tech)
  const res = await fetch(`${API_BASE}/api/projects?${params.toString()}`)
  if (!res.ok) throw new Error('Failed to fetch projects')
  return res.json()
}

export async function createProject(payload) {
  const res = await fetch(`${API_BASE}/api/projects`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  })
  if (!res.ok) throw new Error('Failed to create project')
  return res.json()
}

export async function getProject(id) {
  const res = await fetch(`${API_BASE}/api/projects/${id}`)
  if (!res.ok) throw new Error('Project not found')
  return res.json()
}

export async function bootstrapAI(id) {
  const res = await fetch(`${API_BASE}/api/projects/${id}/bootstrap-ai`, { method: 'POST' })
  if (!res.ok) throw new Error('Failed to bootstrap AI')
  return res.json()
}
