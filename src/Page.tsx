import React from "react";
import { Heading, VStack, Box } from "@chakra-ui/react";
import { Header } from "./components/layout/Header/Header";
import { PageTitle } from "./PageTitle";
export const Page: React.FC<{ title?: string; icon?: any }> = ({
  title,
  icon,
  children,
}) => {
  return (
    <VStack p={4} spacing={8} w="100%">
      <Box w="100%">
        <PageTitle title={title} icon={icon} />
        {children}
      </Box>
    </VStack>
  );
};
