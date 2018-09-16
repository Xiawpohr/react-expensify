const { injectBabelPlugin } = require('react-app-rewired')

function rewireStyledComponents (
  config,
  env,
  styledComponentsPluginOptions = {}
) {
  return injectBabelPlugin(
    ['styled-components', styledComponentsPluginOptions],
    config
  )
}

module.exports = function overrides (config, env) {
  config = rewireStyledComponents(config, env, { displayName: true })
  return config
}
