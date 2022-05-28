import { mode } from '@chakra-ui/theme-tools' // eslint-disable-line

export const styles = {
  global: (props) => ({
    html: {
      position: 'relative',
      bg: mode('white', 'gray.600')(props),
    },
  }),
}
