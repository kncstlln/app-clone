import { Box, Container, Flex, Skeleton, SkeletonCircle, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import FeedPost from './FeedPost'

const FeedPosts = () => {
    const [isLoading,setIsLoading] = useState(false);


    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 2000)
    }, [])
  return (
    <Container maxW={"containter.sm"} py={10} px={2}>
        {isLoading && [0,1,2,3].map((_,idx) => (
            <VStack key={idx} gap={4} alignItems={"flex-start"} mb={10}>
                <Flex gap="2">
                    <SkeletonCircle size="10" />
                    <VStack gap={2} alignItems={"flex-start"}>
                        <Skeleton height='10px' w={"200px"} />
                        <Skeleton height='10px' w={"200px"} />
                    </VStack>
                </Flex>
                <Skeleton w={"full"}>
                    <Box h={"500px"}>Contents Wrapped</Box>
                </Skeleton>
            </VStack>
        ))}
        {!isLoading && (
            <>
                <FeedPost username="KnCstlln" img='/post1.JPG' avatar='/profilepic.png' comment='IRCITE 2023 | 3rd Runner Up'/>
                <FeedPost username="Castillano" img='/img2.png' avatar='/pic1.png' comment='Hello World'/>
                <FeedPost username="kncst.ory" img='/img3.png' avatar='/profilepic.png' comment='For Intenship'/>
                <FeedPost username="KaneErryl" img='/img4.png' avatar='/pic1.png' comment='ReactJS Practice with ChakraUI'/>
            </>
        )}
    </Container>
  )
}

export default FeedPosts