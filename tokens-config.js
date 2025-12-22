import { register } from '@tokens-studio/sd-transforms'
import StyleDictionary from 'style-dictionary'

// will register them on StyleDictionary object
// that is installed as a dependency of this package.

// register(StyleDictionary)

register(StyleDictionary, {
  excludeParentKeys: true,
  // transform: (token) => {
  // token.value will be resolved and transformed at this point
  // },
})

const sd = new StyleDictionary({
  // make sure to have source match your token files!
  // be careful about accidentally matching your package.json or similar files that are not tokens
  source: ['src/tokens.json'],
  preprocessors: ['tokens-studio'], // <-- since 0.16.0 this must be explicit
  platforms: {
    css: {
      transformGroup: 'tokens-studio', // <-- apply the tokens-studio transformGroup to apply all transforms
      transforms: ['name/kebab'], // <-- add a token name transform for generating token names, default is camel
      buildPath: './',
      files: [
        {
          destination: '/src/styles/tokens/_variables.scss',
          format: 'css/variables',
          /*options: {
            outputReferences: true,
          },*/
        },
      ],
    },
    js: {
      transformGroup: 'tokens-studio',
      buildPath: './',
      files: [
        {
          destination: 'variables.js',
          format: 'javascript/es6',
          /*options: {
            outputReferences: true,
          },*/
        },
      ],
    },
  },
  log: {
    warnings: 'error', // 'warn' | 'error' | 'disabled'
    verbosity: 'verbose', // 'default' | 'silent' | 'verbose'
    errors: {
      brokenReferences: 'console', // 'throw' | 'console'
    },
  },
})

await sd.cleanAllPlatforms()
await sd.buildAllPlatforms()