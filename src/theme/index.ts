import { extendTheme } from "@chakra-ui/react";
import { Link } from "./components/Link";
import { Heading } from "./components/Heading";

export const theme = extendTheme({
  colors: {
    brand: {
      100: "#CBD6E1",
      200: "#84AFDB",
      300: "#6587A8",
      400: "#344556",
      500: "#293745",
      600: "#53575C",
      700: "#1e2b38",
      800: "#53575C",
    },
  },
  fonts: {
    heading: "Oswald, sans-serif",
    body: "Lato, sans-serif",
    tertiary: "Pacifico, cursive",
  },
  components: {
    Link,
    Heading,
  },
});
