import React from 'react'
import { Box, Flex,  Spacer } from '@chakra-ui/react'
import { ColorModeSwitcher } from'./ColorModeSwitcher'


export const Navbar = () => {
    return (
        <Flex align="center" boxShadow="base" p="0" mb="1" >
        <Box p="0">
    
        </Box>
        <Spacer/>
        <Box>
            <ColorModeSwitcher />
        </Box>
      </Flex>
    )
}

