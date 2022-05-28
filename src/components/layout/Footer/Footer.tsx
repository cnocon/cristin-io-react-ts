import React from '.*'
import { Box, Container, Flex, Divider, Text } from '.*'

export const Footer: React.FC = () => {
  return (
    <Box mt="auto">
      <Divider mt={4} />
      <Box w="100%" position="relative" py={4}>
        <Container w="100%" maxW="8xl">
          <Flex justify="space-between" align="center">
            <Text fontSize="sm">Copyright &copy;2022 Cristin O'Connor</Text>
          </Flex>
        </Container>
      </Box>
    </Box>
  )
}
