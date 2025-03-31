import React from "react";
import {
    Box,
    Heading,
    Text,
    Container,
    Image,
    Card,
    HStack,
    Center,
    Button,
    Link,
    Icon,
    useColorModeValue
} from "@chakra-ui/react";

const PlayIcon = (props) => (
    <Icon viewBox="0 0 24 24" {...props}>
        <path fill="currentColor" d="M8 5v14l11-7z"/>
    </Icon>
);

export default function CaptionSection() {
    const cards = [
        {
            id: 1,
            img: "/Images/portal.gif",
            link: "/Overworld_Portal",
            text: "Overworld"
        },
        {
            id: 2,
            img: "/Images/portal.gif",
            link: "/Ice_Portal",
            text: "Ice"
        },
        {
            id: 3,
            img: "/Images/portal.gif",
            link: "/Desert_Portal",
            text: "Desert"
        },
        {
            id: 4,
            img: "/Images/portal.gif",
            link: "/Magic_Portal",
            text: "Magic"
        },
        {
            id: 5,
            img: "/Images/portal.gif",
            link: "/Hell_Portal",
            text: "Hell"
        },
    ];

    const cardShadow = useColorModeValue(
        "0 4px 12px rgba(0,0,0,0.15)",
        "0 4px 12px rgba(255,255,255,0.15)"
    );
    const cardHoverShadow = useColorModeValue(
        "0 8px 16px rgba(0,0,0,0.2)",
        "0 8px 16px rgba(255,255,255,0.2)"
    );

    const textStyle = {
        color: useColorModeValue("white", "black"),
        bg: useColorModeValue("rgba(0,0,0,0.6)", "rgba(255,255,255,0.6)"),
        px: 4,
        py: 2,
        borderRadius: "md",
        fontWeight: {"bold": 600},
        textTransform: "uppercase",
        letterSpacing: "wider",
        fontSize: "xl",
        position: "absolute",
        top: 4,
        zIndex: 2
    };

    const getTextPosition = (sliceIndex, cardIndex) => {
        // Első sor (0-2. kártyák szövegének a pozíciója)
        if (sliceIndex === 0) {
            switch (cardIndex) {
                case 0:
                    return {left: 4}; // Balra van
                case 1:
                    return {left: "50%", transform: "translateX(-50%)"}; // Középen van
                case 2:
                    return {right: 4}; // Jobbra van
            }
        }
        // Második sor (3-4. kártyáknak a szövegének a pozíciója)
        if (sliceIndex === 1) {
            switch (cardIndex) {
                case 0:
                    return {left: 4}; // Balre van
                case 1:
                    return {right: 4}; // Jobbra van
            }
        }
    };

    return (
        <>
            {/*Első része az oldalnak*/}
            <Container maxW="100%" p={0} m={0} position="relative">
                <Image src="/images/kep213.png" width="100%" height="600px" objectFit="cover" alt="Background"/>

                <Box position="absolute" top={0} left={0} width="100%" height="100%"
                     display="flex" flexDirection="column" alignItems="center" justifyContent="center"
                     bg="rgba(0, 0, 0, 0.5)" color="white" textAlign="center" px={4}>
                    <Heading fontSize={{base: "3xl", md: "4xl", lg: "5xl"}}>
                        The Cube of Despair
                    </Heading>
                    <Text fontSize={{base: "md", lg: "lg"}} mt={4} maxW="800px">
                        A Cube of Despair egy 2D-s dungeon tisztítós akciójáték, ahol a játékosnak szobáról szobára
                        szörnyekkel harcolva kell kijutni. A cél a dungeon teljes kitisztítása, és a világ
                        felszabadítása a pokol urától.
                    </Text>
                    <Link href="https://saqusmmrzthosiejicae.supabase.co/storage/v1/object/public/jatek//TheCubeOfDespair.rar" download>
                        <Button colorScheme="blue" fontSize={"20"} mt={"10"} variant="solid" fontWeight={"300"}>
                            Játék Letöltése
                        </Button>
                    </Link>
                </Box>
            </Container>

            {/*Második része az oldalnak*/}
            <Container maxW={"6xl"} textAlign={"center"} mt={150}>
                <Heading
                    mb={16}
                    fontSize="4xl"
                    fontWeight="bold"
                    color={useColorModeValue("gray.700", "white")}
                >
                    Portálok
                </Heading>

                {/* Első sora a kártyáknak / portáloknak*/}
                <Center mb={10}>
                    <HStack spacing={4} flexWrap="wrap" justifyContent="center">
                        {cards.slice(0, 3).map((card, index) => (
                            <Link key={card.id} href={card.link} _hover={{textDecoration: "none"}}>
                                <Card
                                    w="300px"
                                    h="350px"
                                    position="relative"
                                    overflow="hidden"
                                    boxShadow={cardShadow}
                                    _hover={{
                                        transform: "scale(1.02)",
                                        boxShadow: cardHoverShadow
                                    }}
                                    transition="all 0.3s"
                                >
                                    <Box {...textStyle} {...getTextPosition(0, index)}>
                                        {card.text}
                                    </Box>
                                    <Image
                                        src={card.img}
                                        alt={`Card ${card.id}`}
                                        w="100%"
                                        h="100%"
                                        objectFit="cover"
                                        filter="brightness(0.95)"
                                    />
                                    <Box
                                        position="absolute"
                                        top={0}
                                        left={0}
                                        w="100%"
                                        h="100%"
                                        bg="rgba(0,0,0,0.3)"
                                        opacity={0}
                                        _hover={{opacity: 1}}
                                        transition="opacity 0.3s"
                                        display="flex"
                                        alignItems="center"
                                        justifyContent="center"
                                    >
                                        <PlayIcon boxSize={12} color="white"/>
                                    </Box>
                                </Card>
                            </Link>
                        ))}
                    </HStack>
                </Center>

                {/* Második sora a kártyáknak / portáloknak */}
                <Center>
                    <HStack spacing={4} mb={10} mt={10} flexWrap="wrap" justifyContent="center">
                        {cards.slice(3, 5).map((card, index) => (
                            <Link key={card.id} href={card.link} _hover={{textDecoration: "none"}}>
                                <Card
                                    mt={50}
                                    w="300px"
                                    h="350px"
                                    position="relative"
                                    overflow="hidden"
                                    boxShadow={cardShadow}
                                    _hover={{
                                        transform: "scale(1.02)",
                                        boxShadow: cardHoverShadow
                                    }}
                                    transition="all 0.3s"
                                >
                                    <Box {...textStyle} {...getTextPosition(1, index)}>
                                        {card.text}
                                    </Box>
                                    <Image
                                        src={card.img}
                                        alt={`Card ${card.id}`}
                                        w="100%"
                                        h="100%"
                                        objectFit="cover"
                                        filter="brightness(0.95)"
                                    />
                                    <Box
                                        position="absolute"
                                        top={0}
                                        left={0}
                                        w="100%"
                                        h="100%"
                                        bg="rgba(0,0,0,0.3)"
                                        opacity={0}
                                        _hover={{opacity: 1}}
                                        transition="opacity 0.3s"
                                        display="flex"
                                        alignItems="center"
                                        justifyContent="center"
                                    >
                                        <PlayIcon boxSize={12} color="white"/>
                                    </Box>
                                </Card>
                            </Link>
                        ))}
                    </HStack>
                </Center>
            </Container>
        </>
    );
}