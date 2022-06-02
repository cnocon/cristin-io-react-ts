// @TODO Create global theme file: https://chakra-ui.com/docs/styled-system/theming/customize-theme#customizing-global-styles
import { extendTheme } from '@chakra-ui/react'
import * as ioTokens from './foundations'
import components from './components'

// Global style overrides
import { styles } from './styles'

export const ioTheme = extendTheme({
  ...styles,
  ...ioTokens,
  components,
})
