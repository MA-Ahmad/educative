import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  HStack,
  Heading,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";

import NextLink from "next/link";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import { AiFillCode } from "react-icons/ai";

export default function Header() {
  const { isOpen, onClose, onToggle } = useDisclosure();

  return (
    <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
      <Flex
        // bg={useColorModeValue("white", "gray.800")}
        // color={useColorModeValue("gray.600", "white")}
        minH={"60px"}
        py={{ base: 1 }}
        px={{ base: 1 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
      >
        <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
          <HStack spacing="0px">
            <AiFillCode size={24} />
            <NextLink
              href={{
                pathname: "/",
              }}
              passHref
            >
              <Link>
                <Text
                  fontSize="2xl"
                  textAlign={useBreakpointValue({ base: "center", md: "left" })}
                  fontFamily={"heading"}
                  color={useColorModeValue("gray.800", "white")}
                >
                  My&nbsp;Academy
                </Text>
              </Link>
            </NextLink>
          </HStack>
        </Flex>

        <Stack
          flex={{ base: 1, md: 5 }}
          justify={"flex-end"}
          direction={"row"}
          spacing={2}
        >
          <Flex display={{ base: "none", md: "flex" }} ml={20}>
            <DesktopNav />
          </Flex>
        </Stack>

        <Flex
          // flex={{ base: 1, md: "auto" }}
          // ml={{ base: -2 }}
          display={{ base: "end", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <ColorModeSwitcher />
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  // const linkColor = useColorModeValue("gray.600", "gray.200");
  // const linkHoverColor = useColorModeValue("gray.800", "white");
  // const popoverContentBgColor = useColorModeValue("white", "gray.800");

  return (
    <Stack direction={"row"} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <NextLink
                href={{
                  pathname: navItem.navigate_to,
                }}
                passHref
              >
                <Link>{navItem.label}</Link>
              </NextLink>
            </PopoverTrigger>
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      p={4}
      display={{ md: "none" }}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, navigate_to }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        justify={"space-between"}
        align={"center"}
        _hover={{
          textDecoration: "none",
        }}
      >
        <NextLink
          href={{
            pathname: navigate_to,
          }}
          passHref
        >
          <Link> {label} </Link>
        </NextLink>
      </Flex>
    </Stack>
  );
};

// interface NavItem {
//   label: string;
//   subLabel?: string;
//   children?: Array<NavItem>;
//   href?: string;
// }

const NAV_ITEMS = [
  {
    label: "Sign In",
    navigate_to: "/sign-in",
  },
  {
    label: "Sign Up",
    navigate_to: "/sign-up",
  },
];
