import { createContext, useCallback, useContext, useRef, useState } from 'react'
import gsap from 'gsap'
import { transition } from './config/heroMotion'

const HeroContext = createContext(null)

export function HeroProvider({ children }) {
  const [phase, setPhase] = useState('intro')
  const transitionProgress = useRef(0)

  const triggerTransition = useCallback(() => {
    if (phase !== 'intro') return
    setPhase('transitioning')
    gsap.to(transitionProgress, {
      current: 1,
      duration: transition.duration,
      ease: transition.ease,
      onComplete: () => setPhase('hub'),
    })
  }, [phase])

  return (
    <HeroContext.Provider value={{ phase, triggerTransition, transitionProgress }}>
      {children}
    </HeroContext.Provider>
  )
}

export function useHeroContext() {
  const ctx = useContext(HeroContext)
  if (!ctx) throw new Error('useHeroContext must be used inside HeroProvider')
  return ctx
}
