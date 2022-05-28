import { spaces } from '../foundations/spaces'

export const SimpleCard = {
  baseStyle: ({ colorMode }) => ({
    margin: spaces['4'],
    padding: spaces['4'],
    boxShadow: 'lg',
    borderWidth: '1px',
    borderRadius: 'base',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    bg: colorMode === 'dark' ? 'gray.800' : 'gray.200',
    color: colorMode === 'dark' ? 'white' : 'black',
  }),
  variants: {
    standard: {},
    centered: { textAlign: 'center' },
  },
}
