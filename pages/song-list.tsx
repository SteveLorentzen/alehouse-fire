import {Flex, Heading, Text} from "@chakra-ui/react";
import {PageContentContainer} from "components/ui/page-content-container";
import {PageHeading} from "components/ui/page-heading";
import Head from "next/head";

const countrySongs = [
  {title: "Africa", band: "Toto"},
  {title: "Amie", band: "Pure Prairie League"},
  {title: "Ball and Chain", band: "Social Distortion"},
  {title: "Blowin In the Wind", band: "Bob Dylan"},
  {title: "Boulevard of Broken Dreams", band: "Green Days"},
  {title: "The Boxer", band: "Simon and Garfunkel/Mumford and Sons"},
  {title: "Brown Eyed Girl", band: "Van Morrison"},
  {title: "The Cave", band: "Mumford and Sons"},
  {title: "City of New Orleans", band: "Arlo Guthrie"},
  {title: "Codeine", band: "Trampled by Turtles"},
  {title: "Dead Or Alive", band: "Bon Jovi"},
  {title: "Eastbound and Down", band: "Jerry Reed"},
  {title: "Every Rose has its Thorn", band: "Poison"},
  {title: "Foggy Mountain Breakdown", band: " Flatts and Scruggs"},
  {title: "Folsom Prison Blues", band: "Johnny Cash"},
  {title: "Friday I'm in Love", band: "The Cure"},
  {title: "Friends in Low Places", band: "Garth Brooks"},
  {title: "From the Bottle to the Bottom", band: "Kris Kristofferson"},
  {title: "The Gambler", band: "Kenny Rogers"},
  {title: "Half Mile Down", band: "Old Crow Medicine Show"},
  {title: "Ho Hey", band: "The Lumineers"},
  {title: "Hurts So Good", band: "John Mellencamp"},
  {title: "I Saw Her Standing There", band: "The Beatles"},
  {title: "I Still Haven't Found What I'm Looking For", band: "U2"},
  {title: "I Will Wait", band: "Mumford and Sons"},
  {title: "If It Takes A Lifetime", band: "Jason Isbell"},
  {title: "I'll Fly Away", band: "Albert E. Brumley"},
  {title: "I'm Gonna Be (500 Miles)", band: "The Proclaimers"},
  {title: "I'm On Fire", band: "Bruce Springsteen/Mumford and Sons"},
  {title: "Landslide", band: "Fleetwood Mac"},
  {title: "Learning to Fly", band: "Tom Petty"},
  {title: "Livin' On A Prayer", band: "Bon Jovi"},
  {title: "Long Black Veil", band: "Danny Dill and Marijohn Wilkin"},
  {title: "Mama Tried", band: "Merle Haggard"},
  {title: "Margaritaville", band: "Jimmy Buffett"},
  {title: "Mary Jane's Last Dance", band: "Tom Petty"},
  {title: "Moondance", band: "Van Morrison"},
  {title: "Mr. Tambourine Man", band: "Bob Dylan"},
  {title: "Mrs. Robinson", band: "Simon and Garfunkel"},
  {title: "The Night They Drove Old Dixie Down", band: "The Band"},
  {
    title: "On The Road Again",
    band: "Willie Nelson                                        ",
  },
  {
    title: "Pink Houses",
    band: "John Mellencamp                                            ",
  },
  {
    title: "Pride (In the Name of Love)",
    band: "U2                                        ",
  },
  {
    title: "Reason to Believe",
    band: "Tim Harden                                              ",
  },
  {title: "Ring of Fire", band: "Johnny Cash"},
  {title: "Rocky Top", band: "The Osbourne Brothers"},
  {title: "Seminole Wind", band: "John Anderson"},
  {title: "Sweet Amarillo", band: "Old Crow Medicine Show"},
  {title: "Sweet Caroline", band: "Neil Diamond"},
  {title: "Take 'Em Away", band: "Old Crow Medicine Show"},
  {title: "Take It Easy", band: "The Eagles"},
  {title: "Take Me Home Country Roads", band: "John Denver"},
  {title: "This Train Is Bound For Glory", band: "traditional"},
  {title: "Up On Cripple Creek", band: "The Band"},
  {title: "Wagon Wheel", band: "Old Crow Medicine Show/Bob Dylan"},
  {title: "The Weight", band: "The Band"},
  {title: "Who Says You Can't Go Home", band: "Bon Jovi"},
  {title: "Will the Circle be Unbroken", band: "Ada R. Habershon"},
  {title: " Wonderwall", band: "Oasis"},
  {title: "Yellow Submarine", band: "The Beatles"},
  {title: "You Are My Sunshine", band: "Norman Blake"},
  {title: "You Don't Know How it Feels", band: "Tom Petty"},
  {title: "You Shook Me All Night Long", band: "AC/DC"},
];

