import React from "react";
import {
  useBreakpointValue,
  Heading,
  Flex,
  LinkOverlay,
  Text,
  LinkBox,
  Code,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { Logo } from "./Logo";
import { Navigation } from "../Navigation/Navigation";
import { MobileNavigation } from "../Navigation/MobileNavigation";
import { ColorModeSwitcher } from "../Navigation/ColorModeSwitcher";

export const Header = () => {
  const isMobile = useBreakpointValue([true, true, false]);
  const logoHeight = useBreakpointValue(["40px", "40px", "70px"]);

  return (
    <Flex
      justify="space-between"
      align="center"
      w="100%"
      position="relative"
      p={4}
      boxShadow="lg"
    >
      <Flex direction="row" align="center">
        {isMobile && <MobileNavigation />}
        <LinkBox>
          <LinkOverlay
            as={RouterLink}
            to="/"
            onClick={(e) => e.stopPropagation()}
            display="flex"
            flexDirection="row"
            alignItems="center"
          >
            <Logo
              h={logoHeight}
              pointerEvents="none"
              boxShadow="0 2px #47ebdd, -2px 0 #fff833, 2px 0 #7171ef, 0 -2px 0 #f1818a"
              borderRadius="50%"
              mr={3}
            />

            <Flex direction="column" justify="center" flexGrow={0}>
              <Heading size="lg" variant="siteTitle">
                Cristin O'Connor
              </Heading>
              <Heading variant="siteSubtitle" size={isMobile ? "sm" : "md"}>
                Front End Engineer
              </Heading>
            </Flex>
          </LinkOverlay>
        </LinkBox>
      </Flex>

      {isMobile ? <ColorModeSwitcher /> : <Navigation />}
    </Flex>
  );
};
