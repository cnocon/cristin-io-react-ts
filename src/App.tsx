import React from "react";
import { Box, ChakraProvider, Flex } from "@chakra-ui/react";
import { Header } from "./components/layout/Header/Header";
import { Footer } from "./components/layout/Footer/Footer";
import { theme } from "./theme";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Home";
import { Resume } from "./Resume";
import { Portfolio } from "./Portfolio";
import { Articles } from "./Articles";

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <Flex direction="column" height="100vh">
          <Header />

          <Box>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="resume" element={<Resume />} />
              <Route path="portfolio" element={<Portfolio />} />
              <Route path="articles" element={<Articles />} />
            </Routes>
          </Box>

          <Footer />
        </Flex>
      </ChakraProvider>
    </BrowserRouter>
  );
};
