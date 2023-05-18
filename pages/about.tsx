import { Flex, Heading, Text } from '@chakra-ui/react';
import { PageContentContainer } from 'components/ui/page-content-container';
import { PageHeading } from 'components/ui/page-heading';
import Head from 'next/head';
import Image from 'next/image';

const aboutParagraphs = [
  'Drawn together by a love of Irish and Celtic music, the members of Alehouse Fire have decades of combined professional musical experience. Based in Los Angeles CA, the group boasts a mix of traditional Irish & Scottish folk tunes, along the lines of the Irish Rovers, the Dubliners and the Chieftons, along with more modern Irish songs by Flogging Molly, The Pogues and Dropkick Muprhy, to name a few.',
  'Every member of Alehouse Fire plays a number of instruments allowing the group to perform as a duo, a trio, a 4-piece and even at times, a 5-piece group. Alehouse Fire has performed at events ranging from weddings and rehearsal dinners to private parties and corporate events. And of course at countless Irish pubs.',
  'Whether playing completely acoustic traditional tunes for small gatherings or taking center stage in front of festival crowds, Alehouse Fire is sure to be a crowd favorite.',
];

const musicalOfferings = [
  'A Duo - Here we provide a guitarist/vocalist and a lead instrumentalist/vocalist, who would be playing (switching between) fiddle, mandolin, banjo, accordion, etc. This option is a great fit for smaller or more intimate occasions and gives a great traditional Irish pub feel with lots of energy and fun.',
  'A Trio - Similar to the Duo, but we start to really show off our flexibility here and can put a 3-piece ensemble together with guitar and two lead instruments OR guitar, upright bass and one lead instrument; and of course 3-part vocals. We can also switch between these configurations through the course of a performance as needed. Maybe a mellower set during cocktails and then a more lively set after dinner fits your evening. We can fit the bill perfectly.',
  'A 4-piece (No Drums): This one is like the trio but this offers even more flexibility. Guitar, Upright Bass and two lead players? No problem. Guitar, 2 lead players and Bodhran (traditional Irish percussion)? No problem. If you want the full Alehouse Fire experience, but find yourself not needing a full drum set, we can put on a great show for any occasion with this line up.',
  "A 4-piece (With Drums): This is what you'd see most commonly if you saw us at one of our many pub or festival performances. Drum set, upright bass, guitar and a lead instrument PLUS 4-part vocals. This allows us to play any song in our catalog from old traditional tunes to current material.",
];

const bandMembers = [
  {
    name: 'Dan Franklin',
    src: '/images/alehouse_fire_dan_franklin.jpg',
    instruments: ['Vocals', 'Guitar', 'Mandolin'],
    description: [
      `Dan Franklin is a Los Angeles based producer/songwriter/multi-instrumentalist. Originally from Ukiah California, Dan moved to L.A. to finish his bachelor’s degree in the heart of the music industry. Throughout the years, Dan has amassed a diverse list of clients and credits.`,
      `As a multi-instrumental performer, he’s spanned every genre, playing with everyone from Slash to Leann Rimes on every stage from theme parks to the Grand ‘Ole Opry. In addition to playing well with others, Dan also has his own project, ‘Dan and Leland’, featuring guitar monster Leland Jackness. He has also released several singles of his own and has a popular YouTube channel at DanFranklinMusic featuring videos from his artist and Pretty Little Liars star, Sasha Pieterse.`,
      `On the production side, Dan has had his scores and songs featured on Fox, MTV, RTD, VH1, CBS, NBC, Comedy Central, as well as the big screen. An accomplished record producer, Dan has created albums for many independent artists including Dani Kerry (Disney) Common Shiner (Chicago) and Sasha Pieterse (Pretty Little Liars)`,
    ],
    pictureLocation: 'right',
  },
  {
    name: 'Steve Lorentzen',
    src: '/images/steve-lorentzen.jpg',
    instruments: ['Banjo', 'Mandolin', 'Accordion', 'Guitar'],
    description: [
      'Not only does Steve hold a degree in music from Long Beach State, he also can accurately describe the brewing process of over 50 different beers.  This, in combination with his abilities on guitar, accordion, banjo, mandolin and whistle, make Steve the life of any party.',
      "Steve also performs in several other exciting groups including a 90's tribute band called Dick the Citizen and a popular jazz band called Jazzy Ash and the Leaping Lizards.",
    ],
    pictureLocation: 'left',
  },
  {
    name: 'Jeff Muzerole',
    src: '/images/alehouse_fire_jeff_muzerole.jpg',
    instruments: ['Drums'],
    description: [
      `Hey there, I'm Jeff Muzerolle, session/live drummer, music producer and composer, based in the Los Angeles area. I want to help you make your music come alive, tell a story, evoke an emotion, and change the world.`,
      `My career as a studio musician spans 25 years and includes recordings for indie and major label releases, movie soundtracks, commercial jingles, demos, and more. Genres include rock, metal, pop, blues, R&B, jazz, country, and world music.`,
      `Moreover, I also work as a recording engineer/producer so my intimate knowledge of what goes on 'behind the glass' gives me a more thorough understanding of the recording process. As such I have a unique skill set that helps me ensure that each session is successful.`,
      `I play for the music and I always strive to help the artist fulfill their vision.`,
    ],
    pictureLocation: 'right',
  },
  {
    name: 'Anthony Shadduck',
    src: '/images/alehouse_fire_anthony_shadduck.jpg',
    instruments: ['Bass'],
    description: [
      `Anthony Shadduck is a contrabassist currently living in Long Beach. He completed his Master of Music in Jazz Studies and Performance from California State University Long Beach in 2006.`,
      `Active in the both standard jazz and the free improvised idiom, he has performed and recorded with such LA based musicians as bass clarinetist and composer Lynn Johnston; sound artist and guitarist Chris Schlarb and the Create! Collective; Joe Biaza and the Universal Congress Of; flutist, vocalist and pianist Emily Hay; trumpeter Ron Stout; tenor saxophonist Chuck Manning; drummer, Evan Stone; vocalist, Nancy Sanchez drummer Ches Smith of Good for Cows; as well as guitarist Nels Cline of Wilco.`,
    ],
    pictureLocation: 'left',
  },
];

