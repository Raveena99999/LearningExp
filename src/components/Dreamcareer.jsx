// import React from 'react'
// import { Box, Text, Flex, Image } from "@chakra-ui/react";
// import button from "../assets/button.png"
// export default function Dreamcareer() {
//   return (
//     <Flex w="80%" m="auto" bg="#F9F9FF">
//         <Box w="50%"></Box>

//         <Box w="50%">
//         <Text fontSize="2rem"  color="#000000">
//             Crafting Your Dream Career:
//       </Text>
//       <Text fontSize="2rem"  color="#000000" mt="-10px">
//         Building a Path You Love with us
//       </Text>
//       <Text color="#707070" mt="1rem">
//       At learning Exp.We are committed to providing you with a superior
//         learning  expeience that empowers you to achieve your goals.Join us today
//         and  embark on a journey of discovery ,growth and success.
//       </Text>
//       <Text color="#707070" mt="1rem">
//         {" "}
//         Our platform is designed to empower learnerslike you to excel in today dynamic world.
//       </Text>

//       <Image mt="1rem" src={button}/>
//         </Box>

//     </Flex>
//   )
// }








// import React from 'react';
// import { Box, Text, Flex,Image} from "@chakra-ui/react";
// import button from "../assets/button.png"
// import ReactPlayer from 'react-player';

// export default function Dreamcareer() {
//   return (
//     <Flex w="80%" m="auto" bg="#F9F9FF">
//       <Box w="50%">
//         <ReactPlayer
//           url="https://www.youtube.com/watch?v=LjZxeSne67E" 
//           width="100%"
//           height="100%"
//         />
//       </Box>

//       <Box w="50%">
//         <Text fontSize="2rem" color="#000000">
//           Crafting Your Dream Career:
//         </Text>
//         <Text fontSize="2rem" color="#000000" mt="-10px">
//           Building a Path You Love with us
//         </Text>
//         <Text color="#707070" mt="1rem">
//           At learning Exp.We are committed to providing you with a superior
//           learning experience that empowers you to achieve your goals.Join us
//           today and embark on a journey of discovery, growth, and success.
//         </Text>
//         <Text color="#707070" mt="1rem">
//           Our platform is designed to empower learners like you to excel in
//           today's dynamic world.
//         </Text>
//               <Image mt="1rem" src={button}/>

//       </Box>
//     </Flex>
//   );
// }








import React, { useState } from 'react';
import { Box, Text, Flex, Image } from "@chakra-ui/react";
import button from "../assets/button.png";
import videosmall from "../assets/vediosmall.mp4"; // Replace "video.mp4" with your actual video file

export default function Dreamcareer() {
  const [showVideo, setShowVideo] = useState(true); // Set to true initially

  const handleVideoClick = () => {
    setShowVideo(true);
  };

  return (
    <Flex w="80%" m="auto" bg="#F9F9FF">
      <Box w="50%">
        {showVideo ? (
          <video width="100%" controls>
            <source src={videosmall} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <Image src={button} onClick={handleVideoClick} />
        )}
      </Box>

      <Box w="50%">
        <Text fontSize="2rem" color="#000000">
          Crafting Your Dream Career:
        </Text>
        <Text fontSize="2rem" color="#000000" mt="-10px">
          Building a Path You Love with us
        </Text>
        <Text color="#707070" mt="1rem">
          At learning Exp.We are committed to providing you with a superior
          learning experience that empowers you to achieve your goals.Join us
          today and embark on a journey of discovery, growth, and success.
        </Text>
        <Text color="#707070" mt="1rem">
          Our platform is designed to empower learners like you to excel in
          today's dynamic world.
        </Text>
        <Image mt="1rem" src={button}/>

      </Box>

    </Flex>
  );
}
