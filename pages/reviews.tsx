import {Flex, Heading, Text} from "@chakra-ui/react";
import {PageContentContainer} from "components/ui/page-content-container";
import {PageHeading} from "components/ui/page-heading";
import Head from "next/head";

interface IReview {
  name: string;
  location?: string;
  date: string;
  eventType?: string;
  title?: string;
  content: string[];
}

const reviews: IReview[] = [
  {
    name: "Ian G.",
    location: "Culver City, CA",
    date: "03/13/2019",
    eventType: "Corporate Function",
    content: [
      "These guys were excellent. Very accommodating to the specific needs of our event and a pleasure to work with!",
    ],
  },
  {
    name: "Aaron K.",
    location: "Huntington Beach, CA",
    date: "01/12/2019",
    eventType: "Birthday Party (Adult)",
    content: [
      "What a great night! Alehouse Fire brought a true feeling of traditional Irish Music and perfectly mixed in a few classic hits. Would def hire them again. Played gentle at the beginning as guests arrived and then ramped up as the party did. Too much fun!!  Thanks",
    ],
  },
  {
    name: "Aja C.",
    location: "Agua Dulce, CA",
    date: "11/03/2018",
    eventType: "Celebration",
    content: [
      "I hired this band for the celebration of life of my mom, and was not disappointed in the slightest. Alehouse Fire was everything my mother loved about Irish pub bands. I know she was dancing in spirit with us that day. They were entertaining, engaging, and played beautifully. The band was great at reading the crowd and playing songs based off the mood. I would definitely hire them again for any event!!",
    ],
  },
  {
    name: "Kurt B.",
    location: "Redondo Beach, CA",
    date: "06/09/2018",
    eventType: "Birthday Party (Adult)",
    content: [
      "Outstanding job, very professional, we got a ton of compliments on you guys. Even neighbors that weren’t invited to the party came up and said they love your music. You played soft enough that conversations could go on and then picked it up when you notice the crowd was ready to party with you! It was a pleasure meeting you guys and look forward to seeing you at some of my friends parties. Cheers, Kurt",
    ],
  },
  {
    name: "Caralie H.",
    location: "Fallbrook, CA ",
    date: "04/21/2018",
    content: [
      "Alehouse Fire was an amazing band for our wedding! They all went above and beyond our expectations of having a lively, upbeat band for our big day. They played many Irish songs, as well as some covers, which was fun for everyone to dance to. They also were very accommodating to play songs we requested or just liked. Don was very personable and provided excellent communication throughout the planning process. We will definitely be referring them to our friends and family and look forward to hearing them again in the future. Thank you Alehouse Fire!",
    ],
  },
  {
    name: "Arthur M.",
    location: "Granada Hills, CA",
    date: "04/16/2018",
    content: [
      "This group played songs I requested and at the volume I requested. Volume was very important as event guests wanted to talk without being drowned out by music. Alehouse Fire played at just the right volume with times guests singing along and other times as wonderful background music during dinner. Will hire again when next opportunity presents it's self.",
    ],
  },
  {
    name: "Nathaniel S.",
    location: "Pasadena, CA",
    date: "03/07/2018",
    content: [
      "Donald and Steve were exceptional in their professionalism. They were accommodating and flexible with the specific needs of my event. And since I hired them last minute, they worked with me to get everything completed. My hat’s off to Alehouse Fire.",
    ],
  },
  {
    name: "Tom W.",
    location: "Upland, CA",
    date: "02/19/2018",
    content: [
      "Alehouse Fire were very well received by the guests at my mom's wake service. I can honestly say that they are true professionals who will not disappoint. Being a gigging musician myself, I know the importance of catering performance styles to different events and Donald and his boys were perfect in every sense. I highly recommend Alehouse Fire for any event where Irish music is a must. You will laugh and sing and you wont be disappointed.",
    ],
  },
  {
    name: "Matthew G. ",
    location: "La Crescenta, CA",
    date: "09/30/2017",
    content: ["Excellent. Would adopt them if we could."],
  },
  {
    name: "Tim B.",
    location: "Piru, CA",
    date: "05/13/2017",
    content: [
      "My wife and I wanted some Irish music at our recent wedding, so we booked Alehouse Fire... and we certainly weren't disappointed! Nate and the band are absolute professionals and went over and beyond for us. They even agreed to set up hours before they needed to play even though it meant tons of downtime for them. Musically, they're top notch. They played all the Irish tunes we wanted to hear and sounded amazing. My family and friends aren't really dancers, but by the end of the night, everyone was on the floor. I can't recommend these guys enough. If you're looking for Irish music in LA, look no further.",
    ],
  },
  {
    name: "Wendy D.",
    location: "San Marino, CA",
    date: "03/19/2017",
    content: [
      "They were perfect for our event, great band, Lots of fun, very accommodating. We throughly enjoyed them and will hire them again for any future events that we have.",
    ],
  },
  {
    name: "David S.",
    location: "Palm Desert, CA",
    date: "03/12/2017",
    content: [
      "Nate was a pleasure to work with from the outset - we were organising the event from a long distance but he was very helpful and communicative at all stages. On they night the guys played a very good set and created a very good atmosphere in the room. Would be very happy to book the guys again.",
    ],
  },
  {
    name: "Dustin S.",
    date: "10/16/2016",
    title: "A Hundred Thousand Thank-Yous to Alehouse Fire!!!! Slainthe",
    eventType: "80th Birthday Party",
    content: [
      "There is an Irish expression of hospitality of “Cead Mille Failte” which means ‘a hundred thousand welcomes’…well from our Irish family we say to Alehouse Fire ‘ a hundred thousand thank-yous’…",
      "I am so pleased to write about my experience with Alehouse Fire. Succinctly, as a professional marketer who produces many events, I wholeheartedly recommend Ale House Fire when looking for a professional and talented group of Irish musicians. However, the praise does not end there, as I hired them not for a private client, I hired them for my Mother’s 80th birthday celebration. To say Alehouse Fire made the party even more memorable is an understatement.",
      "We wanted to mark a special birthday for my Irish mother who raised four boys (God bless her). Upon hearing my brothers volunteered my house for the event (thanks guys) I started to get to work on what would be a great festive party. As such, honoring our Irish heritage was important, so my search ensued. From the moment Nate returned my inquiry I knew from his tenor and tone this would be a great band to work with. Accommodating, communicative and flexible is what I found. Moreover, and most importantly, Alehouse Fire is talented and fun. They read the mood of the event and played accordingly. ",
      "I love musicians who can share their creative talents through music to a wide audience. Ale House delivered. Hiring a band is a bit of a gamble, kind of like a blind date. They sound good from the telling, but you just don’t know until you’re face to face. With Alehouse Fire, get on to planning your party and don’t worry, they’ll treat you right. We invited them into our home with open arms and would do so again in a heartbeat. If you are in search of a great Irish band with talented, hard working musicians with easygoing personalities, look no further. If this professional event director can trust them with my Mother’s 80th, you can trust them with your event. My mother still tears up thinking about some of the songs they played…Bless their heart! Feel free to contact me if you have any reservations…better yet, contact them and start planning your event!",
    ],
  },
  {
    name: "Marianne B.",
    date: "09/17/2016",
    title: "Great to Work With & Great Band!",
    eventType: "70th Birthday Party",
    content: [
      "Alehouse Fire was on fire at my 70th Irish Birthday party. It was my first time hiring a band and they made the process smooth and easy, very good communications. I and my guest all enjoyed the Irish music and their upbeat enthusiasm by getting in the crowd and helping with our singing. Everyone asked where I got the band; they are so good, enjoyable and lots of fun. I would hire them again.",
    ],
  },
  {
    name: "Malcolm D.",
    date: "07/05/2016",
    title: "Alehouse Fire - Great Band!",
    eventType: "Private Party",
    content: [
      "We hired Nate and guys to perform for a yacht club men's party. The party theme was an Irish pub. They were great. First - very flexible since the party was on Catalina Island at a rural camp with power coming from a generator, they set up under a tree (and they had to come over and go home on one of our members boats). The music was perfect - Irish pub songs, Jimmy Buffet, country western. Guitar around the camp fire at the end of the evening. The guys were very professional, fit in well with our group, and everyone thought they were terrific. I highly recommend Alehouse Fire.",
    ],
  },
  {
    name: "Anthony B.",
    date: "06/18/2016",
    title: "A Great Band!",
    eventType: "Corporate Event",
    content: [
      "My firm was celebrating a new contract with a large Irish client so we decided to put on a Irish party!  I'm not Irish, and know very little about the music but Nate and I talked and I knew this band would be great and they didn't dissapoint.  My firm has 3 partners, who all think they know everything about everything but Nate met with them and worked through all the details like a total pro.  The band was great, and totally professional at every step.  I can't recommend Alehouse Fire enough!",
    ],
  },
  {
    name: "Linda F.",
    date: "03/20/2016",
    title: "Wonderful Band",
    eventType: "Community Event",
    content: [
      "They were great, everyone really enjoyed their music. I would definitely recommend them. They not only played irish songs but threw in a few country ones. Great time had by all!",
    ],
  },
  {
    name: "Mike P.",
    date: "05/2015",
    title: "Total Professionals",
    eventType: "Corporate Event",
    content: [
      "I hired Nate and Steve to perform some Irish tunes at my brewery's release party for a new Irish Ale we recently began marketing.  I'm not Irish and know nothing about Irish music but my Marketing Director said it would make the party more fun and man he was right.  He knows Nate from their time together at USC.  They were a great addition to our party and all the executives there loved them.  Made me look like a hero to my boss too!  Thanks guys!",
    ],
  },
  {
    name: "Steve P.",
    date: "04/2014",
    title: "Great music and easy to work with!",
    eventType: "Play Opening",
    content: [
      "I hired Alehouse Fire (FKA West of Cork) for the opening of a play at our local community playhouse.  We were debuting a new work by an Irish author and the setting of the play was Ireland at the turn of the last century.  Nate put together a small ensemble that was perfect for our event.  They played acoustic during the opening reception and during intermission and then played back at my house for the after party.  What a great and talented group of musicians.  Couldn't have asked for anything better!  Thanks!",
    ],
  },
  {
    name: "Patty M.",
    date: "01/14/2014",
    title: "Incredible musicians made for a great party!",
    eventType: "Anniversary Party",
    content: [
      "We hired this band for my parent’s 50th wedding anniversary party after seeing them at our daughter’s preschool. The guitarist’s daughter also attends that preschool and his group apparently does some volunteer work, including playing at schools around St. Patrick’s Day. They were totally professional in all our pre-party dealings and were a wonderful addition to our event. They’re clearly all professional musicians and were just incredible to watch and listen to. My mother is Irish so she loved the traditional songs that she could sing along with and the band encouraged her and did a great job accommodating our requests. I can’t recommend these guys enough!",
    ],
  },
];

