import {Flex} from "@chakra-ui/react";
import React from "react";

export function PageContentContainer({
  children,
}: {
  children: React.ReactChild[] | React.ReactChild;
}) {
  return (
    <Flex direction="column" align="center" w="100%" marginBottom="10rem">
      {children}
    </Flex>
  );
}
