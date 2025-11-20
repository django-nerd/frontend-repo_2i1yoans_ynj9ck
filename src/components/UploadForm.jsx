import { useState } from 'react'
import { createProject, bootstrapAI } from '../lib/api'

export default function UploadForm({ onCreated }) {
  const [form, setForm] = useState({
    name: '',
    description: '',
    tech_stack: '',
    category: '',
    pricing_type: 'one-time',
    price: '',
    status: 'MVP',
    links: { external_url: '', github_url: '', embed_url: '' }
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
  }

  const handleLinkChange = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, links: { ...f.links, [name]: value } }))
  }

  const submit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      const payload = {
        name: form.name,
        description: form.description || undefined,
        tech_stack: form.tech_stack ? form.tech_stack.split(',').map(s => s.trim()).filter(Boolean) : [],
        category: form.category || undefined,
        pricing: form.price ? { type: form.pricing_type, amount: Number(form.price), currency: 'USD' } : { type: form.pricing_type },
        status: form.status,
        links: Object.values(form.links).some(Boolean) ? form.links : undefined,
        thumbnails: []
      }
      const created = await createProject(payload)
      await bootstrapAI(created.id)
      onCreated?.(created)
      // reset
      setForm({
        name: '', description: '', tech_stack: '', category: '', pricing_type: 'one-time', price: '', status: 'MVP', links: { external_url: '', github_url: '', embed_url: '' }
      })
    } catch (err) {
      setError(err.message || 'Failed to create project')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="upload" className="bg-slate-900/80 border border-white/10 rounded-2xl p-6">
      <h3 className="text-white text-xl font-semibold mb-4">Upload MVP</h3>
      <form className="grid grid-cols-1 md:grid-cols-2 gap-4" onSubmit={submit}>
        <div className="space-y-3">
          <input name="name" value={form.name} onChange={handleChange} required placeholder="Name" className="w-full rounded-lg bg-white/5 text-white px-3 py-2 outline-none" />
          <textarea name="description" value={form.description} onChange={handleChange} placeholder="Description" className="w-full rounded-lg bg-white/5 text-white px-3 py-2 h-24 outline-none" />
          <input name="tech_stack" value={form.tech_stack} onChange={handleChange} placeholder="Tech stack (comma separated)" className="w-full rounded-lg bg-white/5 text-white px-3 py-2 outline-none" />
          <input name="category" value={form.category} onChange={handleChange} placeholder="Category" className="w-full rounded-lg bg-white/5 text-white px-3 py-2 outline-none" />
        </div>
        <div className="space-y-3">
          <div className="flex gap-2">
            <select name="pricing_type" value={form.pricing_type} onChange={handleChange} className="flex-1 rounded-lg bg-white/5 text-white px-3 py-2 outline-none">
              <option value="one-time">One-time</option>
              <option value="subscription">Subscription</option>
              <option value="negotiation">Negotiation</option>
            </select>
            <input name="price" value={form.price} onChange={handleChange} placeholder="Price" className="flex-1 rounded-lg bg-white/5 text-white px-3 py-2 outline-none" />
          </div>
          <select name="status" value={form.status} onChange={handleChange} className="w-full rounded-lg bg-white/5 text-white px-3 py-2 outline-none">
            <option>MVP</option>
            <option>prototype</option>
            <option>commercial-ready</option>
          </select>
          <input name="external_url" value={form.links.external_url} onChange={handleLinkChange} placeholder="External URL" className="w-full rounded-lg bg-white/5 text-white px-3 py-2 outline-none" />
          <input name="github_url" value={form.links.github_url} onChange={handleLinkChange} placeholder="GitHub URL" className="w-full rounded-lg bg-white/5 text-white px-3 py-2 outline-none" />
          <input name="embed_url" value={form.links.embed_url} onChange={handleLinkChange} placeholder="Embed URL" className="w-full rounded-lg bg-white/5 text-white px-3 py-2 outline-none" />
          <button disabled={loading} className="w-full mt-2 bg-indigo-500 hover:bg-indigo-400 text-white font-semibold px-4 py-2 rounded-lg disabled:opacity-50">{loading ? 'Creating...' : 'Create Listing'}</button>
          {error && <p className="text-red-400 text-sm">{error}</p>}
        </div>
      </form>
    </section>
  )
}
