import { palette } from '../config/heroTheme'

export default function Landform() {
  return (
    <group>
      {/* Main island disc */}
      <mesh position={[0, -0.3, 0]} receiveShadow={false}>
        <cylinderGeometry args={[9, 8.5, 0.6, 64]} />
        <meshStandardMaterial
          color={palette.islandGround}
          roughness={0.88}
          metalness={0.0}
        />
      </mesh>

      {/* Island edge — slightly darker rim */}
      <mesh position={[0, -0.3, 0]}>
        <cylinderGeometry args={[8.5, 8.0, 0.6, 64]} />
        <meshStandardMaterial
          color="#b8a888"
          roughness={0.90}
          metalness={0.0}
        />
      </mesh>

      {/* Underside — dark base */}
      <mesh position={[0, -0.65, 0]}>
        <cylinderGeometry args={[8.2, 7.6, 0.1, 64]} />
        <meshStandardMaterial color="#3a3020" roughness={0.95} metalness={0.0} />
      </mesh>
    </group>
  )
}
