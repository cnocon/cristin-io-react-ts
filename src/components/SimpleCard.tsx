import React from 'react'
import { useStyleConfig, Divider, Box, Text } from '@chakra-ui/react'

interface ISimpleCardProps {
  title?: string
  content?: string[]
  footer?: any
  variant?: string
}

export const SimpleCard: React.FC<ISimpleCardProps> = ({
  title,
  content,
  footer,
  variant,
}) => {
  const styles = useStyleConfig('SimpleCard', { variant })

  return (
    <Box __css={styles}>
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
