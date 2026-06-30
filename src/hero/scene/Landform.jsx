export default function Landform() {
  return (
    <group position={[0, -1.2, 0]}>

      {/* DOME TOP — gently curved city surface, faces the camera */}
      <mesh position={[0, 1.2, 0]} scale={[1, 0.52, 1]}>
        <sphereGeometry args={[5.0, 64, 32]} />
        <meshStandardMaterial
          color="#3d3028"
          roughness={0.68}
          metalness={0.08}
        />
      </mesh>

      {/* BODY — tapered cylinder, gives mass and terraced profile */}
      <mesh>
        <cylinderGeometry args={[4.9, 4.3, 2.6, 80, 1]} />
        <meshStandardMaterial
          color="#2c2218"
          roughness={0.80}
          metalness={0.04}
        />
      </mesh>

      {/* TOP EDGE RING — champagne-amber tone, catches key and rim lights */}
      <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, 1.0, 0]}>
        <torusGeometry args={[4.92, 0.16, 10, 100]} />
        <meshStandardMaterial
          color="#6b4e2c"
          roughness={0.52}
          metalness={0.20}
        />
      </mesh>

      {/* MID TERRACE RING — thin dark band, creates layered step */}
      <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, 0.0, 0]}>
        <torusGeometry args={[4.88, 0.07, 8, 100]} />
        <meshStandardMaterial
          color="#1a1410"
          roughness={0.90}
          metalness={0.0}
        />
      </mesh>

      {/* BASE RING — ground-level edge catches uplift glow */}
      <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, -1.25, 0]}>
        <torusGeometry args={[4.32, 0.10, 8, 100]} />
        <meshStandardMaterial
          color="#4a3620"
          roughness={0.65}
          metalness={0.12}
        />
      </mesh>

      {/* UNDERSIDE — dark concave sculpted surface */}
      <mesh position={[0, -1.8, 0]} scale={[1, 0.25, 1]} rotation={[Math.PI, 0, 0]}>
        <sphereGeometry args={[4.4, 64, 16]} />
        <meshStandardMaterial
          color="#0f0c08"
          roughness={0.95}
          metalness={0.0}
        />
      </mesh>

    </group>
  )
}
