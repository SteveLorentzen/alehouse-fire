import {Heading} from "@chakra-ui/react";

export function PageHeading({text}: {text: string}) {
  return (
    <Heading
      as="h1"
      fontSize="5rem"
      fontWeight="light"
      marginY="4rem"
      fontFamily="Almendra SC"
    >
      {text}
    </Heading>
  );
}
