import React from "react";
import {
  Heading,
  Divider,
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from "@chakra-ui/react";

export const PageTitle: React.FC<{
  title?: string;
  icon?: any;
}> = ({ title, icon, children }) => {
  // const iconColor = useColorModeValue("gray.300", "gray.700");
  return icon && title ? (
    <Box mb={4}>
      <Breadcrumb>
        <BreadcrumbItem>
          <BreadcrumbLink
            textStyle="breadcrumb"
            href="/"
            textDecoration="underline"
          >
            Home
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink textStyle="breadcrumb" href="#">
            {title}
          </BreadcrumbLink>
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
