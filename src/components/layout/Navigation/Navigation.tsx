import React from 'react'
import { Flex, Link, Spacer, useColorModeValue } from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'
import { ColorModeSwitcher } from './ColorModeSwitcher'

export const Navigation: React.FC = () => {
  const bgColor = useColorModeValue('brand.700', 'white')
  const hoverColor = useColorModeValue('brand.700', 'brand.500')
  const color = useColorModeValue('brand.700', 'brand.700')
  return (
    <Flex
      __css={{
        '.active': {
          backgroundColor: bgColor,
          color: color,
          backgroundImage: 'none',
        },
        '.active:hover': {
          color: hoverColor,
          backgroundColor: bgColor,
        },
      }}
      _hover={{ color: hoverColor }}
      align="center"
      justify="space-around"
      textAlign="right"
      flexGrow={1}
    >
      <Spacer />
      <Link
        as={NavLink}
        to="/resume"
        mr={4}
        px={2}
        py={1}
        borderRadius="base"
        display="inline-block"
      >
        Résumé
      </Link>
      <Link
        as={NavLink}
        to="/portfolio"
        mr={4}
        px={2}
        py={1}
        borderRadius="base"
        display="inline-block"
      >
        Portfolio
      </Link>
      <Link
        as={NavLink}
        to="/articles"
        mr={4}
        px={2}
        py={1}
        borderRadius="base"
        display="inline-block"
      >
        Articles
      </Link>
      <Link
        as={NavLink}
        to="/coursework"
        mr={4}
        px={2}
        py={1}
        borderRadius="base"
        display="inline-block"
      >
        Coursework
      </Link>
      <ColorModeSwitcher />
    </Flex>
  )
}