function About() {
  return (
    <PageContentContainer>
      <Head>
        <title>About</title>
        <meta
          name='description'
          content='Learn all about the members of Alehouse Fire.'
        />
      </Head>
      <Flex w='100%' justify='center'>
        <PageHeading text='About' />
      </Flex>

      <section>
        <Flex direction={{ base: 'column', lg: 'row' }} marginBottom='3rem'>
          <Flex
            flex={{ base: '', lg: '1' }}
            w={{ base: '100%', lg: '40rem' }}
            h={{ base: '23rem', sm: '35rem', md: '45rem', lg: '28rem' }}
            position='relative'
            marginBottom='3rem'
          >
            <Image
              src='/images/alehouse_fire_1.jpg'
              alt='a nice photo of the men of Alehouse Fire'
              layout='fill'
              objectFit='cover'
            />
          </Flex>
          <Flex
            flex='1'
            direction='column'
            marginLeft={{ base: '', lg: '4rem' }}
          >
            {aboutParagraphs.map((paragraph) => {
              return (
                <Text key={paragraph} marginBottom='1rem'>
                  {paragraph}
                </Text>
              );
            })}
          </Flex>
        </Flex>
      </section>
      <section>
        <Flex direction='column' marginBottom='4rem' align='center'>
          <Heading as='h2' marginY='3rem'>
            Musical Offerings
          </Heading>
          <Flex direction='column'>
            {musicalOfferings.map((musicalOffering) => {
              return (
                <Text key={musicalOffering} marginBottom='1rem'>
                  {musicalOffering}
                </Text>
              );
            })}
          </Flex>
        </Flex>
      </section>
      <section>
        <Flex direction='column' marginY='3rem' align='center'>
          <Heading as='h2' marginBottom='3rem'>
            Meet The Band
          </Heading>
          <Flex direction='column'>
            {bandMembers.map((member) => {
              return (
                <Flex
                  direction={{ base: 'column', md: 'row' }}
                  key={member.name}
                  w='100%'
                  justifyContent='space-between'
                  marginBottom='3rem'
                  align='center'
                  maxW={{ base: '40rem', md: 'none' }}
                >
                  <Flex
                    position='relative'
                    h='25rem'
                    w={{ base: '100%', md: '22rem' }}
                    order={{ md: member.pictureLocation === 'right' ? 2 : 1 }}
                    marginLeft={{
                      base: '',
                      md: member.pictureLocation === 'right' ? '3rem' : '',
                    }}
                    marginRight={
                      member.pictureLocation === 'right' ? '' : '3rem'
                    }
                    marginBottom='2rem'
                  >
                    <Image
                      src={member.src}
                      alt={`picture of ${member.name}`}
                      layout='fill'
                      objectFit='cover'
                    ></Image>
                  </Flex>
                  <Flex
                    w={{ base: '100%', md: '80%' }}
                    direction='column'
                    order={member.pictureLocation === 'right' ? 1 : 2}
                  >
                    <Heading as='h3' marginBottom='1rem'>
                      {member.name}
                    </Heading>
                    <Flex direction='row'>
                      {member.instruments.map((instrument, index) => {
                        return (
                          <Flex key={instrument} alignItems='center'>
                            <Text
                              fontSize={{ base: '1.1rem', sm: '1.5rem' }}
                              marginRight={{ base: '.6rem', md: '1rem' }}
                            >
                              {instrument}
                            </Text>
                            {index !== member.instruments.length - 1 && (
                              <Text
                                display={{ base: 'none', sm: 'inline-block' }}
                                marginRight={{ base: '.6rem', md: '1rem' }}
                              >
                                &bull;
                              </Text>
                            )}
                          </Flex>
                        );
                      })}
                    </Flex>
                    <Flex direction='column' marginY='1.5rem'>
                      {member.description.map((paragraph) => {
                        return (
                          <Text key={paragraph} marginBottom='1.5rem'>
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
