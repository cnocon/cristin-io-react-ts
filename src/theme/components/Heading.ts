export const Heading = {
  // style object for base or default style
  baseStyle: {},
  // styles for different sizes ("sm", "md", "lg")
  sizes: {},
  // styles for different visual variants ("outline", "solid")
  variants: {
    siteTitle: {
      fontWeight: "800",
      fontFamily: "Open Sans",
      lineHeight: "1em",
    },
    siteSubtitle: {
      letterSpacing: "1px",
      fontFamily: "Oswald",
      fontWeight: "300",
      textTransform: "uppercase",
    },
  },
  // default values for `size` and `variant`
  defaultProps: {
    size: "",
    variant: "",
  },
};
