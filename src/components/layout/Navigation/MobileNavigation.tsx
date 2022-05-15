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
  useColorModeValue,
  Divider,
} from "@chakra-ui/react";
import { BsList } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import { BsHouse, BsBriefcase, BsNewspaper, BsBook } from "react-icons/bs";

export const MobileNavigation: React.FC = () => {
  const activeBgColor = useColorModeValue("gray.100", "gray.500");
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
        <DrawerContent position="relative" zIndex="1402">
          <DrawerCloseButton />

          <List
            spacing={4}
            __css={{
              ".active": { backgroundColor: activeBgColor },
            }}
          >
            <ListItem
              onClick={(e) => {
                onClose();
              }}
            >
              <Link
                px={4}
                as={NavLink}
                to="/"
                py={2}
                display="flex"
                alignItems="center"
              >
                <BsHouse />
                &nbsp; Home
              </Link>
            </ListItem>
            <Divider />
            <ListItem
              onClick={(e) => {
                onClose();
              }}
            >
              <Link
                px={4}
                as={NavLink}
                to="/resume"
                py={2}
                display="flex"
                alignItems="center"
              >
                <BsBriefcase />
                &nbsp; Résumé
              </Link>
            </ListItem>
            <Divider />
            <ListItem
              onClick={(e) => {
                onClose();
              }}
            >
              <Link
                px={4}
                as={NavLink}
                to="/portfolio"
                py={2}
                display="flex"
                alignItems="center"
              >
                <BsBook />
                &nbsp; Portfolio
              </Link>
            </ListItem>
            <Divider />
            <ListItem
              onClick={(e) => {
                onClose();
              }}
            >
              <Link
                px={4}
                as={NavLink}
                to="/articles"
                py={2}
                display="flex"
                alignItems="center"
              >
                <BsNewspaper />
                &nbsp; Articles
              </Link>
            </ListItem>
            <Divider />
          </List>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};
