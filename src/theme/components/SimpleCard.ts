import { spacing } from '../foundations/spacing'
import { chakra } from '@chakra-ui/react'

export const SimpleCard = chakra('div', {
  baseStyle: (props: any) => ({
    margin: spacing.space['4'],
    padding: spacing.space['4'],
    boxShadow: 'lg',
    borderWidth: '1px',
    borderRadius: 'base',
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    justifyContent: 'space-between',
    bg: props?.colorMode === 'dark' ? 'gray.800' : 'gray.200',
    color: props?.colorMode === 'dark' ? 'white' : 'black',
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
})
