import {
    Box,
    Heading,
    Text,
    Flex,
    Image,
    Tooltip,
    useColorModeValue,
    IconButton,
    Grid, Icon, Center
} from '@chakra-ui/react';
import {keyframes} from '@emotion/react';
import {
    FaHeart,
    FaDragon,
    FaSkull,
    FaCrown,
    FaUser,
    FaInfoCircle,
    FaExclamationTriangle,
    FaChartBar, FaFileAlt
} from 'react-icons/fa';
import {FiLock} from 'react-icons/fi';
import {motion} from 'framer-motion';

// Animációk
const float = keyframes`
    0% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-20px);
    }
    100% {
        transform: translateY(0);
    }
`;

const gradientBorder = keyframes`
    0% {
        border-color: #0000ff;
    }
    50% {
        border-color: #00ffff;
    }
    100% {
        border-color: #0000ff;
    }
`;

const MotionBox = motion(Box);

// Reszponzív kártya komponens
const ResponsiveCard = ({children, bg, borderColor, ...props}) => (
    <MotionBox
        bg={bg}
        borderRadius="2rem"
        border="3px solid"
        borderColor={borderColor}
        animation={`${gradientBorder} 5s infinite`}
        boxShadow="xl"
        overflow="hidden"
        _hover={{transform: 'scale(1.02)', transition: 'transform 0.3s'}}
        {...props}
    >
        {children}
    </MotionBox>
);

