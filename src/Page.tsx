import React from 'react'
import { VStack, Container } from '@chakra-ui/react'
import { PageTitle } from './PageTitle'

export const Page: React.FC<{ title?: string; icon?: any }> = ({
  title,
  icon,
  children,
}) => {
  return (
    <VStack py={4} spacing={8} w="100%">
      <Container w="100%" maxW="8xl">
        <PageTitle title={title} icon={icon} />
        {children}
      </Container>
    </VStack>
  )
}
