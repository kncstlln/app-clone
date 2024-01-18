import { Box, Flex, Link, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import SuggestedHeader from './SuggestedHeader'
import SuggestedUser from './SuggestedUser'

const SuggestedUsers = () => {
  return (
    <>
        <VStack py={8} px={6} gap={4}>
            <SuggestedHeader />

            <Flex alignItems={"center"} justifyContent={"space-between"} w={"full"}>
                <Text fontSize={12} fontWeight={"bold"} color={"gray.500"}>
                    Suggested for you
                </Text>
                <Text fontSize={12} fontWeight={"bold"} color={"gray.400"} cursor={"pointer"}>
                    See All
                </Text>
            </Flex>

            <SuggestedUser name="Kane Castillano" followers={3+","+970+","+548} avatar="/profilepic.png"/>
            <SuggestedUser name="Kane Erryl" followers={3+","+480} avatar="/pic1.png"/>
            <SuggestedUser name="Sir Kane" followers={901} avatar="/profilepic.png"/>

            <Box fontSize={12} color={"gray.500"} mt={5} >
            2024 Built By {" "}
            <Link href='kncstlln.github.io' target='blank' color='blue.500' fontSize={14}>
                KnCstlln
            </Link>
            </Box>

        </VStack>
    </>
  )
}

export default SuggestedUsers