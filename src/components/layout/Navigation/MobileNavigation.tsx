import React from "react";
import {
  List,
  ListItem,
  IconButton,
  Box,
  Drawer,
  Link,
  DrawerOverlay,
  DrawerContent,
  useDisclosure,
  DrawerCloseButton,
} from "@chakra-ui/react";
import { BsList } from "react-icons/bs";
import { NavLink, useNavigate } from "react-router-dom";

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
        mr={2}
      />

      <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent p={4} position="relative" zIndex="1402">
          <DrawerCloseButton />

          <List
            spacing={4}
            __css={{ ".active": { textDecoration: "underline" } }}
          >
            <ListItem
              onClick={(e) => {
                onClose();
              }}
            >
              <Link as={NavLink} to="/" py={2} display="block">
                Home
              </Link>
            </ListItem>
            <ListItem
              onClick={(e) => {
                onClose();
              }}
            >
              <Link as={NavLink} to="/resume" py={2} display="block">
                Résumé
              </Link>
            </ListItem>
            <ListItem
              onClick={(e) => {
                onClose();
              }}
            >
              <Link as={NavLink} to="/portfolio" py={2} display="block">
                Portfolio
              </Link>
            </ListItem>
            <ListItem
              onClick={(e) => {
                onClose();
              }}
            >
              <Link as={NavLink} to="/articles" py={2} display="block">
                Articles
              </Link>
            </ListItem>
          </List>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};
