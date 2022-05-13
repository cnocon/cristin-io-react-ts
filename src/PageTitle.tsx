import React from "react";
import {
  Heading,
  Divider,
  Box,
  useColorModeValue,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "@chakra-ui/react";
import { useLocation } from "react-router-dom";

export const PageTitle: React.FC<{
  title?: string;
  icon?: any;
}> = ({ title, icon, children }) => {
  // const iconColor = useColorModeValue("gray.300", "gray.700");
  return icon && title ? (
    <Box mb={4}>
      <Breadcrumb>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink href="#">{title}</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>

      <Box display="flex" alignItems="center">
        {/* <Box fontSize="3xl" color={iconColor}>
          {icon}&nbsp;
        </Box> */}

        <Heading size="xl">{title}</Heading>
      </Box>
      <Divider />
    </Box>
  ) : null;
};
