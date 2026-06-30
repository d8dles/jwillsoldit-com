import { BackSide, Color } from 'three'
import { Stars } from '@react-three/drei'
import { useTimeOfDayAtmosphere } from '../hooks/useTimeOfDayAtmosphere'
import { fogDensity } from '../config/heroTheme'

const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`

const fragmentShader = `
  uniform vec3 uTop;
  uniform vec3 uUpperMid;
  uniform vec3 uMid;
  uniform vec3 uLowerMid;
  uniform vec3 uHorizon;
  uniform vec3 uNearHorizon;
  varying vec2 vUv;

  void main() {
    float t = vUv.y;
    vec3 color;
    if (t > 0.8) {
      color = mix(uUpperMid, uTop, (t - 0.8) / 0.2);
    } else if (t > 0.6) {
      color = mix(uMid, uUpperMid, (t - 0.6) / 0.2);
    } else if (t > 0.4) {
      color = mix(uLowerMid, uMid, (t - 0.4) / 0.2);
    } else if (t > 0.2) {
      color = mix(uHorizon, uLowerMid, (t - 0.2) / 0.2);
    } else {
      color = mix(uNearHorizon, uHorizon, t / 0.2);
    }
    gl_FragColor = vec4(color, 1.0);
  }
`

export default function Atmosphere() {
  const atmo = useTimeOfDayAtmosphere()

  const uniforms = {
    uTop:         { value: new Color(atmo.skyTop) },
    uUpperMid:    { value: new Color(atmo.skyUpperMid) },
    uMid:         { value: new Color(atmo.skyMid) },
    uLowerMid:    { value: new Color(atmo.skyLowerMid) },
    uHorizon:     { value: new Color(atmo.skyHorizon) },
    uNearHorizon: { value: new Color(atmo.skyNearHorizon) },
  }

  return (
    <>
      {/* Fog — exponential, warm dark brown */}
      <fogExp2 attach="fog" args={[atmo.fog, fogDensity.base]} />

      {/* Sky dome — inverted sphere, BackSide, gradient shader */}
      <mesh renderOrder={-1}>
        <sphereGeometry args={[500, 32, 16]} />
        <shaderMaterial
          side={BackSide}
          vertexShader={vertexShader}
          fragmentShader={fragmentShader}
          uniforms={uniforms}
          depthWrite={false}
        />
      </mesh>

      {/* Stars — very subtle atmospheric scatter */}
      <Stars radius={100} depth={50} count={600} factor={2} saturation={0} fade={false} />

      {/* Lighting rig — 1 ambient + 2 directional + 1 point = 4 lights, cap is 5 */}
      <ambientLight color="#2a2e3f" intensity={0.3} />
      <directionalLight color="#ffe4a0" intensity={1.4} position={[-8, 6, 4]} />
      <directionalLight color="#ff9a3c" intensity={0.5} position={[6, 2, -6]} />
      <pointLight color="#c8a96e" intensity={0.8} position={[0, -3, 0]} />
    </>
  )
}
