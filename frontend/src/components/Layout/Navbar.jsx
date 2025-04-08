import { Button, Flex, Heading, HStack, Text } from "@chakra-ui/react";
import React from "react";
import { ColorModeButton, useColorModeValue } from "../ui/color-mode";

const Navbar = () => {
  const bg = useColorModeValue("blue.500", "blue.800");

  return (
    <Flex
      w="100vw"
      h="100px"
      bg={bg}
      justifyContent="center"
      alignItems="center"
    >
      <HStack w="90%" justifyContent="space-between">
        <Heading size="4xl">Tasks</Heading>
        <HStack>
          <ColorModeButton />
        </HStack>
      </HStack>
    </Flex>
  );
};

export default Navbar;
