import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";

const About = () => {
  return (
    <Box p={8}>
      <Heading as="h1" mb={4}>
        About The Terrible Teddies
      </Heading>
      <Text fontSize="xl">The Terrible Teddies is a unique project that explores the darker side of childhood toys. By transforming innocent teddy bears into nightmarish creations, it provokes thought about the nature of fear and the unexpected twists in life.</Text>
      <Text fontSize="xl" mt={4}>
        Each terrible teddy is meticulously hand-crafted to evoke a sense of unease and dread. Through disturbing features, unnatural colors, and eerie expressions, these bears become the stuff of nightmares.
      </Text>
      <Text fontSize="xl" mt={4}>
        Delve into the world of The Terrible Teddies - if you dare! Explore the gallery to see more of these haunting creations and ponder what dark twists might lurk in the most innocent of objects.
      </Text>
    </Box>
  );
};

export default About;
