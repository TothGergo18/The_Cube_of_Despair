import {useState} from "react";
import supabase from "@/utils/supabaseClient";
import {Box, Button, Input, Text, Alert, Link, Spacer} from "@chakra-ui/react";

export default function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);
    const handleLogin = async (e) => {
        e.preventDefault();
        setError(null); // Hibák alaphelyzetbe állítása.
        setSuccess(false); // Sikeres állapot alaphelyzetbe állítása.

        try {
            // Bejelentkezés a Supabase auth funkciójával.
            const {data, error: loginError} = await
                supabase.auth.signInWithPassword({
                    email,
                    password,
                });

            if (loginError) throw loginError;
            // Sikeres bejelentkezés.
            setSuccess(true); // Sikerüzenet megjelenítése.
            setEmail(""); // Az űrlap mezők törlése.
            setPassword("");
        } catch (err) {
            setError(err.message); // Hibaüzenet megjelenítése.
        }
    };

    return (
        <Box
            p={6}
            maxW={{ base: "90%", md: "400px" }}
            mx="auto"
            borderWidth="1px"
            borderRadius="md"
            boxShadow="md"
            mt={{ base: "10vw", md: "10.35vw" }}
            mb={{ base: "40vw", md: "10.35vw" }}
        >
            <Text fontSize="xl" fontWeight={"300"} mb={10} textAlign={"center"}>Bejelentkezés</Text>

            {/* Hibaüzenet megjelenítése */}
            {error && <Alert status="error" mb={4}>{error}</Alert>}

            {/* Sikeres üzenet megjelenítése */}
            {success && <Alert status="success" mb={4}>Sikeres bejelentkezés!</Alert>}

            {/* Bejelentkezési űrlap */}
            <form onSubmit={handleLogin}>
                {/* Email mező */}
                <Text textAlign={"left"}>E-mail cím</Text>
                <Input
                    mt={5}
                    placeholder="pelda@gmail.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    required
                />

                {/* Jelszó mező */}
                <Text textAlign={"left"} mt={5}>Jelszó</Text>
                <Input
                    mt={5}
                    mb={5}
                    placeholder="password123"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    required
                />

                {/* Beküldés gomb */}
                <Button type="submit" colorScheme="blue" fontWeight={"300"} width="full">Bejelentkezés</Button>

                <Box display="flex" justifyContent="space-between" mt={5}>
                    <Text>Nincs még fiókod?</Text>
                    <Link href={"/register"} color={"blue.400"}>Itt Regisztrálj</Link>
                </Box>
            </form>
        </Box>
    );
}