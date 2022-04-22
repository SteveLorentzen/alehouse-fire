import {Flex} from "@chakra-ui/react";
import React from "react";

export function PageContentContainer({
  children,
}: {
  children: React.ReactChild[] | React.ReactChild;
}) {
  return (
    <Flex
      direction="column"
      align="center"
      w="100%"
      minH="calc(100vh - 5rem - 15rem)"
    >
      {children}
    </Flex>
  );
}
