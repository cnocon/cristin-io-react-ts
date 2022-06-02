import type { ComponentStyleConfig } from '@chakra-ui/theme'
import { spacing } from '../foundations/spacing'

export const SimpleCardConfig: ComponentStyleConfig = {
  baseStyle: (props: any) => ({
    margin: spacing.space['4'],
    padding: spacing.space['4'],
    boxShadow: 'xl',
    borderWidth: '1px',
    borderRadius: 'base',
    borderColor: props?.colorMode === 'dark' ? 'transparent' : 'gray.100',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    bg: props?.colorMode === 'dark' ? 'gray.300' : 'gray.50',
    color: props?.colorMode === 'dark' ? 'black' : 'black',
  }),
  variants: {
    standard: {},
    centered: {
      textAlign: 'center',
    },
  },
  defaultProps: {
    variant: 'standard',
  },
}
