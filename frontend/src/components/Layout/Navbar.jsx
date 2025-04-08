import { Flex, Heading, HStack, Text } from "@chakra-ui/react";
import React from "react";

const Navbar = () => {
  return (
    <Flex
      w="100vw"
      h="100px"
      bg="blue.500"
      justifyContent="center"
      alignItems="center"
    >
      <HStack w="90%" justifyContent="space-between" color="white">
        <Heading size="4xl">Tasks</Heading>
      </HStack>
    </Flex>
  );
};

export default Navbar;
