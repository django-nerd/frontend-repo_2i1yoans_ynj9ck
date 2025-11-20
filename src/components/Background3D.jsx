import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Background3D() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* 3D scene */}
      <div className="absolute inset-0 pointer-events-none">
        <Spline scene="https://prod.spline.design/LU2mWMPbF3Qi1Qxh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Animated gradient blobs for depth */}
      <motion.div
        className="absolute -top-24 -left-24 h-[50vh] w-[50vh] rounded-full blur-3xl opacity-30"
        style={{ background: 'radial-gradient(circle at 30% 30%, #60a5fa, transparent 60%)' }}
        animate={{ x: [0, 50, -40, 0], y: [0, -30, 40, 0], scale: [1, 1.1, 0.95, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute -bottom-24 -right-24 h-[55vh] w-[55vh] rounded-full blur-3xl opacity-25"
        style={{ background: 'radial-gradient(circle at 70% 70%, #f472b6, transparent 60%)' }}
        animate={{ x: [0, -60, 30, 0], y: [0, 20, -35, 0], scale: [1, 0.9, 1.05, 1] }}
        transition={{ duration: 24, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 h-[40vh] w-[40vh] rounded-full blur-3xl opacity-20"
        style={{ background: 'radial-gradient(circle at 50% 50%, #34d399, transparent 60%)' }}
        animate={{ rotate: [0, 15, -10, 0], scale: [1, 1.05, 0.95, 1] }}
        transition={{ duration: 28, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Vignette overlay for readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/20 to-slate-900/80" />
    </div>
  )
}