const irishSongs = [
  {title: "All for me Grog", band: "traditional Irish"},
  {title: "Back Home In Derry", band: "Bobby Sands/Christy Moore"},
  {title: "Beer Beer Beer", band: "traditional Irish"},
  {title: "Big Strong Man", band: "traditional Irish"},
  {title: "Black Flag Flying", band: "traditional Irish"},
  {title: "Black Velvet Band", band: "traditional Irish"},
  {
    title: "Come Out Ye Black and Tans",
    band: "Dominic Began                     Crooked Jack",
  },
  {title: "Danny Boy", band: "traditional Irish"},
  {title: "Devil's Dance Floor", band: "Flogging Molly"},
  {title: "Dirty Old Town", band: "Ewan MacColl/The Pogues"},
  {title: "Donald Where's Your Trousers", band: "Andy Stewart/Neil Grant"},
  {title: "Drink It Up Men", band: "traditional Irish"},
  {title: "Drunken Lullabies", band: "Flogging Molly"},
  {title: "Drunken Sailor", band: "traditional Irish"},
  {title: "Fields of Athenry", band: "Pete St. John"},
  {title: "Finnegan's Wake", band: "traditional Irish/the Dubliners"},
  {title: "Fisherman's Blues", band: "The Waterboys"},
  {title: "Foggy Dew", band: "traditional Irish"},
  {title: "Galway Girl", band: "Steve Earle"},
  {title: "Gold and Silver Days", band: "traditional Irish"},
  {title: "Green Fields of France", band: "Eric Bogle"},
  {title: "Hills of Connemara", band: "Sean McCarthy"},
  {title: "Holy Ground", band: "traditional Irish"},
  {title: "If I Ever Leave This World Alive", band: "Flogging Molly"},
  {title: "If I Should Fall From Grace With God", band: "The Pogues"},
  {title: "I'm a Man You Don't Meet Everyday", band: "traditional/The Pogues"},
  {title: "I'm Gonna Be (500 Miles)", band: "The Proclaimers"},
  {title: "Johnson's Motor Car", band: "The Clancy Brothers"},
  {title: "Jug of Punch", band: "traditional Irish"},
  {title: "Leaving of Liverpool", band: "traditional Irish"},
  {title: "Mari-Mac", band: "traditional Irish"},
  {title: "McNamara's Band", band: "Shamus O' Connor and John J. Stamford"},
  {title: "The Moonshiner", band: "The Clancy Brothers"},
  {title: "The Night That Paddy Murphy Died", band: "Johnny Burke"},
  {title: "Old Dun Cow", band: "traditional Irish"},
  {title: "Raggle Raggle Gypsy", band: "traditional Irish"},
  {title: "Rare Old Mountain Dew", band: "Edward Harrigan"},
  {title: "Rising of the Moon", band: "John Keegan Casey"},
  {title: "The Rocky Road to Dublin", band: "D.K. Gavan"},
  {title: "Rose Tattoo", band: "Dropkick Murphys"},
  {title: "Salty Dog", band: "Flogging Molly"},
  {title: "The Scotsman's Kilt", band: "Mike Cross/Bryan Bowers"},
  {title: "Seven Drunken Nights", band: "The Dubliners"},
  {title: "Shipping Up to Boston", band: "Dropkick Murphy's"},
  {title: "Some Say the Devil Is Dead", band: "The Wolfe Tones"},
  {title: "Streams of Whiskey", band: "The Pogues"},
  {title: "Sunny Side of the Street", band: "The Pogues"},
  {title: "Tell Me Ma", band: "traditional Irish"},
  {title: "Walk In the Irish Rain", band: "Seamus Kennedy"},
  {title: "Whiskey for Breakfast", band: "traditional Irish"},
  {title: "Whiskey in the Jar", band: "traditional Irish"},
  {title: "Whiskey You're the Devil", band: "traditional Irish"},
  {title: "Wild Mountain Thyme", band: "traditional Irish"},
  {title: "The Wild Rover", band: "traditional Irish"},
  {title: "Worst Day Since Yesterday", band: "Flogging Molly"},
];

function Song({title, band}: {title: string; band: string}) {
  return (
    <Flex fontSize="1.3rem" marginBottom=".5rem">
      <Text>{`${title} - ${band}`}</Text>
    </Flex>
  );
}

export default function SongList() {
  return (
    <PageContentContainer>
      <Head>
        <title>Song List</title>
        <meta
          name="description"
          content="The official list of songs Alehouse Fire performs"
        />
      </Head>
      <PageHeading text="Song List" />
      <Text fontSize="1.5rem" marginBottom="3rem">
        Alehouse Fire prides itself on playing the very best of traditional and
        modern Irish music. But we&apos;ve also done A LOT of
        &quot;not-so-Irish&quot; material for clients through the years.
        Country, blues, rock&apos;n&apos;roll, etc. We&apos;re happy to work
        with our clients on special requests and are always working to add new
        material to our sets to keep the Irish fun going!
      </Text>
      <Heading
        as="h2"
        marginBottom="2rem"
        alignSelf="flex-start"
        color="gold"
        fontWeight="semibold"
      >
        Our Current Repertoire:
      </Heading>
      <Flex w="100%" direction={{base: "column", lg: "row"}}>
        <Flex flex="1" direction="column" marginBottom="2rem">
          <Heading as="h3" fontSize="1.8rem" marginBottom="1rem">
            Irish, Scottish, and Celtic
          </Heading>
          <Flex direction="column">
            {irishSongs.map((song) => {
              return (
                <Song
                  key={song.title + song.band}
                  title={song.title}
                  band={song.band}
                />
              );
            })}
          </Flex>
        </Flex>
        <Flex
          flex="1"
          direction="column"
          marginLeft={{base: "none", lg: "3rem"}}
        >
          <Heading as="h3" fontSize="1.8rem" marginBottom="1rem">
            Country, Bluegrass, and Americana Covers
          </Heading>
          <Flex direction="column">
            {countrySongs.map((song) => {
              return (
                <Song
                  key={song.title + song.band}
                  title={song.title}
                  band={song.band}
                />
              );
            })}
          </Flex>
        </Flex>
      </Flex>
    </PageContentContainer>
  );
}
