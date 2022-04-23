import {Flex, Heading, Text} from "@chakra-ui/react";
import type {NextPage} from "next";
import Image from "next/image";
import Head from "next/head";

const descriptionParagraphs = [
  "Alehouse Fire is an Irish, Americana, Bluegrass and Country Band that strives to provide the perfect combination of styles to best suit your event.",
  "If you've ever been to the pubs of Ireland, you know the feeling the music gives you. Everyone is your friend and you're singing along to songs you don't even know. Alehouse Fire's Irish Music takes you back to that feeling with a wide range of traditional and more modern Irish and Celtic tunes.",
  "With lightning fast banjo rolls, droning fiddle lines and amazing vocal harmony, Alehouse Fire's Americana, Bluegrass and Country performances create a rustic ambience that will win over even the most loyal city-folk. Break out the hay bales, market lights and old wagon wheels!",
  "Alehouse Fire can offer a lineup ranging from an acoustic duo or trio for small, intimate engagements to a full band, adding upright bass and drums for larger events.",
  "Comprised of four incredibly talented musicians, Alehouse Fire boasts decades of professional experience and is proud to garner a reputation as a professional group both on and off the stage. We want to work with you to make your event a fantastic experience. In addition to a top-notch performance, complete professionalism can be expected before, during and after your event.",
  "We provide our own sound equipment, work with you on event logistics as needed, work to accommodate special requests (including songs of any style, even pop or rock!), and of course dress appropriately for your event (From Kilts to Cowboy Hats to Tuxedos).",
  "Whatever your tastes may be, Alehouse Fire will work hard to accommodate them and make your event a complete success.",
];

const Home: NextPage = () => {
  return (
    <Flex direction="column" w="100%" align="center">
      <Head>
        <title>Alehouse Fire Home</title>
        <meta
          name="description"
          content="Alehouse Fire is a Los Angeles based Irish band that performs all kinds of events including parties, weddings, grand openings, wakes, and corporate functions"
        />
      </Head>
      <Flex direction="column">
        <Flex direction="column" align="center" marginBottom="4rem">
          <Flex
            w={{base: "18rem", sm: "30rem", md: "51rem"}}
            h="9rem"
            position="relative"
            transform="translateY(2rem)"
          >
            <Image
              src="/images/top.png"
              layout="fill"
              alt=""
              objectFit="contain"
            />
          </Flex>
          <Heading
            fontSize={{base: "3.5rem", sm: "4.6rem", md: "8rem"}}
            textAlign="center"
            fontWeight="light"
            fontFamily="Almendra SC"
            letterSpacing=".5rem"
            marginBottom={{base: "1.5rem", sm: ".7rem"}}
          >
            Alehouse Fire
          </Heading>
          <Heading
            as="h2"
            textTransform="capitalize"
            fontSize={{base: "1.8rem", md: "3.5rem"}}
            fontWeight="normal"
            color="gold"
            textAlign="center"
            transform="translateY(-.7rem)"
            fontFamily="Almendra SC"
          >
            Los Angeles, CA
          </Heading>
          <Flex
            w={{base: "16rem", sm: "20rem", md: "28rem"}}
            h="3rem"
            position="relative"
          >
            <Image
              src="/images/bottom.png"
              layout="fill"
              alt=""
              objectFit="contain"
            />
          </Flex>
        </Flex>

        <Heading
          as="h3"
          fontSize={{base: "1.5rem", sm: "1.7rem", md: "2rem"}}
          fontWeight="semibold"
          textAlign="center"
          letterSpacing=".4rem"
          marginBottom="2rem"
        >
          Welcome to the home of California&apos;s premier Irish Band!
        </Heading>
      </Flex>
      <hr style={{width: "100%"}} />
      <Flex
        direction={{base: "column", lg: "row"}}
        marginX="auto"
        w="100%"
        justify="center"
        borderBottom="1px solid white"
        paddingY="4rem"
        align={{base: "center", lg: "flex-start"}}
      >
        <Flex
          w={{base: "100%", lg: "60%"}}
          h={{base: "250", sm: "400", md: "450"}}
          marginBottom={{base: "2rem", xl: "4rem"}}
        >
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/5cioRx3NtaM"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </Flex>

        <Flex
          direction="column"
          w={{base: "100%", lg: "40%"}}
          marginLeft={{lg: "4rem", xl: "6rem"}}
        >
          {descriptionParagraphs.map((paragraph) => {
            return (
              <Text marginBottom="1.5rem" key={paragraph}>
                {paragraph}
              </Text>
            );
          })}
        </Flex>
      </Flex>
      <Flex direction={{base: "column", md: "row"}} w="100%" marginTop="2rem">
        <Flex flex="1" direction="column" paddingBottom="3rem">
          <Heading as="h2" marginBottom="2rem">
            News
          </Heading>
          <Flex direction="column">
            <p>Big news is coming in 2022. Stay tuned!!</p>
          </Flex>
        </Flex>
        <Flex flex="1" direction="column" paddingBottom="10rem">
          <Heading as="h2" marginBottom="2rem">
            Upcoming Performances
          </Heading>
          <Flex direction="column">
            <p>June 18th- Thousand Oaks Concert in the Park</p>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Home;
