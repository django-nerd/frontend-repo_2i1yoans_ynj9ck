import { motion, useMotionValue, useTransform } from 'framer-motion'
import { Sparkles, Rocket, Cpu, Layers, Globe2, Zap, Shield, Stars, Cog } from 'lucide-react'

function TiltCard({ children, className = '' }) {
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const rotateX = useTransform(my, [0, 1], [8, -8])
  const rotateY = useTransform(mx, [0, 1], [-8, 8])

  const onMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width
    const y = (e.clientY - rect.top) / rect.height
    mx.set(x)
    my.set(y)
  }

  const onLeave = () => {
    mx.set(0.5)
    my.set(0.5)
  }

  return (
    <motion.div
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
      className={`relative group rounded-2xl p-5 bg-white/[0.06] backdrop-blur border border-white/10 shadow-2xl overflow-hidden ${className}`}
      whileHover={{ scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 200, damping: 20 }}
    >
      {/* Glow */}
      <div className="pointer-events-none absolute -inset-1 rounded-2xl bg-gradient-to-tr from-indigo-500/20 via-fuchsia-500/10 to-cyan-500/20 opacity-0 group-hover:opacity-100 blur-2xl transition" />
      <div className="relative" style={{ transform: 'translateZ(30px)' }}>
        {children}
      </div>
    </motion.div>
  )
}

function IconBlob({ icon: Icon, title, desc, gradient, delay = 0 }) {
  return (
    <TiltCard>
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, delay }}
        className="flex items-start gap-4"
      >
        <div className={`h-14 w-14 rounded-2xl flex items-center justify-center text-white shadow-lg`} style={{ background: gradient }}>
          <Icon className="w-7 h-7" />
        </div>
        <div>
          <h3 className="text-white font-semibold text-lg">{title}</h3>
          <p className="text-white/70 text-sm leading-relaxed">{desc}</p>
        </div>
      </motion.div>
    </TiltCard>
  )
}

export default function AnimatedIcons() {
  return (
    <section className="relative z-10 py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-6">
          <IconBlob
            icon={Rocket}
            title="Launch-ready"
            desc="Start fast with polished, market-ready building blocks."
            gradient="linear-gradient(135deg, #6366f1, #a855f7)"
            delay={0.05}
          />
          <IconBlob
            icon={Cpu}
            title="AI-native"
            desc="Smart tagging, summaries, and scoring built-in."
            gradient="linear-gradient(135deg, #22d3ee, #34d399)"
            delay={0.1}
          />
          <IconBlob
            icon={Layers}
            title="Composable"
            desc="Mix, match, and evolve your MVP with ease."
            gradient="linear-gradient(135deg, #f43f5e, #f59e0b)"
            delay={0.15}
          />
          <IconBlob
            icon={Globe2}
            title="Discoverable"
            desc="Designed to be found by the right partners."
            gradient="linear-gradient(135deg, #06b6d4, #3b82f6)"
            delay={0.2}
          />
          <IconBlob
            icon={Shield}
            title="Trusted"
            desc="Transparent scoring and provenance signals."
            gradient="linear-gradient(135deg, #10b981, #14b8a6)"
            delay={0.25}
          />
          <IconBlob
            icon={Zap}
            title="Lightning-fast"
            desc="Optimized pipeline from upload to deal."
            gradient="linear-gradient(135deg, #f59e0b, #ef4444)"
            delay={0.3}
          />
        </div>

        {/* Floating badges */}
        <div className="mt-12 grid sm:grid-cols-3 gap-4">
          {[
            { icon: Sparkles, text: 'Auto summaries' },
            { icon: Stars, text: 'Quality scores' },
            { icon: Cog, text: 'Workflows & automations' },
          ].map((b, i) => (
            <motion.div
              key={i}
              className="rounded-xl border border-white/10 bg-white/5 text-white/80 px-4 py-3 backdrop-blur flex items-center gap-3"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.1 * i }}
            >
              <b.icon className="w-4 h-4 text-white/90" />
              <span className="text-sm">{b.text}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
