import {Flex, Heading} from "@chakra-ui/react";
import {PageContentContainer} from "components/ui/page-content-container";
import {PageHeading} from "components/ui/page-heading";
import React from "react";

function MediaContainer({children}: {children: React.ReactChild}) {
  return (
    <Flex
      marginY="2rem"
      w={{sm: "34rem", md: "44rem"}}
      h={{sm: "19rem", md: "24.5rem"}}
    >
      {children}
    </Flex>
  );
}

export default function Media() {
  return (
    <PageContentContainer>
      <PageHeading text="Media" />
      <MediaContainer>
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/5cioRx3NtaM"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </MediaContainer>
      <MediaContainer>
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/gIPuKHHzqAw"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </MediaContainer>
      <MediaContainer>
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/ig4FNq64Law"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </MediaContainer>
      <Flex
        marginY="2rem"
        w={{base: "15rem", sm: "27rem", md: "31rem"}}
        h={{base: "15rem", sm: "27rem", md: "31rem"}}
      >
        <iframe
          width="100%"
          height="100%"
          scrolling="no"
          frameBorder="no"
          src="https://www.reverbnation.com/widget_code/html_widget/artist_4490810?widget_id=55&pwc[song_ids]=30316493&context_type=song"
          style={{width: "0px", minWidth: "100%", maxWidth: "100%"}}
        ></iframe>
      </Flex>
    </PageContentContainer>
  );
}
