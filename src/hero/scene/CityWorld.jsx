import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import Landform from './Landform'
import Buildings from './Buildings'
import Roads from './Roads'
import Trees from './Trees'

export default function CityWorld() {
  const groupRef = useRef()

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.0008
    }
  })

  return (
    <group ref={groupRef}>
      <Landform />
      <Roads />
      <Buildings />
      <Trees />
    </group>
  )
}
