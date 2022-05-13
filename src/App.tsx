import { ChakraProvider } from "@chakra-ui/react";
import { Header } from "./components/layout/Header/Header";
import { theme } from "./theme";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Home";
import { Resume } from "./Resume";
import { Portfolio } from "./Portfolio";
import { Articles } from "./Articles";

export const App = () => {
  return (
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="resume" element={<Resume />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="articles" element={<Articles />} />
        </Routes>
      </ChakraProvider>
    </BrowserRouter>
  );
};
