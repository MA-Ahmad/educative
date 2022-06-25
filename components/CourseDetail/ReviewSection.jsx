/* eslint-disable react-hooks/rules-of-hooks */
import {
  chakra,
  Box,
  Flex,
  Text,
  Stack,
  HStack,
  Avatar,
  useColorModeValue,
} from '@chakra-ui/react'
import Pagination from './Pagination'

const SimpleReview = ({ reviewData, ratingSummary }) => {
  return (
    <>
      <Box mb={8}>
        <chakra.h1 fontSize="3xl" fontWeight="bold" mb={4}>
          Rating Summary
        </chakra.h1>
        <Stack spacing={3}>
          <Box>
            <HStack spacing={3}>
              <Flex alignItems="center" justify="start">
                {Array.from(Array(4).keys()).map((id) => {
                  return <Star key={id} fillColor="#EACA4E" />
                })}
                {Array.from(Array(5 - 4).keys()).map((id) => {
                  return <Star key={id} fillColor="#e2e8f0" />
                })}
              </Flex>
              <Text fontWeight="bold" fontSize="lg">
                4.0
              </Text>
            </HStack>
            <Text fontWeight="bold" fontSize="md">
              1355 ratings
            </Text>
          </Box>

          <Stack direction="column" spacing={1}>
            {ratingSummary.map((data) => {
              return (
                <HStack key={data.id} spacing={5}>
                  <Text fontWeight="bold" fontSize="md">
                    {data.rating}
                  </Text>
                  <Box w={{ base: '100%', md: '70%' }}>
                    <Box
                      w="100%"
                      bg={useColorModeValue('gray.300', 'gray.600')}
                      rounded="md"
                    >
                      <Box
                        w={data.percentage}
                        h={3}
                        bg="yellow.400"
                        rounded="md"
                      ></Box>
                    </Box>
                  </Box>
                  <Text fontWeight="bold" fontSize="md">
                    {data.percentage}
                  </Text>
                </HStack>
              )
            })}
          </Stack>
        </Stack>
      </Box>

      <Box>
        <chakra.h1 fontSize="3xl" fontWeight="bold" mb={4}>
          Recent Reviews
        </chakra.h1>
        <Stack direction="column" spacing={5}>
          {reviewData.map((review, index) => {
            return (
              <Box key={index} maxW="2xl">
                <HStack spacing={3} mb={2}>
                  <Avatar
                    size="md"
                    name={review.userName}
                    src={review.avatarSrc}
                  />
                  <Stack direction="column" spacing={2}>
                    <Text fontWeight="bold" fontSize="md">
                      {review.userName}
                    </Text>
                    <Flex alignItems="center" justify="start">
                      {Array.from(Array(review.stars).keys()).map((id) => {
                        return <Star key={id} fillColor="#EACA4E" />
                      })}
                      {Array.from(Array(5 - review.stars).keys()).map((id) => {
                        return <Star key={id} fillColor="#e2e8f0" />
                      })}
                    </Flex>
                  </Stack>
                </HStack>
                <Text
                  color={useColorModeValue('gray.700', 'gray.400')}
                  fontSize="0.87rem"
                  textAlign="left"
                  lineHeight="1.375"
                  fontWeight="300"
                >
                  {review.review}
                </Text>
              </Box>
            )
          })}
        </Stack>
      </Box>
      <Pagination />
    </>
  )
}

const Star = ({ fillColor }) => {
  return (
    <svg
      style={{
        width: '1rem',
        height: '1rem',
        fill: fillColor,
        marginRight: '0.25rem',
      }}
      viewBox="0 0 1000 1000"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M972 380c9 28 2 50-20 67L725 619l87 280c11 39-18 75-54 75-12 0-23-4-33-12L499 790 273 962a58 58 0 0 1-78-12 50 50 0 0 1-8-51l86-278L46 447c-21-17-28-39-19-67 8-24 29-40 52-40h280l87-279c7-23 28-39 52-39 25 0 47 17 54 41l87 277h280c24 0 45 16 53 40z" />
    </svg>
  )
}

export default SimpleReview
