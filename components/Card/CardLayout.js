import { Box, SimpleGrid, Heading, Text } from "@chakra-ui/react";
import * as React from "react";
import { products } from "./data";
import ProductCard from "./ProductCard";
import ProductGrid from "./ProductGrid";

const CardLayout = () => (
  <Box
    maxW="7xl"
    mx="auto"
    px={{
      base: "4",
      md: "8",
      lg: "12",
    }}
    py={{
      base: "4",
      md: "8",
      lg: "12",
    }}
  >
    <ProductGrid>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </ProductGrid>
  </Box>
);

export default CardLayout;
