import { mode } from '@chakra-ui/theme-tools'

export const styles = {
  global: (props) => ({
    html: {
      position: 'relative',
      bg: mode('white', 'gray.600')(props),
    },
  }),
}
