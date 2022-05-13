import React from "react";
import { Heading, VStack, Box } from "@chakra-ui/react";
import { Header } from "./components/layout/Header/Header";

export const PageTitle: React.FC<{
  title?: string;
  icon?: any;
}> = ({ title, icon, children }) => {
  return icon && title ? (
    <Heading size="xl">
      {children} {icon}
    </Heading>
  ) : null;
};
