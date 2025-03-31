import {
    Box,
    Heading,
    Text,
    Flex,
    Image,
    Tooltip,
    useColorModeValue,
    IconButton,
    Grid, Center
} from '@chakra-ui/react';
import { keyframes } from '@emotion/react';
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
import { motion } from 'framer-motion';

// Animációk
const float = keyframes`
    0% { transform: translateY(0); }
    50% { transform: translateY(-20px); }
    100% { transform: translateY(0); }
`;

const gradientBorder = keyframes`
    0% { border-color: #ff0000; }
    50% { border-color: #ff0000; }
    100% { border-color: #ff0000; }
`;

const MotionBox = motion(Box);

// Reszponzív kártya komponens
const ResponsiveCard = ({ children, bg, borderColor, ...props }) => (
    <MotionBox
        bg={bg}
        borderRadius="2rem"
        border="3px solid"
        borderColor={borderColor}
        animation={`${gradientBorder} 5s infinite`}
        boxShadow="xl"
        overflow="hidden"
        _hover={{ transform: 'scale(1.02)', transition: 'transform 0.3s' }}
        {...props}
    >
        {children}
    </MotionBox>
);

// Fö komponens
export default function HellEncyclopedia() {
    // Dinamikus színek
    const bgCard = useColorModeValue("white", "gray.700");
    const textColor = useColorModeValue("gray.800", "white");
    const accentGradient = useColorModeValue("linear(45deg, red.400, red.600)", "linear(45deg, red.300, red.500)");
    const skillBg = useColorModeValue("red.50", "red.900");

    const bossBg_red = useColorModeValue("red.100", "red.900");
    const bossBg_purple = useColorModeValue("pink.100", "pink.900");
    const bossBg_green = useColorModeValue("teal.100", "teal.900");
    const bossBg_blue = useColorModeValue("cyan.100", "cyan.900");

    const SkillTextColor_green = useColorModeValue("teal.900", "teal.100");
    const SkillTextColor_red = useColorModeValue("red.900", "red.100");
    const SkillTextColor_purple = useColorModeValue("purple.900", "purple.100");
    const SkillTextColor_blue = useColorModeValue("cyan.900", "cyan.100");

    const bossBorder = useColorModeValue("red.200", "red.600");
    const bossHeaderGradient = useColorModeValue("linear(45deg, red.300, red.500)", "linear(45deg, red.500, red.700)");
    const gridBg = useColorModeValue("red.50", "red.800");
    const bossAnalysisBg = useColorModeValue("rgba(255,255,255,0.15)", "rgba(0,0,0,0.3)");
    const bossAnalysisTextColor = useColorModeValue("red.500", "red.300");

    return (
        <Box maxW="1400px" mx="auto" p={8} minH="100vh">
            {/* Fejléc */}
            <Flex direction="column" align="center" my={16} position="relative">
                <Heading
                    bgGradient={accentGradient}
                    bgClip="text"
                    fontSize={{ base: "2rem", md: "2.8rem" }}
                    display="inline-block"
                    p={4}
                    textShadow="0 4px 6px rgba(0, 0, 0, 0.1)"
                >
                    <Box as={FaCrown} mr={2} />
                    Pokol Pálya Bemutatása
                </Heading>
            </Flex>

            {/* Játékos kártya */}
            <ResponsiveCard bg={bgCard} borderColor="red.300" my={12}>
                <Box bgGradient={accentGradient} p={6}>
                    <Flex align="center" gap={4} color="white">
                        <Heading fontSize="1.75rem">CubeCrusher</Heading>
                        <FaUser fontSize={"1.5rem"}/> JÁTÉKOS KARAKTER
                    </Flex>
                </Box>
                <Flex p={8} gap={12} align="center" direction={{ base: 'column', md: 'row' }}>
                    <MotionBox animation={`${float} 3s ease-in-out infinite`} filter="drop-shadow(0 10px 8px rgba(0,0,0,0.3))">
                        <Image
                            src="/images/hell_player.png"
                            alt="Karakter"
                            w="100%"
                            h="100%"
                            p={5}
                            borderRadius="1rem"
                            border="3px solid"
                            borderColor="red.300"
                            objectFit="cover"
                        />
                    </MotionBox>
                    <Box flex={1}>
                        <Flex gap={12} mb={8} direction={{ base: 'column', md: 'row' }}>
                            <Flex align="center" gap={4}>
                                <Box as={FaHeart} color="red.500" boxSize={6} />
                                <Box>
                                    <Text fontWeight="400" fontSize="1.25rem">150 Élet</Text>
                                </Box>
                            </Flex>
                            <Flex align="center" gap={4}>
                                <Box as={FaDragon} color="red.400" boxSize={6} />
                                <Box>
                                    <Text fontWeight="400" fontSize="1.25rem">2 Sebzés</Text>
                                </Box>
                            </Flex>
                        </Flex>
                        <Box bg={skillBg} p={5} borderRadius="1rem" borderLeft="4px solid" borderColor="red.400">
                            <Text fontSize="1.25rem">
                                A Space gomb megnyomásával tud ütni a Játékos.
                            </Text>
                        </Box>
                    </Box>
                </Flex>
            </ResponsiveCard>

            {/* Karakter Képessége */}
            <Box bg={bgCard} p={8} borderRadius="2rem" boxShadow="lg" mt={12}>
                <Heading color="red.400" mb={8}>
                    <Flex align="center" gap={2}>
                        <FaFileAlt />
                        Képességek
                    </Flex>
                </Heading>

                {/* Képességek */}
                <ResponsiveCard bg={bgCard} borderColor="red.300" mb={8}>
                    <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' }} gap={6}>
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

                        {/* 3. Kártya */}
                        <Box textAlign="center" p={4} border="4px solid" borderColor="purple.500" borderRadius="1rem" ml={5} mt={5} mb={5}>
                            <Heading size="md" mb={4} color={SkillTextColor_purple}  bg={bossBg_purple} p={2} borderRadius={15}>
                                Poison
                            </Heading>
                            <Center>
                                <Image
                                    src="/images/poison_icon.png"
                                    alt="Képesség 1"
                                    w="150"
                                    h="150"
                                    borderRadius="1rem"
                                    objectFit="cover"
                                    mb={4}
                                />
                            </Center>
                            <Text fontSize="lg" color={"purple.500"}>
                                8 - et sebez az ellenségnek és 10 mp - ként lehet az "C" gomb lenyomásával használni.
                            </Text>
                        </Box>

                        {/* 4. Kártya */}
                        <Box textAlign="center" p={4} border="4px solid" borderColor="blue.500" borderRadius="1rem"
                             mr={5} mt={5} mb={5}>
                            <Heading size="md" mb={4} color={SkillTextColor_blue} bg={bossBg_blue} p={2} borderRadius={15}>
                                Waterclaw
                            </Heading>
                            <Center>
                                <Image
                                    src="/images/water_icon.png"
                                    alt="Képesség 1"
                                    w="150"
                                    h="150"
                                    borderRadius="1rem"
                                    objectFit="cover"
                                    mb={4}
                                />
                            </Center>
                            <Text fontSize="lg" color={"blue.500"}>
                                12 - et sebez az ellenségnek és 15 mp - ként lehet az "V" gomb lenyomásával használni.
                            </Text>
                        </Box>
                    </Grid>
                </ResponsiveCard>
            </Box>

            {/* Ellenséges lények */}
            <Box bg={bgCard} p={8} borderRadius="2rem" boxShadow="lg" mt={12}>
                <Heading color="red.400" mb={8}>
                    <Flex align="center" gap={2}>
                        <FaSkull/>
                        Ellenséges lények
                    </Flex>
                </Heading>

                {/* Skeleton */}
                <ResponsiveCard bg={bgCard} borderColor="purple.300" mb={8}>
                    <Flex p={8} gap={12} align="center" direction={{base: 'column', md: 'row'}}>
                        <MotionBox animation={`${float} 3s ease-in-out infinite`}
                                   filter="drop-shadow(0 10px 8px rgba(0,0,0,0.3))">
                            <Image
                                src="/images/fire_skull_hell.png"
                                alt="Karakter"
                                w="100%"
                                h={150}
                                p={5}
                                borderRadius="1rem"
                                border="3px solid"
                                borderColor="red.300"
                                objectFit="cover"
                            />
                        </MotionBox>
                        <Box flex={1}>
                            <Flex gap={12} mb={8} direction={{base: 'column', md: 'row'}}>

                                <Flex align="center" gap={4}>
                                    <Box>
                                        <Text fontWeight="400" fontSize="2rem">Fire Skull</Text>
                                    </Box>
                                </Flex>

                                <Flex align="center" gap={4}>
                                    <Box as={FaHeart} color="red.500" boxSize={6}/>
                                    <Box>
                                        <Text fontWeight="400" fontSize="1.25rem">11 Élet</Text>
                                    </Box>
                                </Flex>
                                <Flex align="center" gap={4}>
                                    <Box as={FaDragon} color="red.400" boxSize={6}/>
                                    <Box>
                                        <Text fontWeight="400" fontSize="1.25rem">7 Sebzés</Text>
                                    </Box>
                                </Flex>
                            </Flex>
                            <Box position="relative" bg={bossAnalysisBg} p={6} borderRadius="1rem">
                                <Text color="red.400" fontWeight="400" fontSize="1.25rem">
                                    <Text>Képesség : Elektromos tüzgolyókat lö ki.</Text>
                                </Text>
                                <Tooltip label="Föellenség részletes leírása" aria-label="Boss info">
                                    <IconButton
                                        icon={<FaInfoCircle/>}
                                        aria-label="Boss info"
                                        colorScheme="red"
                                        variant="ghost"
                                        size="sm"
                                        mt={2}
                                    />
                                </Tooltip>
                                <Text fontSize="1.25rem">Egy lebegö, izzó koponya, amely a tüz birodalmából származik. Egykor egy nagyhatalmú varázsló vagy harcos maradványa lehetett, akinek lelke sosem nyugodott meg, és most lángoló bosszúvággyal csap le áldozataira.</Text>
                                <Text fontSize="1.25rem">Bár teste nincs, folyamatosan lobogó tüz veszi körül, és képes halálos tüzgolyókat kilövellni ellenfeleire.</Text>
                            </Box>
                        </Box>
                    </Flex>
                </ResponsiveCard>

                <ResponsiveCard bg={bgCard} borderColor="red.300" mb={8}>
                    <Flex p={8} gap={12} align="center" direction={{base: 'column', md: 'row'}}>
                        <MotionBox animation={`${float} 3s ease-in-out infinite`}
                                   filter="drop-shadow(0 10px 8px rgba(0,0,0,0.3))">
                            <Image
                                src="/images/fire_elemental_hell.png"
                                alt="Karakter"
                                w="100%"
                                h={200}
                                p={5}
                                borderRadius="1rem"
                                border="3px solid"
                                borderColor="red.300"
                                objectFit="cover"
                            />
                        </MotionBox>
                        <Box flex={1}>
                            <Flex gap={12} mb={8} direction={{base: 'column', md: 'row'}}>

                                <Flex align="center" gap={4}>
                                    <Box>
                                        <Text fontWeight="400" fontSize="2rem">Fire Elemental</Text>
                                    </Box>
                                </Flex>

                                <Flex align="center" gap={4}>
                                    <Box as={FaHeart} color="red.500" boxSize={6}/>
                                    <Box>
                                        <Text fontWeight="400" fontSize="1.25rem">13 Élet</Text>
                                    </Box>
                                </Flex>
                                <Flex align="center" gap={4}>
                                    <Box as={FaDragon} color="red.400" boxSize={6}/>
                                    <Box>
                                        <Text fontWeight="400" fontSize="1.25rem">8 Sebzés</Text>
                                    </Box>
                                </Flex>
                            </Flex>
                            <Box position="relative" bg={bossAnalysisBg} p={6} borderRadius="1rem">
                                <Text color="red.400" fontWeight="400" fontSize="1.25rem">
                                    <Text>Képesség : NINCS</Text>
                                </Text>
                                <Tooltip label="Föellenség részletes leírása" aria-label="Boss info">
                                    <IconButton
                                        icon={<FaInfoCircle/>}
                                        aria-label="Boss info"
                                        colorScheme="red"
                                        variant="ghost"
                                        size="sm"
                                        mt={2}
                                    />
                                </Tooltip>
                                <Text fontSize="1.25rem">Egy pusztító tüzszellem, amely örökösen lángol. Teste izzó magma és perzselö lángok kavargó masszájából áll, minden mozdulata höt és fényt áraszt. A Fire Elemental minden, ami a pusztító energiát és a nyers eröt jelképezi. Érintése képes lángba borítani ellenfeleit, és minden környezetében lévöt felperzsel.</Text>
                            </Box>
                        </Box>
                    </Flex>
                </ResponsiveCard>
            </Box>

            {/* Föellenség */}
            <ResponsiveCard bg={bossBg_red} borderColor={bossBorder} mt={16}>
                <Box bgGradient={bossHeaderGradient} p={8} textAlign="center">
                    <Heading fontSize="1.75rem" color="white">
                        <FaCrown fontSize={50}/> Főellenség : The Cube
                    </Heading>
                </Box>
                <Flex p={8} gap={12} align="center" direction={{base: 'column', md: 'row'}}>
                    <MotionBox animation={`${float} 3s ease-in-out infinite`}
                               filter="drop-shadow(0 15px 12px rgba(0,0,0,0.3))">
                        <Image
                            src="/images/cube.png"
                            alt="Kolosszus"
                            w="100%"
                            h={200}
                            p={5}
                            borderRadius="1.5rem"
                            border="4px solid"
                            borderColor="red.300"
                            objectFit="cover"
                        />
                    </MotionBox>
                    <Box flex={1}>
                        <Box mb={8}>
                            <Heading fontSize="1.5rem" color="red.500" mb={4}>
                                <FaChartBar/> Harci statisztikák
                            </Heading>
                            <Grid templateColumns="repeat(auto-fit, minmax(200px, 1fr))" gap={6}>
                                <Box bg={gridBg} p={4} borderRadius="1rem">
                                    <Flex align="center" gap={4}>
                                        <FaHeart color="#E53E3E" size="24px"/>
                                        <Box>
                                            <Text fontWeight="400">80 Élet</Text>
                                        </Box>
                                    </Flex>
                                </Box>
                                <Box bg={gridBg} p={4} borderRadius="1rem">
                                    <Flex align="center" gap={4}>
                                        <FaDragon color="#C53030" size="24px"/>
                                        <Box>
                                            <Text fontWeight="400">10 Sebzés</Text>
                                        </Box>
                                    </Flex>
                                </Box>
                            </Grid>
                        </Box>
                        <Box position="relative" bg={bossAnalysisBg} p={6} borderRadius="1rem">
                            <Text color={bossAnalysisTextColor} fontWeight="400" fontSize="1.25rem">
                                <Text>Képesség : Képes forogni és szinte kiszámíthatatlan módon támadni.</Text>
                            </Text>
                            <Tooltip label="Föellenség részletes leírása" aria-label="Boss info">
                                <IconButton
                                    icon={<FaInfoCircle/>}
                                    aria-label="Boss info"
                                    colorScheme="red"
                                    variant="ghost"
                                    size="sm"
                                    mt={2}
                                />
                            </Tooltip>
                            <Text fontSize="1.25rem" textAlign={"justify"}>Egy ösi, rejtélyes mesterséges lény, amely az univerzum egyik legtökéletesebb és legveszélyesebb fegyvere. The Cube nem egyszerü tárgy – egy önálló intelligenciával rendelkezö, gigászi kocka, amely halálos lézersugarakkal irtja ki ellenfeleit.</Text>
                            <Text fontSize="1.25rem" textAlign={"justify"}>Belsejében egy ismeretlen, szinte felfoghatatlan energia forrása lapul, amely minden ellene irányuló támadást visszaverhet, hacsak nem találod meg a gyenge pontját… ha egyáltalán van neki.</Text>
                        </Box>
                    </Box>
                </Flex>
            </ResponsiveCard>
        </Box>
    );
}