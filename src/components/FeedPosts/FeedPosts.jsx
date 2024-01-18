import { Container } from '@chakra-ui/react'
import React from 'react'
import FeedPost from './FeedPost'

const FeedPosts = () => {
  return (
    <Container maxW={"containter.sm"} py={10} px={2}>
        <FeedPost username="KnCstlln" img='/post1.JPG' avatar='/profilepic.png' comment='IRCITE 2023 | 3rd Runner Up'/>
        <FeedPost username="Castillano" img='/img2.png' avatar='/pic1.png' comment='Hello World'/>
        <FeedPost username="kncst.ory" img='/img3.png' avatar='/profilepic.png' comment='For Intenship'/>
        <FeedPost username="KaneErryl" img='/img4.png' avatar='/pic1.png' comment='ReactJS Practice with ChakraUI'/>

    </Container>
  )
}

export default FeedPosts