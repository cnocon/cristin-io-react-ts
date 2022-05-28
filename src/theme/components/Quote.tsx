import React from 'react'
import { useColorModeValue, Box, Icon } from '@chakra-ui/react'
import { FaQuoteLeft } from 'react-icons/fa'

interface IQuote {
  author?: string
  authorDetails?: string
}

export const Quote: React.FC<IQuote> = ({
  author,
  authorDetails,
  children,
}) => {
  const bgColor = useColorModeValue('white', 'brand.500')
  const color = useColorModeValue('black', 'white')
  const quoteColor = useColorModeValue('gray.500', 'brand.200')
  return (
    <Box position="relative" my={4}>
      <Box
        py={10}
        px={12}
        boxShadow="lg"
        bg={bgColor}
        color={color}
        borderWidth="1px"
        borderRadius="base"
        fontSize="xl"
        lineHeight={7}
        fontWeight="200"
      >
        <Icon
          as={FaQuoteLeft}
          position="absolute"
          top={10}
          left={6}
          color={quoteColor}
        />

        <Box>{children}</Box>
        {author && (
          <Box as="cite" display="block" fontWeight="400" mt={2}>
            {author}
            {authorDetails && `, ${authorDetails}`}
          </Box>
        )}
      </Box>
    </Box>
  )
}
