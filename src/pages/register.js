import {useState} from "react";
import supabase from "@/utils/supabaseClient";
import {Box, Button, Input, Text, VStack, Alert} from "@chakra-ui/react"; // Chakra UI
export default function RegistrationForm() {
// Állapotok az űrlap adatainak és visszajelzések kezeléséhez.
    const [email, setEmail] = useState(""); // Email mező állapota.
    const [password, setPassword] = useState(""); // Jelszó mező állapota.
    const [username, setUsername] = useState(""); // Felhasználónév mező állapota.
    const [error, setError] = useState(null); // Hibaüzenet állapota.
    const [success, setSuccess] = useState(false); // Sikeres regisztráció állapota.

// Regisztráció kezelése
    const handleRegistration = async (e) => {
        e.preventDefault(); // Az alapértelmezett űrlapbeküldés letiltása.
        setError(null); // Korábbi hibák törlése.
        setSuccess(false); // Sikeres üzenet alaphelyzetbe állítása.

        try {
            // 1. Felhasználó létrehozása az "auth.users" táblában.
            const {data: user, error: signUpError} = await supabase.auth.signUp({
                email,
                password,
            });

            if (signUpError) throw signUpError; // Hiba esetén leállítjuk a folyamatot.

            // 2. A felhasználó ID-jának lekérése az auth.users-ből.
            const userId = user?.user?.id;

            if (!userId) throw new Error("A felhasználó ID-jét nem sikerült lekérni.");

            // 3. Új rekord létrehozása a "profiles" táblában.
            const {error: profileError} = await supabase.from("profiles").insert([
                {
                    id: userId, // Az auth.users táblából származó egyedi UUID.
                    username, // A felhasználó által megadott felhasználónév.
                },
            ]);

            if (profileError) throw profileError; // Hiba esetén leállítjuk a folyamatot.

            // Sikeres regisztráció.
            setSuccess(true); // Sikerüzenet beállítása.
            setEmail(""); // Az űrlap mezőinek alaphelyzetbe állítása.
            setPassword("");
            setUsername("");
        } catch (err) {
            setError(err.message); // Hibaüzenet megjelenítése.
        }
    };
    return (
        <Box
            p={6}
            maxW={{base: "90%", md: "400px"}}
            mx="auto"
            borderWidth="1px"
            borderRadius="md"
            boxShadow="md"
            mt={{base: "10vw", md: "10.1vw"}}
            mb={{base: "40vw", md: "10vw"}}
        >
            <Text fontSize="xl" fontWeight={"300"} mb={10} textAlign={"center"}>Regisztráció</Text>
            {/* Hibaüzenet megjelenítése */}
            {error && <Alert status="error" mb={4}>{error}</Alert>}

            {/* Sikerüzenet megjelenítése */}
            {success && <Alert status="success" mb={4}>Sikeresen
                regisztráltál!</Alert>}

            {/* Az űrlap a regisztrációhoz */}
            <form onSubmit={handleRegistration}>
                {/* Email mező */}
                <Text textAlign={"left"}>E-mail cím</Text>
                <Input
                    placeholder="pelda@gmail.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    required
                    mt={3}
                    mb={3}
                />

                {/* Jelszó mező */}
                <Text textAlign={"left"}>Jelszó</Text>
                <Input
                    placeholder="password1234"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    required
                    mt={3}
                    mb={3}
                />

                {/* Felhasználónév mező */}
                <Text textAlign={"left"}>Felhasználónév</Text>
                <Input
                    placeholder="Felhasználónév"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    type="text"
                    required
                    mt={3}
                    mb={3}
                />

                {/* Beküldés gomb */}
                <Button type="submit" colorScheme="blue" fontWeight={"300"} width="full">Regisztráció</Button>
            </form>
        </Box>
    );
}