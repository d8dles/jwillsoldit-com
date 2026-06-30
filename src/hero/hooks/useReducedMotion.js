import { useEffect, useState } from 'react'

export function useReducedMotion() {
  const getMedia = () =>
    typeof window !== 'undefined'
      ? window.matchMedia('(prefers-reduced-motion: reduce)')
      : null

  const [reduced, setReduced] = useState(() => getMedia()?.matches ?? false)

  useEffect(() => {
    const mq = getMedia()
    if (!mq) return
    const handler = (e) => setReduced(e.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  return reduced
}
