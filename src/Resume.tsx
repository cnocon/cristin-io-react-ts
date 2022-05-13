import React from "react";
import { VStack } from "@chakra-ui/react";
import { Page } from "./Page";
import { FaBeer } from "react-icons/fa";

export const Resume = () => {
  return (
    <Page title="Résumé" icon={<FaBeer />}>
      Resume Content
    </Page>
  );
};
