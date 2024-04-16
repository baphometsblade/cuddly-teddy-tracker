import React from "react";
import { Box, Flex, HStack, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Box bg="gray.100" px={4}>
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        <HStack spacing={8} alignItems={"center"}>
          <Box>The Terrible Teddies</Box>
          <HStack as={"nav"} spacing={4}>
            <Link as={RouterLink} to="/">
              Home
            </Link>
            <Link as={RouterLink} to="/about">
              About
            </Link>
            <Link as={RouterLink} to="/gallery">
              Gallery
            </Link>
          </HStack>
        </HStack>
      </Flex>
    </Box>
  );
};

export default Navbar;
