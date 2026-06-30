import { HeroProvider } from './HeroContext'
import HeroCanvas from './HeroCanvas'
import HeroOverlay from './overlay/HeroOverlay'
import styles from '../styles/hero.module.css'

export default function Hero() {
  return (
    <HeroProvider>
      <div className={styles.heroRoot}>
        <HeroCanvas />
        <HeroOverlay />
      </div>
    </HeroProvider>
  )
}
