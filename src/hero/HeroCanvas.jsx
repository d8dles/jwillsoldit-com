import { Canvas, useThree } from '@react-three/fiber'
import { Suspense, useEffect } from 'react'
import Atmosphere from './scene/Atmosphere'
import CityWorld from './scene/CityWorld'
import { useResponsiveCamera } from './hooks/useResponsiveCamera'
import styles from '../styles/hero.module.css'

function CameraController() {
  const { camera } = useThree()
  const camConfig = useResponsiveCamera()

  useEffect(() => {
    camera.position.set(...camConfig.position)
    camera.fov = camConfig.fov
    camera.updateProjectionMatrix()
  }, [camera, camConfig])

  return null
}

export default function HeroCanvas() {
  return (
    <div className={styles.canvasLayer}>
      <Canvas
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: false }}
        camera={{ position: [0, 5.5, 12], fov: 55 }}
      >
        <color attach="background" args={['#0c0e16']} />
        <Suspense fallback={null}>
          <Atmosphere />
          <CityWorld />
          <CameraController />
        </Suspense>
      </Canvas>
    </div>
  )
}
