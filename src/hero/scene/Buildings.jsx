import { palette } from '../config/heroTheme'

// [x, z, width, depth, height, color]
const BUILDINGS = [
  // NW cluster
  [-4.5,  3.5,  1.4, 1.0, 3.2, palette.buildingCream ],
  [-3.2,  4.8,  1.0, 1.4, 4.8, palette.buildingWarm  ],
  [-5.8,  2.2,  1.2, 1.2, 2.0, palette.buildingGray  ],
  [-4.0,  5.8,  1.6, 1.0, 1.8, palette.buildingCream ],
  [-6.2,  4.0,  0.9, 1.5, 2.8, palette.buildingBrick ],
  [-2.8,  3.0,  1.0, 0.8, 5.5, palette.buildingWarm  ],

  // NE cluster
  [ 3.5,  3.8,  1.4, 1.2, 3.6, palette.buildingCream ],
  [ 5.0,  2.5,  1.0, 1.6, 2.4, palette.buildingGray  ],
  [ 4.2,  5.5,  1.8, 1.0, 2.0, palette.buildingWarm  ],
  [ 6.0,  4.2,  1.0, 1.0, 1.6, palette.buildingBrick ],
  [ 2.8,  4.5,  1.2, 1.0, 6.0, palette.buildingCream ],
  [ 5.5,  0.5,  1.0, 1.4, 3.0, palette.buildingGray  ],

  // SW cluster
  [-4.0, -3.5,  1.4, 1.2, 3.8, palette.buildingWarm  ],
  [-5.5, -2.0,  1.0, 1.0, 2.2, palette.buildingCream ],
  [-3.0, -5.0,  1.6, 1.2, 1.8, palette.buildingBrick ],
  [-6.0, -4.5,  1.0, 1.4, 2.6, palette.buildingGray  ],
  [-2.5, -2.8,  0.8, 1.2, 5.0, palette.buildingCream ],
  [-5.0, -5.5,  1.4, 0.9, 1.5, palette.buildingWarm  ],

  // SE cluster
  [ 3.8, -3.2,  1.2, 1.4, 4.2, palette.buildingGray  ],
  [ 5.2, -2.0,  1.0, 1.0, 2.8, palette.buildingCream ],
  [ 2.8, -5.2,  1.6, 1.0, 2.2, palette.buildingBrick ],
  [ 6.0, -3.8,  0.9, 1.4, 1.8, palette.buildingWarm  ],
  [ 4.5, -5.0,  1.2, 1.2, 3.2, palette.buildingCream ],
  [ 2.5, -2.5,  1.0, 0.8, 6.5, palette.buildingGray  ],

  // Outer ring fill
  [-7.0,  0.5,  1.0, 1.0, 1.8, palette.buildingCream ],
  [ 7.0, -0.5,  1.0, 1.0, 2.2, palette.buildingWarm  ],
  [ 0.5, -7.0,  1.0, 1.2, 1.6, palette.buildingBrick ],
  [-0.5,  7.0,  1.2, 1.0, 2.0, palette.buildingGray  ],
]

export default function Buildings() {
  return (
    <group>
      {BUILDINGS.map(([x, z, w, d, h, color], i) => {
        const y = h / 2  // sit flat on island surface (y=0)
        return (
          <group key={i} position={[x, y, z]}>
            {/* Main body */}
            <mesh>
              <boxGeometry args={[w, h, d]} />
              <meshStandardMaterial color={color} roughness={0.82} metalness={0.0} />
            </mesh>
            {/* Roof cap — slightly darker */}
            <mesh position={[0, h / 2 + 0.05, 0]}>
              <boxGeometry args={[w + 0.05, 0.1, d + 0.05]} />
              <meshStandardMaterial color={palette.roofDark} roughness={0.88} metalness={0.0} />
            </mesh>
          </group>
        )
      })}
    </group>
  )
}
