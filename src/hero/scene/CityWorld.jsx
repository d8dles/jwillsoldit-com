import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import Landform from './Landform'

export default function CityWorld() {
  const groupRef = useRef()

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.0015
    }
  })

  return (
    <group ref={groupRef}>
      <Landform />
      {/* Buildings, Roads, Trees, PropertyPins mount here in later tasks */}
    </group>
  )
}
