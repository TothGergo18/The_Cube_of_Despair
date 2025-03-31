"use client"
import {
    Box,
    chakra,
    Container, IconButton,
    Stack,
    Text, useColorMode,
    useColorModeValue,
    VisuallyHidden, Image
} from "@chakra-ui/react"

import {MoonIcon, SunIcon} from "@chakra-ui/icons";

const Logo = props => {
    return (
        <Image src={"/Images/Logo.png"} height={50}/>
    )
}

export default function SmallWithLogoLeft() {
    const {colorMode, toggleColorMode} = useColorMode();
    return (
        <Box
            bg={useColorModeValue("gray.100", "gray.900")}
            color={useColorModeValue("gray.700", "gray.200")}
        >
            <Container
                as={Stack}
                maxW={"6xl"}
                py={4}
                direction={{base: "column", md: "row"}}
                spacing={4}
                justify={{base: "center", md: "space-between"}}
                align={{base: "center", md: "center"}}
            >
                <Logo/>
                <Text>© 2025 The Cube of Despair Team</Text>
                <IconButton aria-label="Toggle color mode" onClick={toggleColorMode}
                            icon={colorMode === "light" ? <MoonIcon/> : <SunIcon/>} variant="outline"/>);
            </Container>
        </Box>
    )
}