function Review({review}: {review: IReview}) {
  return (
    <Flex direction="column" marginY="2rem">
      <Text
        fontSize="2rem"
        fontWeight="bold"
        marginBottom=".3rem"
      >{`Review by ${review.name}`}</Text>

      <Flex direction={{base: "column", md: "row"}} marginBottom="1.2rem">
        {review.eventType && <Text marginRight="1rem">{review.eventType}</Text>}
        {review.date && (
          <Text marginRight="1rem">{`Reviewed on ${review.date}`}</Text>
        )}
        {review.location && <Text>{`From ${review.location}`}</Text>}
      </Flex>

      {review.title && (
        <Flex>
          <Heading as="h3" fontSize="1.3rem" marginBottom=".5rem">
            {review.title}
          </Heading>
        </Flex>
      )}
      <Flex direction="column">
        {review.content.map((paragraph) => {
          return (
            <Text key={paragraph} marginY=".3rem" fontSize="1.5rem">
              {paragraph}
            </Text>
          );
        })}
      </Flex>
    </Flex>
  );
}

export default function Reviews() {
  return (
    <PageContentContainer>
      <Head>
        <title>Reviews</title>
        <meta
          name="description"
          content="Read reviews detailing how past clients felt about Alehouse Fire.  "
        />
      </Head>
      <PageHeading text="Reviews" />
      <Flex direction="column" maxW="50rem">
        <Heading
          as="h2"
          color="gold"
          alignSelf="flex-start"
          fontWeight="normal"
        >
          Check out what our clients have to say:
        </Heading>

        {reviews.map((review) => {
          return <Review key={review.content[0]} review={review} />;
        })}
      </Flex>
    </PageContentContainer>
  );
}
