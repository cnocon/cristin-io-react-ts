import React from 'react'
import { Box, ChakraProvider, Flex } from '@chakra-ui/react'
import { Header } from './components/layout/Header/Header'
import { Footer } from './components/layout/Footer/Footer'
import { ioTheme } from './theme'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './Home'
import { Resume } from './Resume'
import { Portfolio } from './Portfolio'
import { Coursework } from './Coursework'
import { Articles } from './Articles'

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ChakraProvider theme={ioTheme}>
        <Flex direction="column" height="100vh">
          <Header />

          <Box textStyle="text">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="resume" element={<Resume />} />
              <Route path="portfolio" element={<Portfolio />} />
              <Route path="articles" element={<Articles />} />
              <Route path="coursework" element={<Coursework />} />
            </Routes>
          </Box>
          <Footer />
        </Flex>
      </ChakraProvider>
    </BrowserRouter>
  )
}
