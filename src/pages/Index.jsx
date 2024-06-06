import { Container, Text, VStack, Box, Flex, Spacer, Button, IconButton } from "@chakra-ui/react";
import { FaHome, FaInfoCircle } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl">
      <Flex as="nav" bg="blue.500" color="white" padding="1.5rem" alignItems="center">
        <Box fontSize="xl" fontWeight="bold">
          MyApp
        </Box>
        <Spacer />
        <Box>
          <Button variant="ghost" colorScheme="whiteAlpha" leftIcon={<FaHome />}>
            Home
          </Button>
          <Button variant="ghost" colorScheme="whiteAlpha" leftIcon={<FaInfoCircle />}>
            About
          </Button>
        </Box>
      </Flex>
      <Container centerContent maxW="container.md" height="80vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
        <VStack spacing={4}>
          <Text fontSize="2xl">Your Blank Canvas</Text>
          <Text>Chat with the agent to start making edits.</Text>
        </VStack>
      </Container>
    </Container>
  );
};

export default Index;