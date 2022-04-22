import React from "react";
import Link from "next/link";
import {
  Box,
  Flex,
  IconButton,
  List,
  ListItem,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import {HamburgerIcon} from "@chakra-ui/icons";
import {useRouter} from "next/router";

const navButtons = [
  {
    name: "About",
    href: "/about",
  },

  {
    name: "Media",
    href: "/media",
  },
  {
    name: "Reviews",
    href: "/reviews",
  },
  {
    name: "Song List",
    href: "/song-list",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

function Header() {
  const router = useRouter();

  const {isOpen, onOpen, onClose} = useDisclosure();

  return (
    <Flex
      display={{base: "hidden", sm: "flex"}}
      justify="space-between"
      w="100%"
      h="5rem"
      align="center"
      paddingX={{base: "2rem", lg: "3rem"}}
    >
      <Flex
        fontSize="1.5rem"
        _hover={{color: "gold"}}
        color={router.pathname === "/" ? "gold" : "white"}
      >
        <Link href="/">
          <a>Alehouse Fire</a>
        </Link>
      </Flex>
      <IconButton
        display={{base: "block", md: "none"}}
        aria-label="navigation-menu"
        bg="transparent"
        onClick={onOpen}
        icon={<HamburgerIcon fontSize="2rem" />}
      />
      <List
        display={{base: "none", md: "flex"}}
        justifyContent="space-between"
        flexBasis={{base: "25rem", md: "30rem", lg: "35rem", xl: "40rem"}}
      >
        {navButtons.map((navButton) => {
          return (
            <ListItem
              key={navButton.name}
              _hover={{color: "gold"}}
              fontSize="1.3rem"
              color={navButton.href === router.pathname ? "gold" : "white"}
            >
              <Link href={navButton.href}>
                <a>{navButton.name}</a>
              </Link>
            </ListItem>
          );
        })}
      </List>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalContent
          flexDirection="column"
          minW="100%"
          minH="100%"
          margin="0"
          borderRadius="0"
          justifyContent="center"
          color="white"
          bg="gray.800"
          paddingY="4rem"
          paddingX={{base: "2rem", sm: "10rem"}}
          display={{base: "flex", md: "none"}}
        >
          <ModalCloseButton />
          <ModalBody display="flex" flexDirection="column">
            <List display="flex" flexDirection="column" marginTop="0">
              <ListItem
                fontSize="4rem"
                onClick={onClose}
                color={router.pathname === "/" ? "gold" : "white"}
              >
                <Link href="/">
                  <a>Home</a>
                </Link>
              </ListItem>
              {navButtons.map((navButton) => {
                return (
                  <ListItem
                    key={navButton.name}
                    fontSize="4rem"
                    onClick={onClose}
                    color={
                      router.pathname === navButton.href ? "gold" : "white"
                    }
                  >
                    <Link href={navButton.href}>
                      <a>{navButton.name}</a>
                    </Link>
                  </ListItem>
                );
              })}
            </List>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Flex>
  );
}

function Footer() {
  return <Flex justifySelf="flex-end" h="15rem" bg="gray.900" w="100%"></Flex>;
}

export default function Layout({children}: {children: React.ReactChild}) {
  return (
    <Flex
      direction="column"
      w="100%"
      bg="gray.800"
      align="center"
      color="white"
      fontSize="1.3rem"
      minH="100vh"
    >
      <Header />
      <Box paddingX="2.5rem">
        <Flex maxW="90rem" margin="auto">
          {children}
        </Flex>
      </Box>
      <Footer />
    </Flex>
  );
}
