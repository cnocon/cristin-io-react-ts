export const Link = {
  // style object for base or default style
  baseStyle: (props: any) => ({
    color: props?.colorMode === 'light' ? 'blue.500' : 'blue.500',
    // bg: "linear-gradient(-240deg,#bca2f6,#cdb9f8 5%,#b3e9ff 17%,#b3e9ff 25%,#bffcf7 35%,#ffe366 60%,#fad1d1 85%)",
    // backgroundSize: "100% 2px",
    // backgroundPosition: "bottom",
    // backgroundRepeat: "no-repeat",
    _hover: {
      // bg: "none",
      textDecoration: 'none',
      color: 'blue.600',
    },
  }),
  //   // styles for different sizes ("sm", "md", "lg")
  //   sizes: {},
  //   // styles for different visual variants ("outline", "solid")
  //   variants: {},
  //   // default values for `size` and `variant`
  //   defaultProps: {
  //     size: "",
  //     variant: "",
  //   },
}
