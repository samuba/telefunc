import { Plugin } from 'vite'
import { assert, toPosixPath } from '../utils'
import { transformTelefuncFile } from '../transformer/transformTelefuncFile'
import { isSSR_options } from './utils'
import { generateShield } from '../server/shield/codegen/transformer'

export { transform }

function transform(): Plugin {
  let root: undefined | string

  return {
    name: 'telefunc:transform',
    enforce: 'pre',
    config: (config) => {
      // Vite doesn't seem to always normalize config.root
      root = config.root ? toPosixPath(config.root) : toPosixPath(process.cwd())
    },
    async transform(src, id, options) {
      if (isSSR_options(options)) {
        if (id.endsWith(".telefunc.ts")) {
          return generateShield(src)
        }
        return
      }
      if (id.includes('.telefunc.')) {
        assert(root)
        return transformTelefuncFile(src, id, root)
      }
    }
  }
}