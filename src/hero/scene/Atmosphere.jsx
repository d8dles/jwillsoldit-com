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
      <fogExp2 attach="fog" args={[atmo.fog, fogDensity.base]} />

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

      {/* Very faint stars — barely visible at early evening */}
      <Stars radius={120} depth={30} count={300} factor={1.5} saturation={0} fade={false} />

      {/* Daytime city lighting rig */}
      {/* Bright warm overhead sun — primary light source */}
      <directionalLight color="#fff8d8" intensity={2.2} position={[8, 16, 8]} />
      {/* Cool blue fill — shadow side, gives depth */}
      <directionalLight color="#90a8c0" intensity={0.40} position={[-6, 8, -4]} />
      {/* Warm ambient — lifts shadow detail */}
      <ambientLight color="#e0d4c0" intensity={0.65} />
    </>
  )
}
