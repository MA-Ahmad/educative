import * as React from 'react'
import {
  Box,
  Image,
  Link,
  Icon,
  Flex,
  Stack,
  Text,
  Avatar,
  chakra,
  Button,
  HStack,
  Skeleton,
  AspectRatio,
  useBreakpointValue,
  useColorModeValue,
} from '@chakra-ui/react'
import { PriceTag } from './PriceTag'
import NextLink from 'next/link'
import { FaStar } from 'react-icons/fa'
import { BsClock, BsBarChartLine } from 'react-icons/bs'
import { MdLanguage } from 'react-icons/md'
import Badge from '../shared/Badge'
import VerticalDivider from '../shared/VerticalDivider'

const CourseCard = (props) => {
  const { course, rootProps } = props
  const { name, imageUrl, price } = course
  const textColor = useColorModeValue('gray.600', 'gray.400')

  return (
    <div>
      <Stack
        spacing={useBreakpointValue({
          base: '4',
          md: '5',
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
                base: 'md',
                md: 'xl',
              })}
            />
          </AspectRatio>
          <Box
            position="absolute"
            top="3"
            left="3"
            p={1.5}
            bg="yellow.400"
            rounded="md"
          >
            <Text fontSize="xs" lineHeight={1}>
              ABCD
            </Text>
          </Box>
        </Box>

        {/* Course name and Price  */}
        <Stack>
          <Stack spacing="1" direction="row" justify="space-between">
            <Text fontWeight="medium" color={textColor}>
              {name}
            </Text>
            <PriceTag price={price} currency="USD" />
          </Stack>
          <Stack
            spacing="2"
            direction="row"
            alignItems="center"
            justifyContent="center"
          >
            <Avatar src="" size="sm" />

            <Text fontWeight="medium" color={textColor}>
              Trainer Name
            </Text>
          </Stack>

          {/* Star (total  Reviews) | Total enrollments */}
          <Stack
            direction={{ base: 'column', sm: 'row' }}
            justifyContent="center"
            alignItems="center"
          >
            <HStack>
              <Icon as={FaStar} color="yellow.400" />
              <Text fontSize="sm" color={textColor}>
                4.4 (12 Reviews)
              </Text>
            </HStack>
            <VerticalDivider
              height="15px"
              display={{ base: 'none', sm: 'block' }}
            />
            <Text fontSize="sm" color={textColor}>
              100 Enrollments
            </Text>
          </Stack>
        </Stack>

        {/*  Badges */}
        <Flex direction="row" justifyContent="center" mt={2} flexWrap="wrap">
          <Badge icon={MdLanguage} data="English" size="sm" />
          <Badge icon={BsBarChartLine} data="Intermediate" size="sm" />
          <Badge icon={BsClock} data="01H:30M" size="sm" />
        </Flex>

        <Button size="md" colorScheme="teal" variant="solid">
          <NextLink
            href={{
              pathname: '/course/[slug]',
              query: {
                slug: 'react_js',
              },
            }}
            passHref
          >
            <Link sx={{ 'text-decoration': 'none' }}>Start Learning...</Link>
          </NextLink>
        </Button>
      </Stack>
    </div>
  )
}

export default CourseCard
