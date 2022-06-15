import {
  AspectRatio,
  Box,
  Button,
  HStack,
  Image,
  Link,
  Skeleton,
  Stack,
  Text,
  useBreakpointValue,
  useColorModeValue,
  SimpleGrid,
  Avatar,
  Badge,
} from "@chakra-ui/react";
import * as React from "react";
import Rating from "./Rating";
import FavouriteButton from "./FavouriteButton";
import { PriceTag } from "./PriceTag";
import { ST } from "next/dist/shared/lib/utils";
import NextLink from "next/link";
import { FaStar } from "react-icons/fa";

const ProductCard = (props) => {
  const { product, rootProps } = props;
  const { name, imageUrl, price, salePrice, rating } = product;
  return (
    <div>
      <Stack
        spacing={useBreakpointValue({
          base: "4",
          md: "5",
        })}
        {...rootProps}
      >
        <Box position="relative">
          <AspectRatio ratio={4 / 2}>
            <Image
              src={imageUrl}
              alt={name}
              draggable="false"
              fallback={<Skeleton />}
              borderRadius={useBreakpointValue({
                base: "md",
                md: "xl",
              })}
            />
          </AspectRatio>
          <FavouriteButton
            position="absolute"
            top="4"
            right="4"
            aria-label={`Add ${name} to your favourites`}
          />
        </Box>

        {/* ______________________________________
                        Course name and Price 
                 _______________________________________*/}

        <Stack>
          <Stack spacing="1" direction={"row"}>
            <Text
              fontWeight="medium"
              color={useColorModeValue("gray.700", "gray.400")}
            >
              {name}
            </Text>
            <PriceTag price={price} currency="USD" />
          </Stack>
          <Stack spacing="2" direction={"row"}>
            <Avatar src="" size="sm" />
            <Text> Trainer Name</Text>
          </Stack>

          {/*_______________________________________________________________
                          Star| total  Reviews | Total enrollments
                _________________________________________________________________*/}

          <HStack>
            <FaStar />
            <Text
              fontSize="sm"
              color={useColorModeValue("gray.600", "gray.400")}
            >
              4.4 (12 Reviews) |
            </Text>
            <Text
              fontSize="sm"
              color={useColorModeValue("gray.600", "gray.400")}
            >
              100 Enrollments
            </Text>
          </HStack>
        </Stack>

        {/*_______________________________________________________________
                                     Badges
         _________________________________________________________________*/}
        <Stack direction="row">
          <Badge>English</Badge>
          <Badge>Intermediate</Badge>
          <Badge>01H:30M</Badge>
        </Stack>

        <Button colorScheme="blue">
          <NextLink
            href={{
              pathname: "/course/[slug]",
              query: {
                slug: "react_js",
              },
            }}
            passHref
          >
            <Link> Start Learning...</Link>
          </NextLink>
        </Button>

        {/* <Link
          textDecoration="underline"
          fontWeight="medium"
          color={useColorModeValue("gray.600", "gray.400")}
        >
          Quick shop
        </Link> */}
      </Stack>
    </div>
  );
};

export default ProductCard;
