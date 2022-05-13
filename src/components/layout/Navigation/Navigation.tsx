import React, { useState } from "react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Flex,
  Link,
  Spacer,
  IconButton,
  Box,
} from "@chakra-ui/react";
import { FaBars, FaRegWindowClose } from "react-icons/fa";
import { Link as RouterLink } from "react-router-dom";
import { ColorModeSwitcher } from "./ColorModeSwitcher";

export const Navigation: React.FC = () => {
  return (
    <Flex align="center" justify="space-around" flexGrow={1}>
      <Spacer />
      <Link as={RouterLink} to="/resume" mr={4}>
        Résumé
      </Link>
      <Link as={RouterLink} to="/portfolio" mr={4}>
        Portfolio
      </Link>
      <Link as={RouterLink} to="/articles" mr={4}>
        Articles
      </Link>
      <ColorModeSwitcher />
    </Flex>
  );
};
