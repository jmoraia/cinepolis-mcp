import { register } from '@tokens-studio/sd-transforms'
import StyleDictionary from 'style-dictionary'

register(StyleDictionary, { excludeParentKeys: true })

const normalize = (s = '') =>
  String(s)
    .toLowerCase()
    .replace(/\s+/g, ' ')
    .trim()

const isEcommerceKey = (k) => {
  const n = normalize(k)
  // cubre "E - Commerce", "E-Commerce", "Ecommerce", etc.
  return n === 'e - commerce' || n === 'e-commerce' || n === 'ecommerce'
}

// 1) Preprocessor combinado: Scale => solo 2x, Typography => solo E-Commerce
StyleDictionary.registerPreprocessor({
  name: 'strip-scales-and-typography',
  preprocessor: (tokens) => {
    // --- SCALE ---
    // Caso A: keys "Scale/1x", "Scale/2x"
    for (const key of Object.keys(tokens)) {
      if (key.startsWith('Scale/') && key !== 'Scale/2x') {
        delete tokens[key]
      }
    }
    // Caso B: { Scale: { '1x':..., '2x':... } }
    if (tokens.Scale && typeof tokens.Scale === 'object') {
      for (const scaleKey of Object.keys(tokens.Scale)) {
        if (scaleKey !== '2x') delete tokens.Scale[scaleKey]
      }
    }

    // --- TYPOGRAPHY: solo E - Commerce ---
    // Caso A: keys "Typography/X"
    for (const key of Object.keys(tokens)) {
      if (key.startsWith('Typography/')) {
        const after = key.slice('Typography/'.length)
        if (!isEcommerceKey(after)) delete tokens[key]
      }
    }

    // Caso B: { Typography: { 'E - Commerce': {...}, ... } }
    if (tokens.Typography && typeof tokens.Typography === 'object') {
      for (const typoKey of Object.keys(tokens.Typography)) {
        if (!isEcommerceKey(typoKey)) delete tokens.Typography[typoKey]
      }
    }

    return tokens
  },
})

const sd = new StyleDictionary({
  source: ['src/tokens.json'],
  preprocessors: ['strip-scales-and-typography', 'tokens-studio'],
  platforms: {
    css: {
      transformGroup: 'tokens-studio',
      transforms: ['name/kebab'],
      buildPath: './',
      files: [
        {
          destination: 'src/styles/tokens/_variables.scss',
          format: 'css/variables',
          options: { outputReferences: true },
        },
      ],
    },
  },
  log: {
    warnings: 'error',
    verbosity: 'verbose',
    errors: { brokenReferences: 'console' },
  },
})

await sd.cleanAllPlatforms()
await sd.buildAllPlatforms()
