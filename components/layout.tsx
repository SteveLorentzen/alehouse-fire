import React from "react";
import Link from "next/link";
import {Box, Flex, List, ListItem} from "@chakra-ui/react";
import {generateKey} from "crypto";

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
  return (
    <Flex
      display={{base: "hidden", sm: "flex"}}
      justify="space-between"
      w="100%"
      h="5rem"
      align="center"
      paddingX="3rem"
    >
      <Flex fontSize="1.5rem" _hover={{color: "gold"}}>
        <Link href="/">
          <a>Alehouse Fire</a>
        </Link>
      </Flex>
      <List
        display="flex"
        justifyContent="space-between"
        flexBasis={{base: "25rem", md: "30rem", lg: "35rem", xl: "40rem"}}
      >
        {navButtons.map((navButton) => {
          return (
            <ListItem
              key={navButton.name}
              _hover={{color: "gold"}}
              fontSize="1.3rem"
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
      bg="gray.700"
      align="center"
      color="white"
    >
      <Header />
      <Box paddingX="3rem">
        <Flex maxW="80rem" margin="auto">
          {children}
        </Flex>
      </Box>
      <Footer />
    </Flex>
  );
}
