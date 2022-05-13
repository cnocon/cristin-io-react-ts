import React from "react";
import { Flex, Link, Spacer, useColorModeValue } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { ColorModeSwitcher } from "./ColorModeSwitcher";

export const Navigation: React.FC = () => {
  const bgColor = useColorModeValue("brand.700", "white");
  const hoverColor = useColorModeValue("brand.700", "white");
  const color = useColorModeValue("white", "brand.700");
  return (
    <Flex
      __css={{
        ".active": {
          backgroundColor: bgColor,
          color: color,
          backgroundImage: "none",
        },
        ".active:hover": {
          color: hoverColor,
          backgroundColor: "transparent",
        },
      }}
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
      <ColorModeSwitcher />
    </Flex>
  );
};
