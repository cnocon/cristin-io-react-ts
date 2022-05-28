import React from 'react'
import { Divider, Box, Text } from '@chakra-ui/react'

interface ISimpleCardProps {
  title?: string
  content?: string[]
  footer?: any
}

export const SimpleCard: React.FC<ISimpleCardProps> = ({
  title,
  content,
  footer,
}) => {
  return (
    <Box
      m={4}
      p={4}
      boxShadow="lg"
      borderWidth="1px"
      borderRadius="base"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      textAlign="center"
    >
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
    </Box>
  )
}
