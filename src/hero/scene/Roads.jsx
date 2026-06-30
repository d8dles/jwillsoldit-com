import { palette } from '../config/heroTheme'

const roadMaterial = (
  <meshStandardMaterial color={palette.roadColor} roughness={0.85} metalness={0.0} />
)

// Roads run as flat rectangles on the island surface
// 4 main roads: N-S, E-W, and two diagonals clearing space between building clusters
const ROADS = [
  // N-S main road (Z axis)
  { pos: [0, 0.01, 0],  rot: [0, 0, 0],             size: [1.2, 0.02, 14] },
  // E-W main road (X axis)
  { pos: [0, 0.01, 0],  rot: [0, Math.PI / 2, 0],   size: [1.2, 0.02, 14] },
  // Inner ring connector (N side)
  { pos: [0, 0.01, 3],  rot: [0, Math.PI / 4, 0],   size: [0.7, 0.02, 5.5] },
  // Inner ring connector (S side)
  { pos: [0, 0.01, -3], rot: [0, Math.PI / 4, 0],   size: [0.7, 0.02, 5.5] },
]

export default function Roads() {
  return (
    <group>
      {ROADS.map((r, i) => (
        <mesh key={i} position={r.pos} rotation={r.rot}>
          <boxGeometry args={r.size} />
          {roadMaterial}
        </mesh>
      ))}
    </group>
  )
}
