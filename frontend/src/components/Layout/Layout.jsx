import { Box, Flex, VStack } from "@chakra-ui/react";
import Navbar from "./Navbar";
import { Footer } from "./Footer";

const Layout = ({ children }) => {
  return (
    <VStack w="100vw" minH="100vh" bg="#FCFCFC">
      <Navbar />
      <Box w="100%">{children}</Box>
      <Footer />
    </VStack>
  );
};

export default Layout;
