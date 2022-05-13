import React from "react";
import {
  useBreakpointValue,
  Heading,
  Flex,
  LinkOverlay,
  Container,
  LinkBox,
  Box,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { Logo } from "./Logo";
import { Navigation } from "../Navigation/Navigation";
import { MobileNavigation } from "../Navigation/MobileNavigation";
import { ColorModeSwitcher } from "../Navigation/ColorModeSwitcher";

export const Header: React.FC = () => {
  const isMobile = useBreakpointValue([true, true, false]);
  const logoHeight = useBreakpointValue(["34px", "34px", "70px"]);

  return (
    <Box w="100%" position="relative" py={4} boxShadow="lg" mb={4}>
      <Container w="100%" maxW="8xl">
        <Flex justify="space-between" align="center">
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
                  mr={4}
                />

                <Flex direction="column" justify="center" flexGrow={0}>
                  <Heading
                    size={isMobile ? "md" : "lg"}
                    variant="siteTitle"
                    fontFamily="Cedarville Cursive"
                  >
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
      </Container>
    </Box>
  );
};
