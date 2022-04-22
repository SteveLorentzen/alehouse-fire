import {Flex, Heading, Text} from "@chakra-ui/react";
import {PageContentContainer} from "components/ui/page-content-container";
import {PageHeading} from "components/ui/page-heading";
import Head from "next/head";
import Image from "next/image";

const aboutParagraphs = [
  "Drawn together by a love of Irish and Celtic music, the members of Alehouse Fire have decades of combined professional musical experience. Based in Los Angeles CA, the group boasts a mix of traditional Irish & Scottish folk tunes, along the lines of the Irish Rovers, the Dubliners and the Chieftons, along with more modern Irish songs by Flogging Molly, The Pogues and Dropkick Muprhy, to name a few.",
  "Every member of Alehouse Fire plays a number of instruments allowing the group to perform as a duo, a trio, a 4-piece and even at times, a 5-piece group. Alehouse Fire has performed at events ranging from weddings and rehearsal dinners to private parties and corporate events. And of course at countless Irish pubs.",
  "Whether playing completely acoustic traditional tunes for small gatherings or taking center stage in front of festival crowds, Alehouse Fire is sure to be a crowd favorite.",
];

const musicalOfferings = [
  "A Duo - Here we provide a guitarist/vocalist and a lead instrumentalist/vocalist, who would be playing (switching between) fiddle, mandolin, banjo, accordion, etc. This option is a great fit for smaller or more intimate occasions and gives a great traditional Irish pub feel with lots of energy and fun.",
  "A Trio - Similar to the Duo, but we start to really show off our flexibility here and can put a 3-piece ensemble together with guitar and two lead instruments OR guitar, upright bass and one lead instrument; and of course 3-part vocals. We can also switch between these configurations through the course of a performance as needed. Maybe a mellower set during cocktails and then a more lively set after dinner fits your evening. We can fit the bill perfectly.",
  "A 4-piece (No Drums): This one is like the trio but this offers even more flexibility. Guitar, Upright Bass and two lead players? No problem. Guitar, 2 lead players and Bodhran (traditional Irish percussion)? No problem. If you want the full Alehouse Fire experience, but find yourself not needing a full drum set, we can put on a great show for any occasion with this line up.",
  "A 4-piece (With Drums): This is what you'd see most commonly if you saw us at one of our many pub or festival performances. Drum set, upright bass, guitar and a lead instrument PLUS 4-part vocals. This allows us to play any song in our catalog from old traditional tunes to current material.",
];

const bandMembers = [
  {
    name: "Steve Lorentzen",
    src: "/images/steve-lorentzen.jpg",
    instruments: ["Banjo", "Mandolin", "Accordion", "Guitar"],
    description: [
      "Not only does Steve hold a degree in music from Long Beach State, he also can accurately describe the brewing process of over 50 different beers.  This, in combination with his abilities on guitar, accordion, banjo, mandolin and whistle, make Steve the life of any party.",
      "Steve also performs in several other exciting groups including a 90's tribute band called Dick the Citizen and a popular jazz band called Jazzy Ash and the Leaping Lizards.",
    ],
    pictureLocation: "right",
  },
];

function About() {
  return (
    <PageContentContainer>
      <Head>
        <title>About</title>
        <meta
          name="description"
          content="Learn all about the members of Alehouse Fire."
        />
      </Head>
      <Flex w="100%" justify="center">
        <PageHeading text="About" />
      </Flex>

      <section>
        <Flex direction={{base: "column", lg: "row"}} marginBottom="3rem">
          <Flex
            flex={{base: "", lg: "1"}}
            w={{base: "100%", lg: "40rem"}}
            h={{base: "23rem", sm: "35rem", md: "45rem", lg: "28rem"}}
            position="relative"
            marginBottom="3rem"
          >
            <Image
              src="/images/alehouse-fire-1.jpg"
              alt="band photo with Steve's mouth open"
              layout="fill"
              objectFit="cover"
            />
          </Flex>
          <Flex flex="1" direction="column" marginLeft={{base: "", lg: "4rem"}}>
            {aboutParagraphs.map((paragraph) => {
              return (
                <Text key={paragraph} marginBottom="1rem">
                  {paragraph}
                </Text>
              );
            })}
          </Flex>
        </Flex>
      </section>
      <section>
        <Flex direction="column" marginBottom="4rem" align="center">
          <Heading as="h2" marginY="3rem">
            Musical Offerings
          </Heading>
          <Flex direction="column">
            {musicalOfferings.map((musicalOffering) => {
              return (
                <Text key={musicalOffering} marginBottom="1rem">
                  {musicalOffering}
                </Text>
              );
            })}
          </Flex>
        </Flex>
      </section>
      <section>
        <Flex direction="column" marginY="3rem" align="center">
          <Heading as="h2" marginBottom="3rem">
            Meet The Band
          </Heading>
          <Flex direction="column">
            {bandMembers.map((member) => {
              return (
                <Flex
                  direction={{base: "column", md: "row"}}
                  key={member.name}
                  w="100%"
                  justifyContent="space-between"
                  marginBottom="3rem"
                  align="center"
                  maxW={{base: "40rem", md: "none"}}
                >
                  <Flex
                    position="relative"
                    h="25rem"
                    w={{base: "100%", md: "22rem"}}
                    order={{md: member.pictureLocation === "right" ? 2 : 1}}
                    marginLeft={{
                      base: "",
                      md: member.pictureLocation === "right" ? "3rem" : "",
                    }}
                    marginRight={
                      member.pictureLocation === "right" ? "" : "3rem"
                    }
                    marginBottom="2rem"
                  >
                    <Image
                      src={member.src}
                      alt={`picture of ${member.name}`}
                      layout="fill"
                      objectFit="cover"
                    ></Image>
                  </Flex>
                  <Flex
                    w={{base: "100%", md: "80%"}}
                    direction="column"
                    order={member.pictureLocation === "right" ? 1 : 2}
                  >
                    <Heading as="h3" marginBottom="1rem">
                      {member.name}
                    </Heading>
                    <Flex direction="row">
                      {member.instruments.map((instrument, index) => {
                        return (
                          <Flex key={instrument} alignItems="center">
                            <Text
                              fontSize={{base: "1.1rem", sm: "1.5rem"}}
                              marginRight={{base: ".6rem", md: "1rem"}}
                            >
                              {instrument}
                            </Text>
                            {index !== member.instruments.length - 1 && (
                              <Text
                                display={{base: "none", sm: "inline-block"}}
                                marginRight={{base: ".6rem", md: "1rem"}}
                              >
                                &bull;
                              </Text>
                            )}
                          </Flex>
                        );
                      })}
                    </Flex>
                    <Flex direction="column" marginY="1.5rem">
                      {member.description.map((paragraph) => {
                        return (
                          <Text key={paragraph} marginBottom="1.5rem">
                            {paragraph}
                          </Text>
                        );
                      })}
                    </Flex>
                  </Flex>
                </Flex>
              );
            })}
          </Flex>
        </Flex>
      </section>
    </PageContentContainer>
  );
}

export default About;
