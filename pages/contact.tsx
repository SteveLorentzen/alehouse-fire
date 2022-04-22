import {Flex, Heading} from "@chakra-ui/react";
import {PageContentContainer} from "components/ui/page-content-container";
import {PageHeading} from "components/ui/page-heading";
import Head from "next/head";

export default function Contact() {
  return (
    <PageContentContainer>
      <Head>
        <title>Contact</title>
        <meta
          name="description"
          content="How to contact Alehouse Fire for booking or other inquiries"
        />
      </Head>
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
