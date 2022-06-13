import {
  Box,
  Container,
  Stack,
  Text,
  Link,
  useColorModeValue,
  Center,
} from "@chakra-ui/react";

export default function SmallWithNavigation() {
  return (
    <Box
      // bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container
        // as={Stack}
        py={4}
        // direction={{ base: "column", md: "row" }}
        // spacing={4}
        // justify={{ base: "center", md: "space-between" }}
        // align={{ base: "center", md: "center" }}
      >
        {/* <Stack direction={"row"} spacing={6}>
          <Link href={"#"}>Home</Link>
          <Link href={"#"}>About</Link>
          <Link href={"#"}>Blog</Link>
          <Link href={"#"}>Contact</Link>
        </Stack> */}
        <Center>
          <Text> All rights reserved © 2022</Text>
        </Center>
      </Container>
    </Box>
  );
}
