import React from "react";
import { BoxProps, Flex, Box, Icon, Text, Divider } from "@chakra-ui/react";

interface ISection extends BoxProps {
  icon?: any;
  title?: string;
}

export const Section: React.FC<ISection> = ({
  icon,
  title,
  children,
  ...rest
}) => {
  return (
    <Box position="relative" w="100%" py={4} {...rest}>
      <Flex align="center">
        {icon && (
          <Icon
            as={icon}
            borderWidth="0.5px"
            w="30px"
            h="30px"
            p="5px"
            borderRadius="50%"
            borderColor="gray.500"
            color="gray.600"
          />
        )}
        {title && (
          <Text
            display="inline-block"
            mx={3}
            fontSize="xl"
            textStyle="sectionTitle"
          >
            {title}
          </Text>
        )}
        <Divider borderBottomWidth="0.5px" borderColor="gray.500" />
      </Flex>
      {children}
    </Box>
  );
};
