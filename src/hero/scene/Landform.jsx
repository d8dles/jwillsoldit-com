export default function Landform() {
  return (
    <group position={[0, -0.5, 0]}>
      {/* Main body — squashed sphere, warm dark charcoal */}
      <mesh scale={[1, 0.42, 1]} castShadow={false} receiveShadow={false}>
        <sphereGeometry args={[3.5, 64, 32]} />
        <meshStandardMaterial
          color="#2a2520"
          roughness={0.88}
          metalness={0.0}
        />
      </mesh>

      {/* Edge ring — gives a beveled/terraced silhouette at the equator */}
      <mesh position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[3.48, 0.12, 8, 80]} />
        <meshStandardMaterial
          color="#1c1814"
          roughness={0.92}
          metalness={0.0}
        />
      </mesh>
    </group>
  )
}
