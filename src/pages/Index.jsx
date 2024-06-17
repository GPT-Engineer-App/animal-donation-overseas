import { Container, Text, VStack, Heading, Button, Box, Image } from "@chakra-ui/react";
import { FaDonate } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={6}>
        <Heading as="h1" size="2xl" textAlign="center">Animal Donation</Heading>
        <Image src="/images/animal-donation.jpg" alt="Animal Donation" borderRadius="md" />
        <Text fontSize="lg" textAlign="center">Help us make a difference in the lives of animals. Your donation can save lives and provide necessary care for animals in need.</Text>
        <Button colorScheme="teal" size="lg" leftIcon={<FaDonate />}>Donate Now</Button>
      </VStack>
    </Container>
  );
};

export default Index;