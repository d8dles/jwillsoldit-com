import { Canvas } from '@react-three/fiber'
import styles from '../styles/hero.module.css'

export default function HeroCanvas() {
  return (
    <div className={styles.canvasLayer}>
      <Canvas
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: false }}
        camera={{ position: [0, 5.5, 12], fov: 55 }}
      >
        <color attach="background" args={['#0c0e16']} />
      </Canvas>
    </div>
  )
}