// Fö komponens
export default function IceEncyclopedia() {
    // Dinamikus színek
    const bgCard = useColorModeValue("white", "gray.700");
    const textColor = useColorModeValue("gray.800", "white");
    const accentGradient = useColorModeValue("linear(45deg, blue.400, cyan.500)", "linear(45deg, blue.300, cyan.400)");
    const skillBg = useColorModeValue("blue.50", "blue.900");

    const bossBg_red = useColorModeValue("red.100", "red.900");
    const bossBg_purple = useColorModeValue("pink.100", "pink.900");
    const bossBg_green = useColorModeValue("teal.100", "teal.900");
    const bossBg_blue = useColorModeValue("cyan.100", "cyan.900");

    const SkillTextColor_green = useColorModeValue("teal.900", "teal.100");
    const SkillTextColor_red = useColorModeValue("red.900", "red.100");
    const SkillTextColor_purple = useColorModeValue("pink.900", "pink.100");
    const SkillTextColor_blue = useColorModeValue("cyan.900", "cyan.100");

    const bossBorder = useColorModeValue("cyan.200", "cyan.600");
    const bossHeaderGradient = useColorModeValue("linear(45deg, cyan.300, cyan.500)", "linear(45deg, cyan.500, cyan.700)");
    const gridBg = useColorModeValue("cyan.50", "cyan.800");
    const bossAnalysisBg = useColorModeValue("rgba(255,255,255,0.15)", "rgba(0,0,0,0.3)");
    const bossAnalysisTextColor = useColorModeValue("cyan.500", "cyan.300");
    const lockedCardBg = useColorModeValue("gray.100", "gray.800");
    const lockedCardBorder = useColorModeValue("gray.300", "gray.600");

    return (
        <Box maxW="1400px" mx="auto" p={8} minH="100vh">
            {/* Fejléc */}
            <Flex direction="column" align="center" my={16} position="relative">
                <Heading
                    bgGradient={accentGradient}
                    bgClip="text"
                    fontSize={{base: "2rem", md: "2.8rem"}}
                    display="inline-block"
                    p={4}
                    textShadow="0 4px 6px rgba(0, 0, 0, 0.1)"
                >
                    <Box as={FaCrown} mr={2}/>
                    Jég Pálya Bemutatása
                </Heading>
            </Flex>

            {/* Játékos kártya */}
            <ResponsiveCard bg={bgCard} borderColor="blue.300" my={12}>
                <Box bgGradient={accentGradient} p={6}>
                    <Flex align="center" gap={4} color="white">
                        <Heading fontSize="1.75rem">CubeCrusher</Heading>
                        <FaUser fontSize={"1.5rem"}/> JÁTÉKOS KARAKTER
                    </Flex>
                </Box>
                <Flex p={8} gap={12} align="center" direction={{base: 'column', md: 'row'}}>
                    <MotionBox animation={`${float} 3s ease-in-out infinite`}
                               filter="drop-shadow(0 10px 8px rgba(0,0,0,0.3))">
                        <Image
                            src="/images/ice_player.png"
                            alt="Karakter"
                            w="100%"
                            h="100%"
                            p={5}
                            borderRadius="1rem"
                            border="3px solid"
                            borderColor="blue.300"
                            objectFit="cover"
                        />
                    </MotionBox>
                    <Box flex={1}>
                        <Flex gap={12} mb={8} direction={{base: 'column', md: 'row'}}>
                            <Flex align="center" gap={4}>
                                <Box as={FaHeart} color="cyan.500" boxSize={6}/>
                                <Box>
                                    <Text fontWeight="400" fontSize="1.25rem">150 Élet</Text>
                                </Box>
                            </Flex>
                            <Flex align="center" gap={4}>
                                <Box as={FaDragon} color="blue.400" boxSize={6}/>
                                <Box>
                                    <Text fontWeight="400" fontSize="1.25rem">2 Sebzés</Text>
                                </Box>
                            </Flex>
                        </Flex>
                        <Box bg={skillBg} p={5} borderRadius="1rem" borderLeft="4px solid" borderColor="blue.400">
                            <Text fontSize="1.25rem">
                                A Space gomb megnyomásával tud ütni a Játékos.
                            </Text>
                        </Box>
                    </Box>
                </Flex>
            </ResponsiveCard>

            {/* Karakter Képessége */}
            <Box bg={bgCard} p={8} borderRadius="2rem" boxShadow="lg" mt={12}>
                <Heading color="blue.400" mb={8}>
                    <Flex align="center" gap={2}>
                        <FaFileAlt/>
                        Képességek
                    </Flex>
                </Heading>

                {/* Képességek */}
                <ResponsiveCard bg={bgCard} borderColor="blue.300" mb={8}>
                    <Grid templateColumns={{base: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)'}} gap={6}>
                        {/* 1. Kártya */}
                        <Box textAlign="center" p={4} border="4px solid" borderColor="green.500" borderRadius="1rem"
                             ml={5} mt={5} mb={5}>
                            <Heading size="md" mb={4} color={SkillTextColor_green} bg={bossBg_green} p={2} borderRadius={15}>
                                Heal
                            </Heading>
                            <Center>
                                <Image
                                    src="/images/heal_icon.png"
                                    alt="Képesség 1"
                                    w="150"
                                    h="150"
                                    borderRadius="1rem"
                                    objectFit="cover"
                                    mb={4}
                                />
                            </Center>
                            <Text fontSize="lg" color={"green.500"}>
                                + 15 életet tölt vissza a játékosnak és 15 mp - ként lehet az "Y" gomb lenyomásával használni.
                            </Text>
                        </Box>

                        {/* 2. Kártya */}
                        <Box textAlign="center" p={4} border="4px solid" borderColor="red.500" borderRadius="1rem" ml={5} mt={5} mb={5}>
                            <Heading size="md" mb={4} color={SkillTextColor_red} bg={bossBg_red} p={2} borderRadius={15}>
                                Fireball
                            </Heading>
                            <Center>
                                <Image
                                    src="/images/fireball_icon.png"
                                    alt="Képesség 1"
                                    w="150"
                                    h="150"
                                    borderRadius="1rem"
                                    objectFit="cover"
                                    mb={4}
                                />
                            </Center>
                            <Text fontSize="lg" color={"red.500"}>
                                4 - et sebez az ellenségnek és 5 mp - ként lehet az "X" gomb lenyomásával használni.
                            </Text>
                        </Box>

                        {/* 3. Kártya - Zárolt */}
                        <Box
                            textAlign="center"
                            p={4}
                            border="2px solid"
                            borderColor={lockedCardBorder}
                            borderRadius="1rem"
                            mr={5}
                            mt={5}
                            mb={5}
                            bg={lockedCardBg}
                            opacity="0.8"
                            position="relative"
                        >
                            <Box position="absolute" top="50%" left="50%" transform="translate(-50%, -50%)">
                                <Icon as={FiLock} boxSize={12} color="gray.500"/>
                            </Box>
                            <Heading size="md" mb={4} color="gray.500">
                                Zárolt képesség
                            </Heading>
                            <Center>
                                <Image
                                    src="/images/poison_icon.png"
                                    alt="Képesség 1"
                                    w="150"
                                    h="150"
                                    bg="gray.400"
                                    borderRadius="1rem"
                                    objectFit="cover"
                                    mb={4}
                                    opacity="0.3"
                                />
                            </Center>
                            <Text fontSize="lg" color="gray.500">
                                ???
                            </Text>
                        </Box>

                        {/* 4. Kártya - Zárolt */}
                        <Box
                            textAlign="center"
                            p={4}
                            border="2px solid"
                            borderColor={lockedCardBorder}
                            borderRadius="1rem"
                            mr={5}
                            mt={5}
                            mb={5}
                            bg={lockedCardBg}
                            opacity="0.8"
                            position="relative"
                        >
                            <Box position="absolute" top="50%" left="50%" transform="translate(-50%, -50%)">
                                <Icon as={FiLock} boxSize={12} color="gray.500"/>
                            </Box>
                            <Heading size="md" mb={4} color="gray.500">
                                Zárolt képesség
                            </Heading>
                            <Center>
                                <Image
                                    src="/images/water_icon.png"
                                    alt="Képesség 1"
                                    w="150"
                                    h="150"
                                    bg="gray.400"
                                    borderRadius="1rem"
                                    objectFit="cover"
                                    mb={4}
                                    opacity="0.3"
                                />
                            </Center>
                            <Text fontSize="lg" color="gray.500">
                                ???
                            </Text>
                        </Box>
                    </Grid>
                </ResponsiveCard>
            </Box>

            {/* Ellenséges lények */}
            <Box bg={bgCard} p={8} borderRadius="2rem" boxShadow="lg" mt={12}>
                <Heading color="blue.400" mb={8}>
                    <Flex align="center" gap={2}>
                        <FaSkull/>
                        Ellenséges lények
                    </Flex>
                </Heading>

                {/* Slime */}
                <ResponsiveCard bg={bgCard} borderColor="blue.300" mb={8}>
                    <Flex p={8} gap={12} align="center" direction={{base: 'column', md: 'row'}}>
                        <MotionBox animation={`${float} 3s ease-in-out infinite`}
                                   filter="drop-shadow(0 10px 8px rgba(0,0,0,0.3))">
                            <Image
                                src="/images/ice_slime.png"
                                alt="Karakter"
                                w="100%"
                                h={125}
                                p={5}
                                borderRadius="1rem"
                                border="3px solid"
                                borderColor="blue.300"
                                objectFit="cover"
                            />
                        </MotionBox>
                        <Box flex={1}>
                            <Flex gap={12} mb={8} direction={{base: 'column', md: 'row'}}>

                                <Flex align="center" gap={4}>
                                    <Box>
                                        <Text fontWeight="400" fontSize="2rem">Ice Cube</Text>
                                    </Box>
                                </Flex>

                                <Flex align="center" gap={4}>
                                    <Box as={FaHeart} color="teal.500" boxSize={6}/>
                                    <Box>
                                        <Text fontWeight="400" fontSize="1.25rem">6 Élet</Text>
                                    </Box>
                                </Flex>
                                <Flex align="center" gap={4}>
                                    <Box as={FaDragon} color="blue.400" boxSize={6}/>
                                    <Box>
                                        <Text fontWeight="400" fontSize="1.25rem">3 Sebzés</Text>
                                    </Box>
                                </Flex>
                            </Flex>
                            <Box position="relative" bg={bossAnalysisBg} p={6} borderRadius="1rem">
                                <Text color="teal.400" fontWeight="400" fontSize="1.25rem">
                                    <Text>Képesség : NINCS</Text>
                                </Text>
                                <Tooltip label="Föellenség részletes leírása" aria-label="Boss info">
                                    <IconButton
                                        icon={<FaInfoCircle/>}
                                        aria-label="Boss info"
                                        colorScheme="teal"
                                        variant="ghost"
                                        size="sm"
                                        mt={2}
                                    />
                                </Tooltip>
                                <Text fontSize="1.25rem" textAlign={"justify"}>Az elözö pályai slimeok távoli rokona. Az Ice Cube Slime egy különleges nyálkaszörny, amely az extrém hideg hatására kristályosodott meg, és most egy szilárd, jéggel borított formában létezik, teste keményebb, mint a legtöbb slime-é, így nehezebb kihívást is jelent, bár mozgása lassabb, mint a hagyományos Slime-oké.</Text>
                            </Box>
                        </Box>
                    </Flex>
                </ResponsiveCard>

                <ResponsiveCard bg={bgCard} borderColor="blue.300" mb={8}>
                    <Flex p={8} gap={12} align="center" direction={{base: 'column', md: 'row'}}>
                        <MotionBox animation={`${float} 3s ease-in-out infinite`}
                                   filter="drop-shadow(0 10px 8px rgba(0,0,0,0.3))">
                            <Image
                                src="/images/ice_elemental.png"
                                alt="Karakter"
                                w="100%"
                                h={125}
                                p={5}
                                borderRadius="1rem"
                                border="3px solid"
                                borderColor="blue.300"
                                objectFit="cover"
                            />
                        </MotionBox>
                        <Box flex={1}>
                            <Flex gap={12} mb={8} direction={{base: 'column', md: 'row'}}>

                                <Flex align="center" gap={4}>
                                    <Box>
                                        <Text fontWeight="400" fontSize="2rem">Ice Elemental</Text>
                                    </Box>
                                </Flex>

                                <Flex align="center" gap={4}>
                                    <Box as={FaHeart} color="teal.500" boxSize={6}/>
                                    <Box>
                                        <Text fontWeight="400" fontSize="1.25rem">7 Élet</Text>
                                    </Box>
                                </Flex>
                                <Flex align="center" gap={4}>
                                    <Box as={FaDragon} color="blue.400" boxSize={6}/>
                                    <Box>
                                        <Text fontWeight="400" fontSize="1.25rem">4 Sebzés</Text>
                                    </Box>
                                </Flex>
                            </Flex>
                            <Box position="relative" bg={bossAnalysisBg} p={6} borderRadius="1rem">
                                <Text color="teal.400" fontWeight="400" fontSize="1.25rem">
                                    <Text>Képesség : NINCS</Text>
                                </Text>
                                <Tooltip label="Föellenség részletes leírása" aria-label="Boss info">
                                    <IconButton
                                        icon={<FaInfoCircle/>}
                                        aria-label="Boss info"
                                        colorScheme="teal"
                                        variant="ghost"
                                        size="sm"
                                        mt={2}
                                    />
                                </Tooltip>
                                <Text fontSize="1.25rem">Egy ösi jégszellemböl megformált lény, amely a fagy birodalmából érkezett. Teste tiszta jégböl és hóból áll, minden mozdulata jeges szelet kelt. Érintése dermesztö hideget áraszt.</Text>
                            </Box>
                        </Box>
                    </Flex>
                </ResponsiveCard>
            </Box>

            {/* Föellenség */}
            <ResponsiveCard bg={bossBg_blue} borderColor={bossBorder} mt={16}>
                <Box bgGradient={bossHeaderGradient} p={8} textAlign="center">
                    <Heading fontSize="1.75rem" color="white">
                        <FaCrown fontSize={50}/> Főellenség : Ice Golem
                    </Heading>
                </Box>
                <Flex p={8} gap={12} align="center" direction={{base: 'column', md: 'row'}}>
                    <MotionBox animation={`${float} 3s ease-in-out infinite`}
                               filter="drop-shadow(0 15px 12px rgba(0,0,0,0.3))">
                        <Image
                            src="/images/ice_golem_boss.png"
                            alt="Kolosszus"
                            w="100%"
                            h={300}
                            p={5}
                            borderRadius="1.5rem"
                            border="4px solid"
                            borderColor="teal.300"
                            objectFit="cover"
                        />
                    </MotionBox>
                    <Box flex={1}>
                        <Box mb={8}>
                            <Heading fontSize="1.5rem" color="teal.500" mb={4}>
                                <FaChartBar/> Harci statisztikák
                            </Heading>
                            <Grid templateColumns="repeat(auto-fit, minmax(200px, 1fr))" gap={6}>
                                <Box bg={gridBg} p={4} borderRadius="1rem">
                                    <Flex align="center" gap={4}>
                                        <FaHeart color="#38B2AC" size="24px"/>
                                        <Box>
                                            <Text fontWeight="400" fontSize="1.25rem">55 Élet</Text>
                                        </Box>
                                    </Flex>
                                </Box>
                                <Box bg={gridBg} p={4} borderRadius="1rem">
                                    <Flex align="center" gap={4}>
                                        <FaDragon color="#48BB78" size="24px"/>
                                        <Box>
                                            <Text fontWeight="400" fontSize="1.25rem">7 Sebzés</Text>
                                        </Box>
                                    </Flex>
                                </Box>
                            </Grid>
                        </Box>
                        <Box position="relative" bg={bossAnalysisBg} p={6} borderRadius="1rem">
                            <Text color={bossAnalysisTextColor} fontWeight="400" fontSize="1.25rem">
                                <Text>Képesség : Mini Golemeket idéz le, amik 10-et tudnak sebezni.</Text>
                            </Text>
                            <Tooltip label="Föellenség részletes leírása" aria-label="Boss info">
                                <IconButton
                                    icon={<FaInfoCircle/>}
                                    aria-label="Boss info"
                                    colorScheme="teal"
                                    variant="ghost"
                                    size="sm"
                                    mt={2}
                                />
                            </Tooltip>
                            <Text fontSize="1.25rem">A világ föellensége. Egy hatalmas, ösi jéglény, amely a fagy birodalmának örzöjeként járja a világot. Teste tiszta, áthatolhatatlan jégböl ál.</Text>
                            <Text fontSize="1.25rem">Bár lassú mozgású, puszta ereje és ellenállása miatt félelmetes ellenfél. Különleges képessége, hogy harc közben kisebb Mini Ice Golem-eket idéz meg, akik segítik a csatában.</Text>
                        </Box>
                    </Box>
                </Flex>
            </ResponsiveCard>
        </Box>
    );
}