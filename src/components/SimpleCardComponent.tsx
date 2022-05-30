import React from 'react'
import {
  // ChakraComponent,
  BoxProps,
  useStyleConfig,
  useColorMode,
  Divider,
  Box,
  Text,
} from '@chakra-ui/react'
import { SimpleCard } from '../theme/components/SimpleCard'

interface ISimpleCardProps extends BoxProps {
  title?: string
  content?: string[]
  footer?: any
  variant?: string
  colorMode?: string
}

// type SimpleCardComponent = ChakraComponent<'div', {}>

export const SimpleCardComponent = ({
  title,
  content,
  footer,
  variant,
}: ISimpleCardProps) => {
  const { colorMode } = useColorMode()
  const styles = useStyleConfig('SimpleCard', { variant, colorMode })

  return (
    <SimpleCard __css={styles}>
      <Text mb={4} size="md" textStyle="cardHeading">
        {title}
      </Text>
      <Divider mb={4} />
      {content &&
        content.map((paragraph, pIndex) => (
          <Text display="flex" justifySelf="flex-start" as="p" key={pIndex}>
            {paragraph}
          </Text>
        ))}
      {footer && (
        <Box borderTopWidth="1px" mt={4} pt={4}>
          {footer}
        </Box>
      )}
    </SimpleCard>
  )
}
