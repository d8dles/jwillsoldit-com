// City palette — warm day/early-evening real estate world
export const palette = {
  // Sky gradient (lighter, afternoon blue → golden hour)
  skyTop:           '#1a2d4a',
  skyUpperMid:      '#244070',
  skyMid:           '#4a7ab0',
  skyLowerMid:      '#c07840',
  skyHorizon:       '#e89830',
  skyNearHorizon:   '#f5c060',
  fog:              '#c8b080',

  // Building palette
  buildingCream:    '#f5f0e8',
  buildingWarm:     '#e8ddd0',
  buildingGray:     '#c8c0b4',
  buildingBrick:    '#b86040',
  roofDark:         '#706050',
  roofMid:          '#a09080',

  // Ground
  islandGround:     '#d4c8a8',
  roadColor:        '#c4b898',

  // Trees
  treeGreen:        '#5a9040',
  treeTrunk:        '#7a5030',

  // Legacy keys kept for any references
  wordmarkHeavy:    '#F8F6F2',
  wordmarkLight:    '#A8A8A8',
  windowGlow:       '#ffb060',
  pinCore:          '#fff0d0',
  champagneGlow:    '#c9a96e',
}

export const fogDensity = { base: 0.005, transition: 0.010 }
export const bloom     = { threshold: 0.65, intensity: 0.25, radius: 0.5 }
export const vignette  = { darkness: 0.35 }
