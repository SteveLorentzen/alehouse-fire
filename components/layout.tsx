import React from "react";
import Link from "next/link";
import {Box, Flex, List, ListItem} from "@chakra-ui/react";
import {generateKey} from "crypto";
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

  return (
    <Flex
      display={{base: "hidden", sm: "flex"}}
      justify="space-between"
      w="100%"
      h="5rem"
      align="center"
      paddingX={{base: "1rem", lg: "3rem"}}
    >
      <Flex fontSize="1.5rem" _hover={{color: "gold"}}>
        <Link href="/">
          <a>Alehouse Fire</a>
        </Link>
      </Flex>
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
    </Flex>
  );
}

function Footer() {
  return <Flex h="15rem" bg="gray.900" w="100%"></Flex>;
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
    >
      <Header />
      <Box paddingX="2.5rem">
        <Flex maxW="80rem" margin="auto">
          {children}
        </Flex>
      </Box>
      <Footer />
    </Flex>
  );
}
