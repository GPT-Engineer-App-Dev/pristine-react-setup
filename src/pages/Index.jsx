import { Container, Text, VStack, Box, Flex, Spacer, IconButton } from "@chakra-ui/react";
import { FaHome } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Flex as="nav" bg="blue.500" color="white" p={4} align="center">
        <Box fontSize="xl" fontWeight="bold">
          MyApp
        </Box>
        <Spacer />
        <IconButton aria-label="Home" icon={<FaHome />} size="lg" variant="ghost" color="white" />
      </Flex>
      <Flex direction="column" justify="center" align="center" height="calc(100vh - 64px)">
        <VStack spacing={4}>
          <Text fontSize="2xl">Your Blank Canvas</Text>
          <Text>Chat with the agent to start making edits.</Text>
        </VStack>
      </Flex>
    </Container>
  );
};

export default Index;