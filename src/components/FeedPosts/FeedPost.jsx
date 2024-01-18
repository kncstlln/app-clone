import { Box, Image } from '@chakra-ui/react'
import React from 'react'
import PostHeader from "./PostHeader";
import PostFooter from "./PostFooter";

const FeedPost = ({img,username,avatar,comment}) => {
  return <>
  <PostHeader username={username} avatar={avatar}/>
  <Box my={2} borderRadius={4} overflow={"hidden"}>
    <Image src={img} alt={username} ></Image>
  </Box>
  <PostFooter username={username} comment={comment}/>
  
  </>
}

export default FeedPost