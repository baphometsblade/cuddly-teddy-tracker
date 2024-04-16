import React from "react";
import { Box, Heading, SimpleGrid, Image } from "@chakra-ui/react";

const Gallery = () => {
  return (
    <Box p={8}>
      <Heading as="h1" mb={8}>
        Terrible Teddy Gallery
      </Heading>
      <SimpleGrid columns={[1, 2, 3]} spacing={10}>
        <Image src="https://images.unsplash.com/photo-1600804340584-c7db2eacf0bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwyfHxzY2FyeSUyMHRlZGR5JTIwYmVhcnxlbnwwfHx8fDE2ODEzMzc2NTh8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Scary Teddy 1" objectFit="cover" />
        <Image src="https://images.unsplash.com/photo-1601814933824-fd798254e4d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwzfHxzY2FyeSUyMHRlZGR5JTIwYmVhcnxlbnwwfHx8fDE2ODEzMzc2NTh8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Scary Teddy 2" objectFit="cover" />
        <Image src="https://images.unsplash.com/photo-1560964280-88b68371db7b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHw0fHxzY2FyeSUyMHRlZGR5JTIwYmVhcnxlbnwwfHx8fDE2ODEzMzc2NTh8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Scary Teddy 3" objectFit="cover" />
      </SimpleGrid>
    </Box>
  );
};

export default Gallery;
