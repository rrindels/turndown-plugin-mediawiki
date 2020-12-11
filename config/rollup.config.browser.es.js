import config from './rollup.config'

export default config({
  output: {
    format: 'es',
    file: 'lib/turndown-plugin-mediawiki.browser.es.js'
  }
})
