import {
  SimpleGrid,
  Box,
  Container,
  AspectRatio,
  Center,
} from "@chakra-ui/react";

import React from "react";

const hello2 = () => {
  return (
    <div>
      <SimpleGrid minChildWidth="400px" spacingX="5px" spacingY="5px">
        <Box bg="tomato" height="800px">
          {/* <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/2mDCVzruYzQ"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe> */}

          <AspectRatio maxW="800px" maxH="315px" ratio={4 / 2}>
            <iframe
              title="naruto"
              src="https://www.youtube.com/embed/2mDCVzruYzQ"
              allowFullScreen
            />
          </AspectRatio>
        </Box>
        <Box bg="tomato" height="50px"></Box>
      </SimpleGrid>
    </div>
  );
};

export default hello2;
