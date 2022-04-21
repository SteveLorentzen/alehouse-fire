import {Flex, Heading} from "@chakra-ui/react";
import {PageContentContainer} from "components/ui/page-content-container";
import {PageHeading} from "components/ui/page-heading";

export default function Contact() {
  return (
    <PageContentContainer>
      <PageHeading text="Contact" />
      <Flex direction="column" marginBottom="12rem">
        <Heading as="h2" fontSize="1.2rem" marginBottom="1rem" color="gold">
          For booking and other inquiries email:
        </Heading>
        <Heading
          as="h3"
          fontSize={{base: "1.35rem", sm: "2.3rem", md: "2.5rem"}}
          fontWeight="semilight"
        >
          AlehouseFireBand@gmail.com
        </Heading>
      </Flex>
    </PageContentContainer>
  );
}
