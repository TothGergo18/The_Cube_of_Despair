import React from "react";
import {
    Box,
    Flex,
    IconButton,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Link,
    HStack,
    useDisclosure,
    Stack,
    Text,
    Button,
    Avatar,
    Drawer,
    DrawerOverlay,
    DrawerContent,
    DrawerHeader,
    DrawerBody,
    DrawerFooter,
    DrawerCloseButton,
    useColorModeValue,
    useBreakpointValue
} from "@chakra-ui/react";
import {GiHamburgerMenu} from "react-icons/gi";
import {
    RiUserLine,
    RiSettings3Line,
    RiLogoutBoxRLine,
    RiArrowRightLine,
} from "react-icons/ri";
import supabase from "../utils/supabaseClient"; // Jó útvonal kell ide

const Navigation = () => {
    const {isOpen, onOpen, onClose} = useDisclosure();
    const [isLoggedIn, setIsLoggedIn] = React.useState(false);
    const [userProfile, setUserProfile] = React.useState({
        username: "",
        avatar_url: "",
    });

    React.useEffect(() => {
        const checkUserLoggedIn = async () => {
            const {
                data: {user},
            } = await supabase.auth.getUser();
            if (user) {
                setIsLoggedIn(true);
                const {data, error} = await supabase
                    .from("profiles")
                    .select("username, avatar_url")
                    .eq("id", user.id)
                    .single();
                if (data) {
                    console.log("User profile data:", data);
                    setUserProfile(data);
                } else if (error) {
                    console.error("Error fetching user profile:", error);
                }
            }
        };
        checkUserLoggedIn();
    }, []);

    // Színek beállítása világos és sötét mód szerint
    const bg = useColorModeValue("white", "gray.800");
    const borderColor = useColorModeValue("#e2e8f0", "transparent");
    const linkColor = useColorModeValue("gray.700", "gray.100");
    const hideButton = useBreakpointValue({base: false, md: true});
    return (
        <Box bg={bg} px={4} height="60px" borderBottom={`1px solid ${borderColor}`} shadow={"md"} mt={2}>
            {/* Asztali nézet */}
            <Box display={{base: "none", md: "block"}}>
                <Flex justifyContent="space-between" align="center">
                    <Link
                        href="/"
                        p={3}
                        textDecoration="none"
                        fontWeight={"300"}
                        fontSize="xl"
                        _hover={{textDecoration: "none"}}
                    >
                        The Cube of Despair
                    </Link>
                    <HStack spacing={4}>
                        <Link
                            href="https://saqusmmrzthosiejicae.supabase.co/storage/v1/object/public/jatek//TheCubeOfDespair.rar" download
                            p={3}
                            textDecoration="none"
                            color={linkColor}
                            _hover={{textDecoration: "none", color: "blue.500"}}
                        >
                            Letöltés
                        </Link>
                        {isLoggedIn ? (
                            <Menu>
                                <MenuButton
                                    as={Button}
                                    rounded="full"
                                    variant="link"
                                    cursor="pointer"
                                    minW={0}
                                >
                                    <Avatar size="sm" src={userProfile.avatar_url}/>
                                </MenuButton>
                                <MenuList>
                                    <MenuItem
                                        _hover={{
                                            bg: useColorModeValue("gray.100", "gray.500"),
                                            cursor: "pointer",
                                        }}
                                        onClick={async () => {
                                            await supabase.auth.signOut();
                                            setIsLoggedIn(false);
                                            window.location.href = "/";
                                        }}
                                    >
                                        <RiLogoutBoxRLine style={{marginRight: "8px"}}/> Kijelentkezés
                                    </MenuItem>
                                </MenuList>
                            </Menu>
                        ) : (
                            hideButton ? (
                                <Link href="/login" textDecoration="none">
                                    <Button colorScheme="blue" variant="solid" fontWeight={"300"}>
                                        Bejelentkezés
                                    </Button>
                                </Link>
                            ) : (
                                null
                            ))}
                        ) : (
                        null
                    </HStack>
                </Flex>
            </Box>

            {/* Mobil nézet */}
            <Box display={{base: "flex", md: "none"}} alignItems="center" mt={5}>
                <Flex flex="1" justifyContent="flex-start">
                    <IconButton
                        aria-label="Open menu"
                        icon={<GiHamburgerMenu/>}
                        onClick={onOpen}
                        bg={useColorModeValue("gray.100", "gray.900")}
                        color={useColorModeValue("gray.900", "gray.100")}
                    />
                </Flex>

                <Text fontWeight="bold" fontSize="lg" onClick={() => (window.location.href = `/`)}>
                    The Cube of Despair
                </Text>

                <Flex flex="1" justifyContent="flex-end">
                    {isLoggedIn ? (
                        <Avatar size="sm" src={userProfile.avatar_url}
                                onClick={() => (window.location.href = `/profile/${userProfile.username}`)}/>
                    ) : (
                        null
                    )}
                </Flex>
            </Box>

            {/* Drawer a mobil menühöz */}
            <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
                <DrawerOverlay/>
                <DrawerContent>
                    <DrawerHeader textAlign="center">
                        <Text fontSize="lg" fontWeight="bold">
                            The Cube of Despair
                        </Text>
                        <DrawerCloseButton/>
                    </DrawerHeader>
                    <DrawerBody>
                        {/* Navigációs linkek – itt szöveges linkek jelennek meg */}
                        <Stack spacing={4} mt={4} textAlign="center">
                            <Link
                                href="/download"
                                fontSize="lg"
                                textDecoration="none"
                                _hover={{textDecoration: "none", color: "blue.500"}}
                            >
                                Letöltés
                            </Link>
                            <Link
                                href="/login"
                                fontSize="lg"
                                textDecoration="none"
                                _hover={{textDecoration: "none", color: "blue.500"}}
                            >
                                Bejelentkezés
                            </Link>
                            <Link
                                href="/register"
                                fontSize="lg"
                                textDecoration="none"
                                _hover={{textDecoration: "none", color: "blue.500"}}
                            >
                                Regisztráció
                            </Link>
                            {isLoggedIn}
                        </Stack>
                    </DrawerBody>
                    <DrawerFooter justifyContent="center" py={4}>
                        <Text fontSize="sm" color="gray.500">
                            The Cube of Despair
                        </Text>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </Box>
    );
};

export default Navigation;