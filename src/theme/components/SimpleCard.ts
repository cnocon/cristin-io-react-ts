import { space } from '../foundations/space'

export const SimpleCard = {
  baseStyle: ({ colorMode }) => ({
    bg: colorMode === 'dark' ? 'gray.800' : 'gray.200',
    color: colorMode === 'dark' ? 'white' : 'black',
    margin: space['4'],
    padding: space['4'],
    shadow: 'lg',
    borderWidth: '1px',
    borderRadius: 'base',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  }),
  variants: {
    standard: {},
    centered: { textAlign: 'center' },
  },
}
