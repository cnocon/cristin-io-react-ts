import React from "react";
import { Page } from "./Page";
import { BsBriefcase } from "react-icons/bs";

export const Resume: React.FC = () => {
  return (
    <Page title="Résumé" icon={<BsBriefcase />}>
      Resume Content
    </Page>
  );
};
