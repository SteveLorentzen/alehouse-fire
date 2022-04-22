import {Heading, Flex} from "@chakra-ui/react";
import Image from "next/image";

export function PageHeading({text}: {text: string}) {
  return (
    <Flex direction="column" w="100%">
      <Flex direction="column" align="center" marginY="5rem">
        <Flex w="18rem" h="3rem" position="relative">
          <Image
            src="/images/top.png"
            layout="fill"
            alt=""
            objectFit="contain"
          />
        </Flex>
        <Heading
          as="h1"
          fontSize={{base: "4.5rem", sm: "5rem"}}
          fontWeight="light"
          fontFamily="Almendra SC"
        >
          {text}
        </Heading>
        <Flex w="10rem" h="2rem" position="relative">
          <Image
            src="/images/bottom.png"
            layout="fill"
            alt=""
            objectFit="contain"
          />
        </Flex>
      </Flex>
      <hr style={{width: "100%", marginBottom: "4rem"}} />
    </Flex>
  );
}
