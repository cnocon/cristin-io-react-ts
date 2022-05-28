export const Heading = {
  // style object for base or default style
  baseStyle: {},
  // styles for different sizes ("sm", "md", "lg")
  sizes: {},
  // styles for different visual variants ("outline", "solid")
  variants: {
    siteTitle: {
      fontWeight: '800',
      fontFamily: 'Open Sans, sans-serif',
      lineHeight: '1em',
    },
    siteSubtitle: {
      fontFamily: 'Oswald, sans-serif',
      fontWeight: '300',
      textTransform: 'uppercase',
      letterSpacing: '1px',
    },
  },
  // default values for `size` and `variant`
  defaultProps: {
    size: '',
    variant: '',
  },
}
