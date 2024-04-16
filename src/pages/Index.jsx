import React from "react";
import { Box, Heading, Text, Image, Stack, Flex, Button, useColorModeValue } from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <Box>
      <Flex minH={"100vh"} align={"center"} justify={"center"} py={12} bg={useColorModeValue("gray.100", "gray.800")}>
        <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
          <Stack align={"center"}>
            <Heading fontSize={"4xl"}>Enter the World of The Terrible Teddies</Heading>
            <Text fontSize={"lg"} color={"gray.600"}>
              Discover a collection of teddy bears transformed into the stuff of nightmares
            </Text>
          </Stack>
          <Box rounded={"lg"} bg={useColorModeValue("white", "gray.700")} boxShadow={"lg"} p={8}>
            <Stack spacing={4}>
              <Image src="https://images.unsplash.com/photo-1583845981240-4330f9c6b9ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzY2FyeSUyMHRlZGR5JTIwYmVhcnxlbnwwfHx8fDE3MTMyMjYxNjh8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Scary Teddy Bear" objectFit="cover" rounded={"md"} />
              <Text>Welcome to The Terrible Teddies, a unique project that explores the darker side of childhood toys. These once cuddly creatures have been transformed into sinister and terrifying creations that are sure to haunt your dreams.</Text>
              <Stack spacing={10}>
                <Button as={Link} to="/gallery" bg={"blue.400"} color={"white"} _hover={{ bg: "blue.500" }}>
                  View the Gallery
                </Button>
                <Button leftIcon={<FaGithub />} as={"a"} href={"https://github.com/yourusername/the-terrible-teddies"} target={"_blank"}>
                  View on GitHub
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </Box>
  );
};

export default Index;
