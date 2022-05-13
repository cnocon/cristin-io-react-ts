import React, { useRef, useEffect, useState } from "react";
import { Box, Text, Container } from "@chakra-ui/react";

export const Elevator: React.FC = () => {
  const spanOne = useRef<HTMLParagraphElement>(null);
  const spanTwo = useRef<HTMLParagraphElement>(null);
  const spanThree = useRef<HTMLParagraphElement>(null);
  const spanFour = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (
      spanOne.current &&
      spanTwo.current &&
      spanThree.current &&
      spanFour.current
    ) {
      const refs = [spanOne, spanTwo, spanThree, spanFour];
      let activeI = 1;
      let prevI = 0;
      let activeEl = refs[activeI].current;
      let prevEl = refs[prevI].current;
      setInterval(() => {
        if (activeEl && prevEl) {
          activeEl = refs[activeI].current;
          prevEl = refs[prevI].current;

          if (activeEl && prevEl) {
            activeEl.style.transition = "opacity 3s ease";
            prevEl.style.transition = "opacity 2s ease";
            activeEl.style.opacity = "1";
            prevEl.style.opacity = "0";
          }

          prevI = prevI >= refs.length - 1 ? 0 : prevI + 1;
          activeI = activeI >= refs.length - 1 ? 0 : activeI + 1;
        }
      }, 3000);
    }
  }, []);

  return (
    <Container maxW="xl">
      <Box position="relative" textAlign="center" fontSize="xl" p={4}>
        <Box position="absolute" left="50%" transform="translateX(-50%)">
          Hi. I'm
          <Text
            ref={spanOne}
            fontWeight="700"
            style={{
              display: "inline-block",
              opacity: "1",
              position: "absolute",
            }}
          >
            &nbsp;a front end engineer.
          </Text>
          <Text
            ref={spanTwo}
            fontWeight="700"
            style={{
              display: "inline-block",
              opacity: "0",
              position: "absolute",
            }}
          >
            &nbsp;a programming tutor.{" "}
          </Text>
          <Text
            ref={spanThree}
            fontWeight="700"
            style={{
              display: "inline-block",
              opacity: "0",
              position: "absolute",
            }}
          >
            &nbsp;an advocate for I&D.{" "}
          </Text>
          <Text
            ref={spanFour}
            fontWeight="700"
            style={{
              display: "inline-block",
              opacity: "0",
              position: "absolute",
            }}
          >
            &nbsp;a passionate learner.{" "}
          </Text>
        </Box>
        <Text>I live and work in beautiful Utah.</Text>
        <Text>I love to code new things.</Text>
      </Box>
    </Container>
  );
};
