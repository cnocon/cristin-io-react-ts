import React from "react";
import { Page } from "./Page";
import { Text, Heading, Center } from "@chakra-ui/react";

export const Home: React.FC = () => {
  return (
    <Page>
      <Heading size="4xl">
        <Center>
          <Text fontWeight="600">Hi.&nbsp;</Text>
          <Text fontWeight="300">I love what I do.</Text>
        </Center>
      </Heading>
    </Page>
  );
};
