import React, { useState } from "react";
import {
  List,
  ListItem,
  Flex,
  Link,
  Spacer,
  IconButton,
  Box,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  useDisclosure,
  DrawerCloseButton,
  useColorModeValue,
} from "@chakra-ui/react";
import { BsX, BsList } from "react-icons/bs";

import { useNavigate } from "react-router-dom";
import { ColorModeSwitcher } from "./ColorModeSwitcher";

export const MobileNavigation: React.FC = () => {
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box>
      <IconButton
        icon={<BsList />}
        onClick={onOpen}
        fontSize="2xl"
        variant="ghosted"
        aria-label="Open Navigation"
      />

      <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <IconButton
          color="white"
          zIndex="1401" // chakra z-index for modals + 1
          fontSize="4xl"
          position="absolute"
          right={0}
          variant="ghosted"
          top={0}
          icon={<BsX color="white" />}
          onClick={onClose}
          aria-label="Close navigation"
        />
        <DrawerContent p={4} position="relative">
          <List spacing={4}>
            <ListItem onClick={(e) => navigate("/resume")}>Résumé</ListItem>
            <ListItem onClick={(e) => navigate("/portfolio")}>
              Portfolio
            </ListItem>
            <ListItem onClick={(e) => navigate("/articles")}>Articles</ListItem>
          </List>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};
