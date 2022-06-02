import React from 'react'
import {
  BoxProps,
  useStyleConfig,
  useColorMode,
  Divider,
  Box,
  Text,
} from '@chakra-ui/react'
// import { SimpleCardConfig } from '../theme/components/SimpleCard'

interface ISimpleCardProps extends BoxProps {
  title?: string
  content?: string[]
  footer?: any
  variant?: string
}

// type SimpleCardComponent = ChakraComponent<'div', {}>

export const SimpleCard = ({
  title,
  content,
  footer,
  variant = 'standard',
}: ISimpleCardProps) => {
  const { colorMode } = useColorMode()
  const styles = useStyleConfig('SimpleCardConfig', { variant, colorMode })

  return (
    <Box __css={styles}>
      <Text mb={4} size="md" textStyle="cardHeading">
        {title}
      </Text>
      {content &&
        content.map((paragraph, pIndex) => (
          <Text
            display="flex"
            justifySelf="flex-start"
            as="p"
            mb="auto"
            key={pIndex}
          >
            {paragraph}
          </Text>
        ))}
      {footer && (
        <>
          <Divider
            mt={4}
            borderColor="transparent"
            color="transparent"
            bgColor={
              colorMode === 'light' ? 'blackAlpha.300' : 'blackAlpha.500'
            }
          />
          <Box borderTopWidth="1px" pt={4}>
            {footer}
          </Box>
        </>
      )}
    </Box>
  )
}
