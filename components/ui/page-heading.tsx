import {Heading, Flex} from "@chakra-ui/react";
import Image from "next/image";

export function PageHeading({text}: {text: string}) {
  return (
    <Flex direction="column" align="center">
      <Flex
        w="20rem"
        h="10rem"
        position="relative"
        transform="translateY(4rem)"
      >
        <Image src="/images/top.png" layout="fill" alt="" objectFit="contain" />
      </Flex>
      <Heading
        as="h1"
        fontSize="5rem"
        fontWeight="light"
        fontFamily="Almendra SC"
      >
        {text}
      </Heading>
      <Flex
        w="10rem"
        h="10rem"
        position="relative"
        transform="translateY(-4rem)"
      >
        <Image
          src="/images/bottom.png"
          layout="fill"
          alt=""
          objectFit="contain"
        />
      </Flex>
    </Flex>
  );
}
