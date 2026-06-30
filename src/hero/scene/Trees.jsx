import { palette } from '../config/heroTheme'

const TREES = [
  [-1.8,  6.5], [ 1.5,  6.8], [-3.5,  6.0], [ 3.8,  6.2],
  [-6.5,  1.0], [-6.8, -1.5], [ 6.5,  1.5], [ 6.8, -0.8],
  [-1.5, -7.0], [ 1.2, -7.2], [-3.2,  1.5], [ 3.0, -1.8],
  [-1.0,  1.8], [ 1.5,  1.2], [-1.5, -1.5], [ 1.0, -1.2],
]

export default function Trees() {
  return (
    <group>
      {TREES.map(([x, z], i) => (
        <group key={i} position={[x, 0, z]}>
          {/* Trunk */}
          <mesh position={[0, 0.4, 0]}>
            <cylinderGeometry args={[0.08, 0.10, 0.8, 6]} />
            <meshStandardMaterial color={palette.treeTrunk} roughness={0.90} metalness={0.0} />
          </mesh>
          {/* Crown */}
          <mesh position={[0, 1.1, 0]}>
            <sphereGeometry args={[0.45, 8, 6]} />
            <meshStandardMaterial color={palette.treeGreen} roughness={0.80} metalness={0.0} />
          </mesh>
        </group>
      ))}
    </group>
  )
}
