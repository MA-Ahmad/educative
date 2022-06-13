import React from "react";
import { SimpleGrid, Box, Container } from "@chakra-ui/react";

const Res = () => {
  return (
    <div>
      <SimpleGrid columns={[1, null, 3]} spacing={5}>
        <Box bg="tomato" height="80px"></Box>
        <Box bg="tomato" height="80px"></Box>
        <Box bg="tomato" height="80px"></Box>
        <Box bg="tomato" height="80px"></Box>
        <Box bg="tomato" height="80px"></Box>
        <Box bg="tomato" height="80px"></Box>
      </SimpleGrid>
    </div>
  );
};

export default Res;
