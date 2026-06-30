import { useEffect, useState } from 'react'
import { camera } from '../config/heroMotion'

function getBreakpoint() {
  const w = typeof window !== 'undefined' ? window.innerWidth : 1440
  if (w >= 1024) return 'desktop'
  if (w >= 768) return 'tablet'
  return 'mobile'
}

export function useResponsiveCamera() {
  const [config, setConfig] = useState(() => camera[getBreakpoint()])

  useEffect(() => {
    const handler = () => setConfig(camera[getBreakpoint()])
    window.addEventListener('resize', handler)
    return () => window.removeEventListener('resize', handler)
  }, [])

  return config
}
