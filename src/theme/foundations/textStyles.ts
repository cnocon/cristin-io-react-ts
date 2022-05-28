/**
import { ImageProps } from '@chakra-ui/react';
 * TEXT STYLES
 *
 * You can put these styles in the theme under the textStyles key to make easy
 * to re-use in the future.
 *
 *
 * Properties defined in a text style:
 *
 * 1. Font family, weight, and size
 * 2. Line height
 * 3. Letter spacing
 * 4. Text decoration (strikethrough and underline)
 * 5. Text transform (uppercase, lowercase, and capitalization)
 *
 * https://chakra-ui.com/docs/styled-system/features/text-and-layer-styles#text-styles
 */
export const textStyles = {
  text: {
    lineHeight: '1.62em',
    fontSize: '1rem',
    fontWeight: '400',
  },
  caption: {
    fontSize: '10.75rem',
    lineHeight: '1rem',
    fontWeight: 600,
    textTransform: 'uppercase',
  },
  breadcrumb: {
    fontSize: 'sm',
  },
  sectionTitle: {
    fontFamily: 'Oswald, sans-serif',
    fontWeight: '400',
    letterSpacing: '1px',
  },
  cardHeading: {
    fontFamily: 'Oswald, sans-serif',
    fontWeight: '700',
    textTransform: 'uppercase',
  },
  display: {
    size: '4xl',
    marginTop: 8,
    marginBottom: 8,
    fontWeight: 300,
  },
  strongDisplay: {
    size: '4xl',
    marginTop: 8,
    marginBottom: 8,
    fontWeight: 800,
  },
}
