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
        border-color: #800080;
    }
    50% {
        border-color: #ffc0cb;
    }
    100% {
        border-color: #800080;
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
export default function MagicEncyclopedia() {
    // Dinamikus színek
    const bgCard = useColorModeValue("white", "gray.700");
    const textColor = useColorModeValue("gray.800", "white");
    const accentGradient = useColorModeValue("linear(45deg, purple.400, pink.500)", "linear(45deg, purple.300, pink.400)");
    const skillBg = useColorModeValue("purple.50", "purple.900");

    const bossBg_red = useColorModeValue("red.100", "red.900");
    const bossBg_purple = useColorModeValue("pink.100", "pink.900");
    const bossBg_green = useColorModeValue("teal.100", "teal.900");
    const bossBg_blue = useColorModeValue("cyan.100", "cyan.900");

    const SkillTextColor_green = useColorModeValue("teal.900", "teal.100");
    const SkillTextColor_red = useColorModeValue("red.900", "red.100");
    const SkillTextColor_purple = useColorModeValue("pink.900", "pink.100");
    const SkillTextColor_blue = useColorModeValue("cyan.900", "cyan.100");

    const bossBorder = useColorModeValue("pink.200", "pink.600");
    const bossHeaderGradient = useColorModeValue("linear(45deg, pink.300, pink.500)", "linear(45deg, pink.500, pink.700)");
    const gridBg = useColorModeValue("pink.50", "pink.800");
    const bossAnalysisBg = useColorModeValue("rgba(255,255,255,0.15)", "rgba(0,0,0,0.3)");
    const bossAnalysisTextColor = useColorModeValue("pink.500", "pink.300");

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
                    Mágikus Pálya Bemutatása
                </Heading>
            </Flex>

            {/* Játékos kártya */}
            <ResponsiveCard bg={bgCard} borderColor="purple.300" my={12}>
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
                            src="/images/magic_player.png"
                            alt="Karakter"
                            w="100%"
                            h="100%"
                            p={5}
                            borderRadius="1rem"
                            border="3px solid"
                            borderColor="purple.300"
                            objectFit="cover"
                        />
                    </MotionBox>
                    <Box flex={1}>
                        <Flex gap={12} mb={8} direction={{base: 'column', md: 'row'}}>
                            <Flex align="center" gap={4}>
                                <Box as={FaHeart} color="pink.500" boxSize={6}/>
                                <Box>
                                    <Text fontWeight="400" fontSize="1.25rem">150 Élet</Text>
                                </Box>
                            </Flex>
                            <Flex align="center" gap={4}>
                                <Box as={FaDragon} color="purple.400" boxSize={6}/>
                                <Box>
                                    <Text fontWeight="400" fontSize="1.25rem">2 Sebzés</Text>
                                </Box>
                            </Flex>
                        </Flex>
                        <Box bg={skillBg} p={5} borderRadius="1rem" borderLeft="4px solid" borderColor="purple.400">
                            <Text fontSize="1.25rem">
                                A Space gomb megnyomásával tud ütni a Játékos.
                            </Text>
                        </Box>
                    </Box>
                </Flex>
            </ResponsiveCard>

            {/* Karakter Képessége */}
            <Box bg={bgCard} p={8} borderRadius="2rem" boxShadow="lg" mt={12}>
                <Heading color="purple.400" mb={8}>
                    <Flex align="center" gap={2}>
                        <FaFileAlt/>
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
                            <Heading size="md" mb={4} color={SkillTextColor_purple} bg={bossBg_purple} p={2} borderRadius={15}>
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
                <Heading color="purple.400" mb={8}>
                    <Flex align="center" gap={2}>
                        <FaSkull/>
                        Ellenséges lények
                    </Flex>
                </Heading>

                {/* Slime */}
                <ResponsiveCard bg={bgCard} borderColor="purple.300" mb={8}>
                    <Flex p={8} gap={12} align="center" direction={{base: 'column', md: 'row'}}>
                        <MotionBox animation={`${float} 3s ease-in-out infinite`}
                                   filter="drop-shadow(0 10px 8px rgba(0,0,0,0.3))">
                            <Image
                                src="/images/skeleton.png"
                                alt="Karakter"
                                w="100%"
                                h={150}
                                p={5}
                                borderRadius="1rem"
                                border="3px solid"
                                borderColor="purple.300"
                                objectFit="cover"
                            />
                        </MotionBox>
                        <Box flex={1}>
                            <Flex gap={12} mb={8} direction={{base: 'column', md: 'row'}}>

                                <Flex align="center" gap={4}>
                                    <Box>
                                        <Text fontWeight="400" fontSize="2rem">Skeleton</Text>
                                    </Box>
                                </Flex>

                                <Flex align="center" gap={4}>
                                    <Box as={FaHeart} color="pink.500" boxSize={6}/>
                                    <Box>
                                        <Text fontWeight="400" fontSize="1.25rem">10 Élet</Text>
                                    </Box>
                                </Flex>
                                <Flex align="center" gap={4}>
                                    <Box as={FaDragon} color="purple.400" boxSize={6}/>
                                    <Box>
                                        <Text fontWeight="400" fontSize="1.25rem">6 Sebzés</Text>
                                        <Text fontWeight="400" fontSize="1rem" color={"gray"}>+5 Sebzés Baltával</Text>
                                    </Box>
                                </Flex>
                            </Flex>
                            <Box position="relative" bg={bossAnalysisBg} p={6} borderRadius="1rem">
                                <Text color="pink.400" fontWeight="400" fontSize="1.25rem">
                                    <Text>Képesség : Baltát dob a karakter felé.</Text>
                                </Text>
                                <Tooltip label="Föellenség részletes leírása" aria-label="Boss info">
                                    <IconButton
                                        icon={<FaInfoCircle/>}
                                        aria-label="Boss info"
                                        colorScheme="pink"
                                        variant="ghost"
                                        size="sm"
                                        mt={2}
                                    />
                                </Tooltip>
                                <Text fontSize="1.25rem" textAlign={"justify"}>Egy sötét mágia által életre keltett csontvázharcos, aki egykor egy rettegett harcos volt. Bár hús már nem borítja csontjait, halál utáni ereje még mindig ott rejlik benne. Egy halálos fegyverrel van felszerelve : mágiával karbantartott, éles baltákkal, amelyeket hatalmas pontossággal hajít ellenfelei felé. Gyors és kitartó, de törékeny csontjai miatt könnyen összezúzható.</Text>
                            </Box>
                        </Box>
                    </Flex>
                </ResponsiveCard>

                <ResponsiveCard bg={bgCard} borderColor="purple.300" mb={8}>
                    <Flex p={8} gap={12} align="center" direction={{base: 'column', md: 'row'}}>
                        <MotionBox animation={`${float} 3s ease-in-out infinite`}
                                   filter="drop-shadow(0 10px 8px rgba(0,0,0,0.3))">
                            <Image
                                src="/images/ghost.png"
                                alt="Karakter"
                                w="100%"
                                h={200}
                                p={5}
                                borderRadius="1rem"
                                border="3px solid"
                                borderColor="purple.300"
                                objectFit="cover"
                            />
                        </MotionBox>
                        <Box flex={1}>
                            <Flex gap={12} mb={8} direction={{base: 'column', md: 'row'}}>

                                <Flex align="center" gap={4}>
                                    <Box>
                                        <Text fontWeight="400" fontSize="2rem">Banshee</Text>
                                    </Box>
                                </Flex>

                                <Flex align="center" gap={4}>
                                    <Box as={FaHeart} color="pink.500" boxSize={6}/>
                                    <Box>
                                        <Text fontWeight="400" fontSize="1.25rem">7 Élet</Text>
                                    </Box>
                                </Flex>
                                <Flex align="center" gap={4}>
                                    <Box as={FaDragon} color="purple.400" boxSize={6}/>
                                    <Box>
                                        <Text fontWeight="400" fontSize="1.25rem">5 Sebzés</Text>
                                    </Box>
                                </Flex>
                            </Flex>
                            <Box position="relative" bg={bossAnalysisBg} p={6} borderRadius="1rem">
                                <Text color="pink.400" fontWeight="400" fontSize="1.25rem">
                                    <Text>Képesség : NINCS</Text>
                                </Text>
                                <Tooltip label="Föellenség részletes leírása" aria-label="Boss info">
                                    <IconButton
                                        icon={<FaInfoCircle/>}
                                        aria-label="Boss info"
                                        colorScheme="pink"
                                        variant="ghost"
                                        size="sm"
                                        mt={2}
                                    />
                                </Tooltip>
                                <Text fontSize="1.25rem">Egy kísérteties nöi szellem. Egykor élö volt, de tragikus sorsa miatt a túlvilág és a halandó világ között rekedt. Lebegve, árnyékként suhan a csatatéren, és hideg szelek kísérik mozgását. Nincs fizikai teste.</Text>
                            </Box>
                        </Box>
                    </Flex>
                </ResponsiveCard>
            </Box>

            {/* Föellenség */}
            <ResponsiveCard bg={bossBg_purple} borderColor={bossBorder} mt={16}>
                <Box bgGradient={bossHeaderGradient} p={8} textAlign="center">
                    <Heading fontSize="1.75rem" color="white">
                        <FaCrown fontSize={50}/> Főellenség : Crystal Kings
                    </Heading>
                </Box>
                <Flex p={8} gap={12} align="center" direction={{base: 'column', md: 'row'}}>
                    <MotionBox animation={`${float} 3s ease-in-out infinite`}
                               filter="drop-shadow(0 15px 12px rgba(0,0,0,0.3))">
                        <Image
                            src="/images/crystal_magic_boss.png"
                            alt="Kolosszus"
                            w="100%"
                            h={350}
                            p={5}
                            borderRadius="1.5rem"
                            border="4px solid"
                            borderColor="pink.300"
                            objectFit="cover"
                        />
                    </MotionBox>
                    <Box flex={1}>
                        <Box mb={8}>
                            <Heading fontSize="1.5rem" color="pink.500" mb={4}>
                                <FaChartBar fontSize={50} /> Harci statisztikák
                            </Heading>
                            <Grid templateColumns="repeat(auto-fit, minmax(200px, 1fr))" gap={6}>
                                <Box bg={gridBg} p={4} borderRadius="1rem">
                                    <Flex align="center" gap={4}>
                                        <FaHeart color="#D53F8C" size="24px"/>
                                        <Box>
                                            <Text fontWeight="400">60 Élet</Text>
                                            <Text fontWeight="400" fontSize="1rem" color={"gray"}>+60 Élet</Text>
                                        </Box>
                                    </Flex>
                                </Box>
                                <Box bg={gridBg} p={4} borderRadius="1rem">
                                    <Flex align="center" gap={4}>
                                        <FaDragon color="#805AD5" size="24px"/>
                                        <Box>
                                            <Text fontWeight="400">15 Sebzés</Text>
                                            <Text fontWeight="400" fontSize="1rem" color={"gray"}>+15 Sebzés</Text>
                                        </Box>
                                    </Flex>
                                </Box>
                            </Grid>
                        </Box>
                        <Box position="relative" bg={bossAnalysisBg} p={6} borderRadius="1rem">
                            <Text color={bossAnalysisTextColor} fontWeight="400" fontSize="1.25rem">
                                <Text>Képesség : Ez egyik villámot lö ki, és a másik pedig, közelharci.</Text>
                            </Text>
                            <Tooltip label="Föellenség részletes leírása" aria-label="Boss info">
                                <IconButton
                                    icon={<FaInfoCircle/>}
                                    aria-label="Boss info"
                                    colorScheme="pink"
                                    variant="ghost"
                                    size="sm"
                                    mt={2}
                                />
                            </Tooltip>
                            <Text fontSize="1.25rem" textAlign={"justify"}>A Crystal Kings egy ösi kristályból született ikerpár, akik együttes erejükkel uralják a harcmezöt. Bár egy testböl származnak, két különbözö harcmodort képviselnek: az egyik egy brutális közelharcos, míg a másik halálos precizitású távolsági támadó.</Text>
                            <Text fontSize="1.25rem" textAlign={"justify"}>Képesek szinkronban mozogni, kiegészítve egymás képességeit, így együtt szinte legyözhetetlennek tünnek. Testük kemény, gyémántszerü kristályból áll, amely ellenáll a legtöbb fizikai támadásnak.</Text>
                        </Box>
                    </Box>
                </Flex>
            </ResponsiveCard>
        </Box>
    );
}