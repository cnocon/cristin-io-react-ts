import { extendTheme } from '@chakra-ui/react'
import * as ioTokens from './foundations'
import * as ioComponents from './components'

export const ioTheme = extendTheme({
  ...ioTokens,
  ...ioComponents,
})
