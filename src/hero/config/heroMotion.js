export const camera = {
  desktop: { position: [0, 5.5, 12],   fov: 55, worldScale: 1.0  },
  tablet:  { position: [0, 5.0, 10.5], fov: 57, worldScale: 0.95 },
  mobile:  { position: [0, 4.0, 8.5],  fov: 58, worldScale: 0.88 },
}
export const reveal = {
  sceneSettle:   0.6,
  jwillStagger:  0.07,
  solditStagger: 0.06,
  buttonDelay:   1.65,
  magneticDelay: 2.0,
}
export const transition = {
  duration: 1.6,
  ease: 'power2.inOut',
  cameraTarget: { position: [0, 3.5, 5.5] },
}
export const magnetic = {
  radius:          110,
  jwillDisplace:   14,
  solditDisplace:  10,
  maxRotation:     3,
}
