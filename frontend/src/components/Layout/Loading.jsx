import { Flex, Spinner, Text, VStack } from "@chakra-ui/react";

const Loading = () => {
  return (
    <Flex
      h="calc(100vh - 100px)"
      w="100vw"
      justifyContent="center"
      alignItems="center"
    >
      <VStack colorPalette="teal">
        <Spinner color="colorPalette.600" />
        <Text color="colorPalette.600">Loading...</Text>
      </VStack>
    </Flex>
  );
};

export default Loading;
